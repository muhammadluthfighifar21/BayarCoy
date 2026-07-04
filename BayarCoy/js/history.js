/**
 * HISTORY MODULE
 * Handles transaction history operations for BayarKita
 */

import {
    getHistory,
    clearHistory,
    deleteHistoryItem,
    getTransactionById,
    saveHistory
} from './storage.js';

import {
    formatRupiah,
    formatDate,
    formatDateTime,
    downloadFile
} from './utils.js';

import { showToast } from './ui.js';

// ============================================
// FILTER HISTORY
// ============================================
export const filterHistory = (history, filters = {}) => {
    let filtered = [...history];

    // Search by keyword
    if (filters.search && filters.search.trim() !== '') {
        const keyword = filters.search.toLowerCase().trim();
        filtered = filtered.filter(item =>
            item.id.toLowerCase().includes(keyword) ||
            item.type.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword) ||
            (item.customerName && item.customerName.toLowerCase().includes(keyword)) ||
            (item.customerNumber && item.customerNumber.includes(keyword))
        );
    }

    // Filter by type
    if (filters.type && filters.type !== 'all') {
        filtered = filtered.filter(item =>
            item.type.toLowerCase() === filters.type.toLowerCase()
        );
    }

    // Filter by status
    if (filters.status && filters.status !== 'all') {
        filtered = filtered.filter(item =>
            item.status === filters.status
        );
    }

    // Filter by date range
    if (filters.startDate) {
        const start = new Date(filters.startDate);
        filtered = filtered.filter(item =>
            new Date(item.timestamp) >= start
        );
    }
    if (filters.endDate) {
        const end = new Date(filters.endDate);
        end.setHours(23, 59, 59);
        filtered = filtered.filter(item =>
            new Date(item.timestamp) <= end
        );
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return filtered;
};

// ============================================
// SORT HISTORY
// ============================================
export const sortHistory = (history, sortBy = 'date', ascending = false) => {
    const sorted = [...history];

    switch (sortBy) {
        case 'date':
            sorted.sort((a, b) => {
                const dateA = new Date(a.timestamp);
                const dateB = new Date(b.timestamp);
                return ascending ? dateA - dateB : dateB - dateA;
            });
            break;
        case 'amount':
            sorted.sort((a, b) => ascending ? a.amount - b.amount : b.amount - a.amount);
            break;
        case 'type':
            sorted.sort((a, b) => ascending ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type));
            break;
        case 'status':
            sorted.sort((a, b) => ascending ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status));
            break;
        default:
            // Default sort by date descending
            sorted.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    return sorted;
};

