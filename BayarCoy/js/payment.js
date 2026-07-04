/**
 * PAYMENT MODULE
 * Handles all payment processing logic for BayarKita
 */

import {
    formatRupiah,
    formatDate,
    formatDateTime,
    generateRandomString,
    copyToClipboard
} from './utils.js';

import {
    getProfile,
    saveHistory,
    updateBalance,
    saveLastTransaction,
    getLastTransaction
} from './storage.js';

import { showToast } from './ui.js';

// ============================================
// PAYMENT PROCESSING
// ============================================
export const processPayment = async(paymentData) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
        // Show loading state
        const loadingElement = document.getElementById('paymentLoading');
        if (loadingElement) {
            loadingElement.style.display = 'block';
        }

        // Simulate processing delay
        setTimeout(() => {
            try {
                // Validate payment data
                if (!paymentData.type || !paymentData.amount) {
                    throw new Error('Data pembayaran tidak lengkap');
                }

                // Generate transaction ID
                const transactionId = generateTransactionId();
                const profile = getProfile();

                // Create transaction record
                const transaction = {
                    id: transactionId,
                    type: paymentData.type,
                    category: paymentData.category || 'General',
                    amount: paymentData.amount,
                    status: 'success',
                    method: paymentData.method || 'va',
                    customerNumber: paymentData.customerNumber || '-',
                    customerName: paymentData.customerName || '-',
                    timestamp: new Date().toISOString(),
                    details: paymentData.details || {}
                };

                // Save to history
                saveHistory(transaction);

                // Update balance
                if (profile) {
                    updateBalance(-paymentData.amount);
                }

                // Save last transaction
                saveLastTransaction(transaction);

                // Generate payment receipt
                const receipt = generateReceipt(transaction);

                // Hide loading
                if (loadingElement) {
                    loadingElement.style.display = 'none';
                }

                // Show success modal
                showSuccessModal(transaction, receipt);

                resolve(transaction);
            } catch (error) {
                // Hide loading
                if (loadingElement) {
                    loadingElement.style.display = 'none';
                }
                reject(error);
            }
        }, 1500);
    });
};

// ============================================
// RECEIPT GENERATION
// ============================================
const generateReceipt = (transaction) => {
    const profile = getProfile();

    return {
        transactionId: transaction.id,
        date: formatDateTime(transaction.timestamp),
        type: transaction.type,
        category: transaction.category,
        amount: transaction.amount,
        amountFormatted: formatRupiah(transaction.amount),
        customerNumber: transaction.customerNumber,
        customerName: transaction.customerName,
        method: transaction.method,
        status: 'Berhasil',
        profile: {
            name: profile.name,
            email: profile.email,
            phone: profile.phone
        },
        barcode: generateRandomString(12),
        qrCode: `https://api.bayarkita.com/qr/${transaction.id}`
    };
};