// ============================================
// EXPORT HISTORY
// ============================================
export const exportHistoryToPDF = (history, filename = 'riwayat-transaksi.pdf') => {
    try {
        if (typeof jspdf === 'undefined') {
            showToast('jsPDF library tidak ditemukan', 'error');
            return false;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');

        // Title
        doc.setFontSize(16);
        doc.setTextColor(13, 110, 77);
        doc.text('BayarKita - Riwayat Transaksi', 14, 20);

        // Date
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Dicetak: ${formatDate(new Date(), 'DD/MM/YYYY HH:mm')}`, 14, 28);

        // Table
        const tableData = history.map(item => [
            item.id,
            item.type,
            formatDate(item.timestamp, 'DD/MM/YYYY'),
            item.status === 'success' ? 'Berhasil' : item.status === 'pending' ? 'Proses' : 'Gagal',
            formatRupiah(item.amount)
        ]);

        doc.autoTable({
            startY: 35,
            head: [
                ['ID Transaksi', 'Jenis', 'Tanggal', 'Status', 'Total']
            ],
            body: tableData,
            theme: 'grid',
            headStyles: {
                fillColor: [13, 110, 77],
                textColor: [255, 255, 255],
                fontSize: 9,
                cellPadding: 3
            },
            styles: {
                fontSize: 8,
                cellPadding: 2
            },
            columnStyles: {
                0: { cellWidth: 30 },
                1: { cellWidth: 25 },
                2: { cellWidth: 25 },
                3: { cellWidth: 20 },
                4: { cellWidth: 30 }
            }
        });

        // Footer
        const finalY = doc.lastAutoTable.finalY + 10;
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text(`Total Transaksi: ${history.length}`, 14, finalY);
        const totalAmount = history.reduce((sum, item) => sum + item.amount, 0);
        doc.text(`Total Nominal: ${formatRupiah(totalAmount)}`, 14, finalY + 5);

        // Save PDF
        doc.save(filename);
        showToast('PDF berhasil diunduh', 'success');
        return true;
    } catch (error) {
        console.error('Error exporting PDF:', error);
        showToast('Gagal mengunduh PDF', 'error');
        return false;
    }
};

// ============================================
// HISTORY STATISTICS
// ============================================
export const getHistoryStats = () => {
    const history = getHistory();
    const total = history.length;

    if (total === 0) {
        return {
            total: 0,
            success: 0,
            pending: 0,
            failed: 0,
            totalAmount: 0,
            averageAmount: 0,
            monthly: 0,
            monthlyAmount: 0,
            categories: {},
            monthlyData: [],
            successRate: 0
        };
    }

    const success = history.filter(t => t.status === 'success').length;
    const pending = history.filter(t => t.status === 'pending').length;
    const failed = history.filter(t => t.status === 'failed').length;
    const totalAmount = history.reduce((sum, t) => sum + t.amount, 0);
    const averageAmount = totalAmount / total;

    // Monthly stats
    const monthly = history.filter(t => {
        const date = new Date(t.timestamp);
        const now = new Date();
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    });
    const monthlyAmount = monthly.reduce((sum, t) => sum + t.amount, 0);

    // Category stats
    const categories = {};
    history.forEach(t => {
        const category = t.type || 'Lainnya';
        if (!categories[category]) {
            categories[category] = { count: 0, amount: 0 };
        }
        categories[category].count++;
        categories[category].amount += t.amount;
    });

    // Monthly data for chart
    const monthlyData = [];
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
        const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthName = month.toLocaleString('id-ID', { month: 'short' });
        const monthTransactions = history.filter(t => {
            const date = new Date(t.timestamp);
            return date.getMonth() === month.getMonth() && date.getFullYear() === month.getFullYear();
        });
        monthlyData.push({
            month: monthName,
            count: monthTransactions.length,
            amount: monthTransactions.reduce((sum, t) => sum + t.amount, 0)
        });
    }

    return {
        total,
        success,
        pending,
        failed,
        totalAmount,
        averageAmount,
        monthlyCount: monthly.length,
        monthlyAmount,
        categories,
        monthlyData,
        successRate: total > 0 ? (success / total) * 100 : 0
    };
};

// ============================================
// HISTORY OPERATIONS
// ============================================
export const clearAllHistory = () => {
    if (confirm('Apakah Anda yakin ingin menghapus semua riwayat transaksi? Tindakan ini tidak dapat dibatalkan.')) {
        const success = clearHistory();
        if (success) {
            showToast('Semua riwayat berhasil dihapus', 'success');
            return true;
        } else {
            showToast('Gagal menghapus riwayat', 'error');
            return false;
        }
    }
    return false;
};

export const deleteTransaction = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus transaksi ini?')) {
        const success = deleteHistoryItem(id);
        if (success) {
            showToast('Transaksi berhasil dihapus', 'success');
            return true;
        } else {
            showToast('Gagal menghapus transaksi', 'error');
            return false;
        }
    }
    return false;
};

export const getTransactionDetails = (id) => {
    return getTransactionById(id);
};

// ============================================
// GENERATE REPORT
// ============================================
export const generateReport = () => {
    const history = getHistory();
    const stats = getHistoryStats();

    const report = {
        generatedAt: new Date().toISOString(),
        summary: {
            totalTransactions: stats.total,
            successRate: stats.successRate,
            totalAmount: stats.totalAmount,
            averageAmount: stats.averageAmount,
            monthlyTransactions: stats.monthlyCount,
            monthlyAmount: stats.monthlyAmount
        },
        categories: stats.categories,
        monthlyData: stats.monthlyData,
        recentTransactions: history.slice(0, 10)
    };

    return report;
};

// ============================================
// EXPORT FUNCTIONS
// ============================================
window.filterHistory = filterHistory;
window.sortHistory = sortHistory;
window.exportHistoryToPDF = exportHistoryToPDF;
window.clearAllHistory = clearAllHistory;
window.deleteTransaction = deleteTransaction;
window.getTransactionDetails = getTransactionDetails;
window.getHistoryStats = getHistoryStats;
window.generateReport = generateReport;