// ============================================
// SUCCESS MODAL
// ============================================
const showSuccessModal = (transaction, receipt) => {
    // Create modal container
    const modalHTML = `
        <div class="modal fade success-modal" id="successModal" tabindex="-1" data-bs-backdrop="static">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="success-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h4 class="mt-3">Pembayaran Berhasil!</h4>
                        <p class="text-muted">Transaksi Anda telah diproses</p>
                        
                        <div class="text-start mt-4">
                            <div class="row g-2">
                                <div class="col-6">
                                    <small class="text-muted">ID Transaksi</small>
                                    <p class="fw-bold">${receipt.transactionId}</p>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Tanggal</small>
                                    <p class="fw-bold">${receipt.date}</p>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Jenis</small>
                                    <p class="fw-bold">${receipt.type}</p>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Status</small>
                                    <p class="fw-bold text-success">${receipt.status}</p>
                                </div>
                                <div class="col-12">
                                    <small class="text-muted">Nominal</small>
                                    <p class="fw-bold text-primary" style="font-size: 1.25rem;">${receipt.amountFormatted}</p>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col-6">
                                <div id="qrcodeContainer" class="text-center">
                                    <div id="qrcode" style="display: inline-block;"></div>
                                    <small class="text-muted d-block mt-1">QR Code</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="text-center">
                                    <div style="padding: 0.5rem; background: #f8f9fa; border-radius: 8px;">
                                        <small class="text-muted">Barcode</small>
                                        <div style="font-family: 'Courier New', monospace; font-size: 1.2rem; letter-spacing: 2px;">
                                            ${receipt.barcode}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" onclick="window.printReceipt()">
                                <i class="fas fa-print me-2"></i> Print
                            </button>
                            <button class="btn btn-outline-primary" onclick="window.downloadPDF()">
                                <i class="fas fa-file-pdf me-2"></i> Download PDF
                            </button>
                            <button class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                <i class="fas fa-arrow-left me-2"></i> Kembali
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append modal to body
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();

    // Generate QR Code
    setTimeout(() => {
        const qrContainer = document.getElementById('qrcode');
        if (qrContainer && typeof QRCode !== 'undefined') {
            new QRCode(qrContainer, {
                text: receipt.qrCode,
                width: 120,
                height: 120,
                colorDark: '#0d6e4d',
                colorLight: '#ffffff'
            });
        }
    }, 100);
};

// ============================================
// PAYMENT METHODS
// ============================================
export const generateVirtualAccount = (bank, customerNumber) => {
    const prefix = '8899';
    const random = generateRandomString(8, '0123456789');
    const vaNumber = `${prefix}${customerNumber}${random}`.substring(0, 20);

    return {
        bank: bank || 'Bank Mandiri',
        vaNumber: vaNumber,
        instructions: [
            '1. Login ke aplikasi mobile banking atau internet banking',
            '2. Pilih menu Transfer ke Virtual Account',
            '3. Masukkan nomor VA yang tertera',
            '4. Konfirmasi dan selesaikan pembayaran',
            '5. Transaksi akan otomatis terverifikasi'
        ],
        expiry: formatDate(Date.now() + 24 * 60 * 60 * 1000, 'DD/MM/YYYY HH:mm')
    };
};

export const generateQRIS = (amount, transactionId) => {
    const qrisData = {
        merchantId: 'BAYARKITA001',
        transactionId: transactionId,
        amount: amount,
        timestamp: new Date().toISOString()
    };

    const qrisString = JSON.stringify(qrisData);
    const qrCode = `QRIS:${btoa(qrisString)}`;

    return {
        qrCode: qrCode,
        amount: amount,
        transactionId: transactionId,
        expiry: 300 // 5 minutes in seconds
    };
};

export const generateTellerPayment = (transactionId, amount) => {
    const paymentCode = `BAYAR-${transactionId}-${generateRandomString(4)}`;

    const offices = [
        { name: 'Kantor Pusat Jakarta', address: 'Jl. Sudirman No. 1, Jakarta', phone: '021-1234567' },
        { name: 'Kantor Cabang Bandung', address: 'Jl. Asia Afrika No. 45, Bandung', phone: '022-7654321' },
        { name: 'Kantor Cabang Surabaya', address: 'Jl. Tunjungan No. 78, Surabaya', phone: '031-9876543' },
        { name: 'Kantor Cabang Medan', address: 'Jl. Pemuda No. 23, Medan', phone: '061-4567890' }
    ];

    return {
        paymentCode: paymentCode,
        amount: amount,
        amountFormatted: formatRupiah(amount),
        offices: offices,
        instructions: [
            '1. Datang ke kantor cabang terdekat',
            '2. Tunjukkan kode pembayaran',
            '3. Bayar sesuai nominal yang tertera',
            '4. Minta struk pembayaran sebagai bukti'
        ]
    };
};

// ============================================
// VALIDATE PAYMENT
// ============================================
export const validatePayment = (paymentData) => {
    const errors = [];
    let isValid = true;

    if (!paymentData.amount || paymentData.amount <= 0) {
        errors.push('Jumlah pembayaran harus lebih dari 0');
        isValid = false;
    }

    if (!paymentData.method) {
        errors.push('Metode pembayaran harus dipilih');
        isValid = false;
    }

    if (!paymentData.type) {
        errors.push('Jenis pembayaran harus dipilih');
        isValid = false;
    }

    if (paymentData.customerNumber && paymentData.customerNumber.trim() === '') {
        errors.push('Nomor pelanggan harus diisi');
        isValid = false;
    }

    return { isValid, errors };
};

// ============================================
// PAYMENT HISTORY
// ============================================
export const getPaymentStats = (history) => {
    const total = history.length;
    const success = history.filter(t => t.status === 'success').length;
    const pending = history.filter(t => t.status === 'pending').length;
    const failed = history.filter(t => t.status === 'failed').length;
    const totalAmount = history.reduce((sum, t) => sum + t.amount, 0);
    const monthly = history.filter(t => {
        const date = new Date(t.timestamp);
        const now = new Date();
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    });

    return {
        total,
        success,
        pending,
        failed,
        totalAmount,
        monthlyAmount: monthly.reduce((sum, t) => sum + t.amount, 0),
        monthlyCount: monthly.length,
        successRate: total > 0 ? (success / total) * 100 : 0
    };
};

// ============================================
// EXPORT FUNCTIONS
// ============================================
window.processPayment = processPayment;
window.printReceipt = () => {
    window.print();
};
window.downloadPDF = () => {
    showToast('Download PDF akan segera tersedia', 'info');
};
window.copyVANumber = async(vaNumber) => {
    const success = await copyToClipboard(vaNumber);
    if (success) {
        showToast('Nomor VA berhasil disalin', 'success');
    } else {
        showToast('Gagal menyalin nomor VA', 'error');
    }
};