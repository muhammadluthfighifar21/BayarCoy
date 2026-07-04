/**
 * APP.JS - BayarKita Complete Application
 * Single file - no modules required
 */

// ============================================
// ============================================
// DATA
// ============================================
// ============================================

const DUMMY_DATA = {
    profile: {
        name: 'Pengguna',
        email: 'user@bayarkita.com',
        phone: '081234567890',
        balance: 10000000,
        membership: 'Gold',
        joinDate: '2024-01-01',
        address: 'Jl. Contoh No. 123, Jakarta',
        avatar: 'PK'
    },
    customers: {
        pln: [
            { id: 1, name: 'Ahmad Firmansyah', customerNumber: 'PLN20240001', address: 'Jl. Sudirman No. 45, Jakarta', tariff: 'R1-1300', status: 'Aktif' },
            { id: 2, name: 'Siti Rahayu', customerNumber: 'PLN20240002', address: 'Jl. Gatot Subroto No. 12, Bandung', tariff: 'R2-2200', status: 'Aktif' },
            { id: 3, name: 'Budi Santoso', customerNumber: 'PLN20240003', address: 'Jl. Diponegoro No. 78, Surabaya', tariff: 'R1-900', status: 'Tunggakan' },
            { id: 4, name: 'Dewi Lestari', customerNumber: 'PLN20240004', address: 'Jl. Ahmad Yani No. 56, Medan', tariff: 'R1-1300', status: 'Aktif' },
            { id: 5, name: 'Rudi Hartono', customerNumber: 'PLN20240005', address: 'Jl. Pahlawan No. 34, Semarang', tariff: 'R2-2200', status: 'Aktif' }
        ],
        pdam: [
            { id: 1, name: 'Andi Wijaya', customerNumber: 'PDAM2024001', address: 'Jl. Merdeka No. 23, Jakarta', status: 'Aktif' },
            { id: 2, name: 'Maya Sari', customerNumber: 'PDAM2024002', address: 'Jl. Kemang Raya No. 89, Jakarta', status: 'Tunggakan' },
            { id: 3, name: 'Hendra Gunawan', customerNumber: 'PDAM2024003', address: 'Jl. BSD City No. 45, Tangerang', status: 'Aktif' }
        ],
        internet: [
            { id: 1, name: 'Rina Marlina', customerNumber: 'INET2024001', package: 'IndiHome Fiber 50Mbps', address: 'Jl. Raya Bogor No. 67, Jakarta', status: 'Aktif' },
            { id: 2, name: 'Firman Hidayat', customerNumber: 'INET2024002', package: 'Biznet Home 100Mbps', address: 'Jl. Kalimalang No. 34, Bekasi', status: 'Aktif' },
            { id: 3, name: 'Nina Lestari', customerNumber: 'INET2024003', package: 'MyRepublic 75Mbps', address: 'Jl. Cikarang Raya No. 78, Cikarang', status: 'Tunggakan' }
        ],
        seminar: [
            { id: 1, name: 'Workshop JavaScript Mastery', code: 'SEM-JS-001', price: 250000, date: '2026-06-15', location: 'Online via Zoom', status: 'Tersedia' },
            { id: 2, name: 'Seminar AI & Data Science', code: 'SEM-AI-002', price: 350000, date: '2026-06-20', location: 'Hotel Santika, Jakarta', status: 'Tersedia' },
            { id: 3, name: 'Workshop UI/UX Design', code: 'SEM-UX-003', price: 200000, date: '2026-06-25', location: 'Online via Google Meet', status: 'Tersedia' }
        ]
    },
    students: [{
            nim: '202401010001',
            name: 'Aulia Putri',
            program: 'Teknik Informatika',
            semester: 4,
            installments: [
                { semester: 1, description: 'SPP Semester Ganjil 2023/2024', nominal: 4500000, status: 'Lunas' },
                { semester: 2, description: 'SPP Semester Genap 2023/2024', nominal: 4500000, status: 'Lunas' },
                { semester: 3, description: 'SPP Semester Ganjil 2024/2025', nominal: 4500000, status: 'Lunas' },
                { semester: 4, description: 'SPP Semester Genap 2024/2025', nominal: 4500000, status: 'Belum Lunas' },
                { semester: 5, description: 'SPP Semester Ganjil 2025/2026', nominal: 4500000, status: 'Belum Lunas' },
                { semester: 6, description: 'SPP Semester Genap 2025/2026', nominal: 4500000, status: 'Belum Lunas' },
                { semester: 7, description: 'SPP Semester Ganjil 2026/2027', nominal: 4500000, status: 'Belum Lunas' },
                { semester: 8, description: 'SPP Semester Genap 2026/2027', nominal: 4500000, status: 'Belum Lunas' }
            ]
        },
        {
            nim: '202401010002',
            name: 'Rizky Ramadhan',
            program: 'Sistem Informasi',
            semester: 6,
            installments: [
                { semester: 1, description: 'SPP Semester Ganjil 2023/2024', nominal: 4200000, status: 'Lunas' },
                { semester: 2, description: 'SPP Semester Genap 2023/2024', nominal: 4200000, status: 'Lunas' },
                { semester: 3, description: 'SPP Semester Ganjil 2024/2025', nominal: 4200000, status: 'Lunas' },
                { semester: 4, description: 'SPP Semester Genap 2024/2025', nominal: 4200000, status: 'Lunas' },
                { semester: 5, description: 'SPP Semester Ganjil 2025/2026', nominal: 4200000, status: 'Lunas' },
                { semester: 6, description: 'SPP Semester Genap 2025/2026', nominal: 4200000, status: 'Belum Lunas' },
                { semester: 7, description: 'SPP Semester Ganjil 2026/2027', nominal: 4200000, status: 'Belum Lunas' },
                { semester: 8, description: 'SPP Semester Genap 2026/2027', nominal: 4200000, status: 'Belum Lunas' }
            ]
        },
        {
            nim: '202401010003',
            name: 'Siti Fatimah',
            program: 'Teknik Elektro',
            semester: 2,
            installments: [
                { semester: 1, description: 'SPP Semester Ganjil 2023/2024', nominal: 4800000, status: 'Lunas' },
                { semester: 2, description: 'SPP Semester Genap 2023/2024', nominal: 4800000, status: 'Belum Lunas' },
                { semester: 3, description: 'SPP Semester Ganjil 2024/2025', nominal: 4800000, status: 'Belum Lunas' },
                { semester: 4, description: 'SPP Semester Genap 2024/2025', nominal: 4800000, status: 'Belum Lunas' },
                { semester: 5, description: 'SPP Semester Ganjil 2025/2026', nominal: 4800000, status: 'Belum Lunas' },
                { semester: 6, description: 'SPP Semester Genap 2025/2026', nominal: 4800000, status: 'Belum Lunas' },
                { semester: 7, description: 'SPP Semester Ganjil 2026/2027', nominal: 4800000, status: 'Belum Lunas' },
                { semester: 8, description: 'SPP Semester Genap 2026/2027', nominal: 4800000, status: 'Belum Lunas' }
            ]
        }
    ],
    providerPrefixes: {
        '0811': 'Telkomsel',
        '0812': 'Telkomsel',
        '0813': 'Telkomsel',
        '0821': 'Telkomsel',
        '0822': 'Telkomsel',
        '0823': 'Telkomsel',
        '0852': 'Telkomsel',
        '0853': 'Telkomsel',
        '0851': 'Telkomsel',
        '0817': 'XL',
        '0818': 'XL',
        '0819': 'XL',
        '0859': 'XL',
        '0877': 'XL',
        '0878': 'XL',
        '0855': 'Indosat',
        '0856': 'Indosat',
        '0857': 'Indosat',
        '0858': 'Indosat',
        '0815': 'Indosat',
        '0816': 'Indosat',
        '0895': 'Tri',
        '0896': 'Tri',
        '0897': 'Tri',
        '0898': 'Tri',
        '0899': 'Tri',
        '0881': 'Smartfren',
        '0882': 'Smartfren',
        '0883': 'Smartfren',
        '0884': 'Smartfren',
        '0885': 'Smartfren',
        '0886': 'Smartfren',
        '0887': 'Smartfren',
        '0888': 'Smartfren',
        '0889': 'Smartfren',
        '0831': 'Axis',
        '0832': 'Axis',
        '0833': 'Axis',
        '0838': 'Axis'
    },
    pulsaNominal: [
        { value: 10000, label: 'Rp 10.000' },
        { value: 25000, label: 'Rp 25.000' },
        { value: 50000, label: 'Rp 50.000' },
        { value: 100000, label: 'Rp 100.000' },
        { value: 200000, label: 'Rp 200.000' }
    ],
    faqData: [
        { id: 1, question: 'Apa itu BayarCoy?', answer: 'BayarCoy adalah platform pembayaran multi-layanan yang memungkinkan Anda membayar berbagai tagihan seperti PLN, PDAM, Internet, SPP, dan mengisi pulsa dengan mudah dan cepat secara online.' },
        { id: 2, question: 'Bagaimana cara membayar tagihan?', answer: 'Pilih menu "Bayar Tagihan", pilih jenis tagihan, masukkan nomor pelanggan, validasi data, pilih metode pembayaran, dan konfirmasi pembayaran.' },
        { id: 3, question: 'Metode pembayaran apa saja yang tersedia?', answer: 'Tersedia 3 metode pembayaran: Virtual Account (VA), QRIS, dan Teller.' },
        { id: 4, question: 'Apakah data saya aman di BayarCoy?', answer: 'Ya, semua data disimpan secara lokal di browser Anda menggunakan LocalStorage.' }
    ]
};

// ============================================
// ============================================
// STORAGE
// ============================================
// ============================================

const STORAGE_KEYS = {
    HISTORY: 'bayarCoy_history',
    PROFILE: 'bayarCoy_profile',
    DARK_MODE: 'bayarCoy_darkmode',
    LAST_TRANSACTION: 'bayarCoy_last_transaction'
};

function getHistory() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
        return data ? JSON.parse(data) : [];
    } catch { return []; }
}

function saveHistory(transaction) {
    try {
        const history = getHistory();
        transaction.id = 'TRX' + Date.now() + Math.floor(Math.random() * 1000);
        transaction.timestamp = new Date().toISOString();
        history.unshift(transaction);
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
        return true;
    } catch { return false; }
}

function getProfile() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
        return data ? JSON.parse(data) : {...DUMMY_DATA.profile };
    } catch { return {...DUMMY_DATA.profile }; }
}

function saveProfile(profile) {
    try {
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
        return true;
    } catch { return false; }
}

function getDarkMode() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
        return data ? JSON.parse(data) : false;
    } catch { return false; }
}

function saveDarkMode(isDark) {
    try {
        localStorage.setItem(STORAGE_KEYS.DARK_MODE, JSON.stringify(isDark));
        return true;
    } catch { return false; }
}

function getLastTransaction() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.LAST_TRANSACTION);
        return data ? JSON.parse(data) : null;
    } catch { return null; }
}

function saveLastTransaction(transaction) {
    try {
        localStorage.setItem(STORAGE_KEYS.LAST_TRANSACTION, JSON.stringify(transaction));
        return true;
    } catch { return false; }
}

function clearHistory() {
    try {
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
        return true;
    } catch { return false; }
}

function deleteHistoryItem(id) {
    try {
        const history = getHistory();
        const filtered = history.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(filtered));
        return true;
    } catch { return false; }
}

// ============================================
// ============================================
// UTILITIES
// ============================================
// ============================================

function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDate(date, format = 'DD/MM/YYYY') {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    const replacements = { 'DD': day, 'MM': month, 'YYYY': year, 'HH': hours, 'mm': minutes };
    return format.replace(/DD|MM|YYYY|HH|mm/g, match => replacements[match]);
}

function formatDateTime(date) {
    return formatDate(date, 'DD/MM/YYYY HH:mm');
}

function generateTransactionId() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    return `TRX${year}${month}${day}${random}`;
}

function detectProvider(phone) {
    if (!phone || phone.length < 4) return null;
    const prefix = phone.substring(0, 4);
    return DUMMY_DATA.providerPrefixes[prefix] || null;
}

function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const colors = {
        success: 'bg-success text-white',
        error: 'bg-danger text-white',
        warning: 'bg-warning',
        info: 'bg-primary text-white'
    };
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };

    const toast = document.createElement('div');
    toast.className = `toast align-items-center ${colors[type] || colors.info} border-0 fade-in`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fas ${icons[type] || icons.info} me-2"></i> ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    container.appendChild(toast);

    const bsToast = new bootstrap.Toast(toast, { delay: duration });
    bsToast.show();

    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, duration + 500);
}

// ============================================
// ============================================
// UI RENDERER
// ============================================
// ============================================

function renderDashboard() {
    const profile = getProfile();
    const history = getHistory();
    const totalTransactions = history.length;
    const totalSpent = history.reduce((sum, t) => sum + t.amount, 0);
    const thisMonth = history.filter(t => {
        const date = new Date(t.timestamp);
        const now = new Date();
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    });
    const monthlySpent = thisMonth.reduce((sum, t) => sum + t.amount, 0);

    return `
        <div class="fade-in">
            <div class="hero-banner">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h1 class="display-5 fw-bold">Selamat datang di BayarCoy!</h1>
                        <p class="lead">Kelola semua pembayaran Anda di satu tempat.</p>
                        <div class="mt-3">
                            <span class="badge bg-light text-dark me-2">
                                <i class="fas fa-wallet me-1"></i> Saldo: ${formatRupiah(profile.balance)}
                            </span>
                            <span class="badge bg-light text-dark">
                                <i class="fas fa-crown me-1"></i> ${profile.membership}
                            </span>
                        </div>
                    </div>
                    <div class="col-md-4 text-center d-none d-md-block">
                        <i class="fas fa-hand-holding-usd" style="font-size: 5rem; opacity: 0.8;"></i>
                    </div>
                </div>
            </div>

            <h5 class="mb-3"><i class="fas fa-bolt me-2 text-success"></i>Aksi Cepat</h5>
            <div class="row g-3 mb-4">
                <div class="col-md-3 col-6">
                    <div class="quick-action" onclick="navigateTo('bayar-tagihan')">
                        <i class="fas fa-file-invoice"></i>
                        <span>Bayar Tagihan</span>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="quick-action" onclick="navigateTo('spp')">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Bayar SPP</span>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="quick-action" onclick="navigateTo('pulsa')">
                        <i class="fas fa-mobile-alt"></i>
                        <span>Isi Pulsa</span>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="quick-action" onclick="navigateTo('riwayat')">
                        <i class="fas fa-history"></i>
                        <span>Riwayat</span>
                    </div>
                </div>
            </div>

            <div class="row g-3 mb-4">
                <div class="col-md-3 col-6">
                    <div class="card p-3 text-center">
                        <i class="fas fa-shopping-cart text-success" style="font-size: 1.5rem;"></i>
                        <h5 class="mt-2">${totalTransactions}</h5>
                        <small class="text-muted">Total Transaksi</small>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="card p-3 text-center">
                        <i class="fas fa-money-bill-wave text-success" style="font-size: 1.5rem;"></i>
                        <h5 class="mt-2">${formatRupiah(monthlySpent)}</h5>
                        <small class="text-muted">Bulan Ini</small>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="card p-3 text-center">
                        <i class="fas fa-clock text-warning" style="font-size: 1.5rem;"></i>
                        <h5 class="mt-2">${history.filter(t => t.status === 'pending').length}</h5>
                        <small class="text-muted">Tagihan Aktif</small>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="card p-3 text-center">
                        <i class="fas fa-mobile-alt text-info" style="font-size: 1.5rem;"></i>
                        <h5 class="mt-2">${getLastTransaction() ? formatRupiah(getLastTransaction().amount) : '-'}</h5>
                        <small class="text-muted">Pulsa Terakhir</small>
                    </div>
                </div>
            </div>

            <div class="card p-3">
                <h6 class="mb-3"><i class="fas fa-chart-bar me-2 text-success"></i>Statistik Transaksi</h6>
            <div style="height: 250px;"> <!-- <-- BUNGKUS DENGAN DIV -->
                <canvas id="transactionChart"></canvas>
            </div>
        </div>
                <div class="row mt-4">
    <div class="col-md-8">
        <div class="card p-3">
            <h6 class="mb-3"><i class="fas fa-clock me-2 text-primary"></i>Aktivitas Terbaru</h6>
            <div style="max-height: 260px; overflow-y: auto;">
                ${history.slice(0, 5).map(trx => `
                    <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                        <div>
                            <span class="badge bg-${trx.type === 'Pulsa' ? 'success' : trx.type === 'PLN' ? 'warning' : 'info'} me-1">
                                ${trx.type}
                            </span>
                            <small class="text-muted d-block">${formatDate(trx.timestamp, 'DD/MM/YYYY HH:mm')}</small>
                        </div>
                        <span class="fw-bold ${trx.status === 'success' ? 'text-success' : 'text-warning'}">
                            ${formatRupiah(trx.amount)}
                        </span>
                    </div>
                `).join('') || '<p class="text-muted text-center my-3">Belum ada aktivitas</p>'}
            </div>
        </div>
    </div>
</div>
    `;
}

function renderBayarTagihan() {
    return `
        <div class="fade-in">
            <h4 class="mb-4"><i class="fas fa-file-invoice me-2 text-success"></i>Bayar Tagihan</h4>
            
            <div class="d-flex gap-3 mb-4 flex-wrap">
    <!-- PLN -->
    <div class="card p-3 text-center category-card flex-fill" onclick="selectCategory('pln')" style="cursor:pointer; min-width: 120px; flex: 1;">
        <i class="fas fa-bolt" style="font-size: 2rem; color: #ffc107;"></i>
        <h6 class="mt-2">PLN</h6>
        <small class="text-muted">Listrik</small>
    </div>
    
    <!-- PDAM -->
    <div class="card p-3 text-center category-card flex-fill" onclick="selectCategory('pdam')" style="cursor:pointer; min-width: 120px; flex: 1;">
        <i class="fas fa-water" style="font-size: 2rem; color: #0dcaf0;"></i>
        <h6 class="mt-2">PDAM</h6>
        <small class="text-muted">Air</small>
    </div>
    
    <!-- Internet -->
    <div class="card p-3 text-center category-card flex-fill" onclick="selectCategory('internet')" style="cursor:pointer; min-width: 120px; flex: 1;">
        <i class="fas fa-wifi" style="font-size: 2rem; color: #6f42c1;"></i>
        <h6 class="mt-2">Internet</h6>
        <small class="text-muted">WiFi</small>
    </div>
</div>
            <div id="billFormContainer" class="card p-4" style="display:none;">
                <h6 class="mb-3">Masukkan Nomor Pelanggan</h6>
                <div class="row">
                    <div class="col-md-8">
                        <input type="text" class="form-control" id="customerNumberInput" placeholder="Nomor Tagihan">
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-success w-100" onclick="checkCustomer()">
                            <i class="fas fa-search me-2"></i> Cek Tagihan
                        </button>
                    </div>
                </div>
                <div id="customerError" class="text-danger mt-2"></div>
            </div>

            <div id="billDetailContainer" class="card p-4 mt-3" style="display:none;">
                <div id="billDetailContent"></div>
            </div>
        </div>
    `;
}

function renderSPP() {
    return `
        <div class="fade-in">
            <h4 class="mb-4"><i class="fas fa-graduation-cap me-2 text-success"></i>Biaya Kuliah / SPP</h4>
            
            <div class="card p-4">
                <div class="row">
                    <div class="col-md-8">
                        <label class="form-label fw-bold">Masukkan NIM (12 digit)</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="nimInput" placeholder="202401010001" maxlength="12">
                            <button class="btn btn-success" onclick="checkNIM()">
                                <i class="fas fa-search"></i> Cek
                            </button>
                        </div>
                        <div id="nimError" class="text-danger mt-2"></div>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label fw-bold">Kode Tagihan</label>
                        <input type="text" class="form-control" id="tagihanCode" placeholder="Masukkan kode" readonly>
                    </div>
                </div>
            </div>

            <div id="studentInfoContainer" class="card p-4 mt-3" style="display:none;"></div>
            <div id="semesterContainer" class="card p-4 mt-3" style="display:none;"></div>
            <div id="sppPaymentSummary" class="card p-4 mt-3" style="display:none;"></div>
        </div>
    `;
}

function renderPulsa() {
    return `
        <div class="fade-in">
            <h4 class="mb-4"><i class="fas fa-mobile-alt me-2 text-success"></i>Isi Pulsa & Paket Data</h4>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="card p-4">
                        <h6 class="mb-3">Masukkan Nomor HP</h6>
                        <input type="text" class="form-control" id="phoneInput" placeholder="081234567890" maxlength="13">
                        <div id="phoneError" class="text-danger mt-2"></div>
                        <div id="providerInfo" class="alert alert-info mt-3" style="display:none;">
                            <i class="fas fa-check-circle me-2"></i>
                            Provider: <strong id="providerName">-</strong>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card p-4">
                        <h6 class="mb-3">Pilih Provider</h6>
                        <div class="row g-2">
                            ${['Telkomsel', 'XL', 'Indosat', 'Tri', 'Smartfren', 'Axis'].map(provider => `
                                <div class="col-4 col-md-4">
                                    <div class="provider-card" onclick="selectProvider('${provider}')" style="cursor:pointer;">
                                        <i class="fas fa-sim-card" style="font-size: 2rem; color: #0d6e4d;"></i>
                                        <span class="mt-2 d-block">${provider}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div id="pulsaNominalContainer" class="card p-4 mt-3" style="display:none;">
                <h6 class="mb-3">Pilih Nominal Pulsa</h6>
                <div class="row g-2">
                    ${DUMMY_DATA.pulsaNominal.map(n => `
                        <div class="col-4 col-md-2">
                            <div class="payment-method text-center" onclick="selectPulsaNominal(${n.value})" style="cursor:pointer; padding:10px; border:2px solid #dee2e6; border-radius:12px;">
                                <strong>${n.label}</strong>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="text-center mt-4" id="pulsaPaymentButton" style="display:none;">
                <button class="btn btn-success btn-lg px-5" onclick="processPulsaPayment()">
                    <i class="fas fa-credit-card me-2"></i> Bayar Sekarang
                </button>
            </div>
        </div>
    `;
}

function renderRiwayat() {
    const history = getHistory();
    
    return `
        <div class="fade-in">
            <h4 class="mb-4"><i class="fas fa-history me-2 text-success"></i>Riwayat Transaksi</h4>
            
            <div class="card p-3 mb-3">
                <div class="row g-2">
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="searchHistory" placeholder="Cari transaksi..." oninput="filterHistoryTable()">
                    </div>
                    <div class="col-md-3">
                        <select class="form-select" id="filterType" onchange="filterHistoryTable()">
                            <option value="all">Semua Jenis</option>
                            <option value="PLN">PLN</option>
                            <option value="PDAM">PDAM</option>
                            <option value="Internet">Internet</option>
                            <option value="Seminar">Seminar</option>
                            <option value="SPP">SPP</option>
                            <option value="Pulsa">Pulsa</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <select class="form-select" id="filterStatus" onchange="filterHistoryTable()">
                            <option value="all">Semua Status</option>
                            <option value="success">Berhasil</option>
                            <option value="pending">Proses</option>
                            <option value="failed">Gagal</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-danger w-100" onclick="clearAllHistory()">
                            <i class="fas fa-trash"></i> Hapus
                        </button>
                    </div>
                </div>
            </div>

            <div class="card p-0 overflow-hidden">
                <div class="table-responsive">
                    <table class="table table-hover history-table mb-0">
                        <thead class="table-success">
                            <tr>
                                <th>ID Transaksi</th>
                                <th>Jenis</th>
                                <th>Tanggal</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody id="historyTableBody">
                            ${history.length > 0 ? history.map(trx => `
                                <tr>
                                    <td><small>${trx.id}</small></td>
                                    <td>${trx.type}</td>
                                    <td>${formatDateTime(trx.timestamp)}</td>
                                    <td>
                                        <span class="badge ${trx.status === 'success' ? 'bg-success' : trx.status === 'pending' ? 'bg-warning' : 'bg-danger'}">
                                            ${trx.status === 'success' ? 'Berhasil' : trx.status === 'pending' ? 'Proses' : 'Gagal'}
                                        </span>
                                    </td>
                                    <td class="fw-bold">${formatRupiah(trx.amount)}</td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-danger" onclick="deleteTransaction('${trx.id}')">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            `).join('') : `
                                <tr>
                                    <td colspan="6" class="text-center py-4 text-muted">
                                        <i class="fas fa-inbox" style="font-size: 2rem; display: block; margin-bottom: 0.5rem;"></i>
                                        Belum ada transaksi
                                    </td>
                                </tr>
                            `}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderProfil() {
    const profile = getProfile();
    
    return `
        <div class="fade-in">
            <h4 class="mb-4"><i class="fas fa-user me-2 text-success"></i>Profil</h4>
            
            <div class="row">
                <div class="col-md-4">
                    <div class="card p-4 text-center">
                        <div class="profile-avatar" style="width:120px;height:120px;border-radius:50%;background:#0d6e4d;color:white;display:flex;align-items:center;justify-content:center;font-size:3rem;margin:0 auto;box-shadow:0 4px 20px rgba(0,0,0,0.12);">
                            ${profile.avatar || profile.name.substring(0, 2)}
                        </div>
                        <h5 class="mt-3">${profile.name}</h5>
                        <p class="text-muted">${profile.membership}</p>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card p-4">
                        <h6>Informasi Akun</h6>
                        <div class="row mt-3">
                            <div class="col-md-6 mb-3">
                                <label class="text-muted">Email</label>
                                <p class="fw-bold">${profile.email}</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="text-muted">Nomor HP</label>
                                <p class="fw-bold">${profile.phone || '-'}</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="text-muted">Saldo</label>
                                <p class="fw-bold text-success">${formatRupiah(profile.balance)}</p>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="text-muted">Bergabung Sejak</label>
                                <p class="fw-bold">${formatDate(profile.joinDate, 'DD MMMM YYYY')}</p>
                            </div>
                            <div class="col-md-12">
                                <label class="text-muted">Alamat</label>
                                <p class="fw-bold">${profile.address || '-'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderFAQ() {
    return `
        <div class="fade-in">
            <h4 class="mb-4"><i class="fas fa-question-circle me-2 text-success"></i>Frequently Asked Questions</h4>
            
            <div class="accordion" id="faqAccordion">
                ${DUMMY_DATA.faqData.map((faq, index) => `
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#faq${faq.id}">
                                ${faq.question}
                            </button>
                        </h2>
                        <div id="faq${faq.id}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
                             data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                ${faq.answer}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ============================================
// ============================================
// NAVIGATION
// ============================================
// ============================================

let currentPage = 'dashboard';

function navigateTo(page) {
    currentPage = page;
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });

    // Render page
    const content = document.getElementById('pageContent');
    if (!content) return;

    switch(page) {
        case 'dashboard':
            content.innerHTML = renderDashboard();
            setTimeout(loadChart, 200);
            break;
        case 'bayar-tagihan':
            content.innerHTML = renderBayarTagihan();
            break;
        case 'spp':
            content.innerHTML = renderSPP();
            break;
        case 'pulsa':
            content.innerHTML = renderPulsa();
            break;
        case 'riwayat':
            content.innerHTML = renderRiwayat();
            break;
        case 'profil':
            content.innerHTML = renderProfil();
            break;
        case 'faq':
            content.innerHTML = renderFAQ();
            break;
        default:
            content.innerHTML = renderDashboard();
            setTimeout(loadChart, 200);
    }

    // Update URL hash
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// ============================================
// CHART
// ============================================
// ============================================

function loadChart() {
    const canvas = document.getElementById('transactionChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const history = getHistory();
    
    const transactions = history.slice(0, 7).reverse();
    const labels = transactions.map(t => formatDate(t.timestamp, 'DD/MM'));
    const data = transactions.map(t => t.amount);

    if (window.transactionChart instanceof Chart) {
        window.transactionChart.destroy();
    }

    window.transactionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.length > 0 ? labels : ['Belum ada data'],
            datasets: [{
                label: 'Transaksi',
                data: data.length > 0 ? data : [0],
                borderColor: '#0d6e4d',
                backgroundColor: 'rgba(13, 110, 77, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: (value) => formatRupiah(value) }
                }
            }
        }
    });
}

// ============================================
// ============================================
// BILL PAYMENT FUNCTIONS
// ============================================
// ============================================

let selectedCategory = null;
let selectedCustomer = null;

function selectCategory(category) {
    selectedCategory = category;
    const container = document.getElementById('billFormContainer');
    if (container) {
        container.style.display = 'block';
        document.getElementById('customerNumberInput').value = '';
        document.getElementById('customerError').textContent = '';
        document.getElementById('billDetailContainer').style.display = 'none';
        
        // Update category cards
        document.querySelectorAll('.category-card').forEach(el => {
            el.style.border = '2px solid transparent';
        });
        event.target.closest('.category-card').style.border = '2px solid #0d6e4d';
    }
}

function checkCustomer() {
    const input = document.getElementById('customerNumberInput');
    const number = input.value.trim();
    const errorEl = document.getElementById('customerError');
    
    if (!number) {
        errorEl.textContent = 'Masukkan nomor pelanggan';
        return;
    }

    // Find customer
    let customer = null;
    const customers = DUMMY_DATA.customers[selectedCategory] || [];
    customer = customers.find(c => c.customerNumber === number);

    if (!customer) {
        errorEl.textContent = 'Nomor pelanggan tidak ditemukan';
        return;
    }

    errorEl.textContent = '';
    selectedCustomer = customer;
    showBillDetail(customer);
}

function showBillDetail(customer) {
    const container = document.getElementById('billDetailContainer');
    const content = document.getElementById('billDetailContent');
    
    container.style.display = 'block';
    
    const amount = selectedCategory === 'pln' ? 350000 : 
                   selectedCategory === 'pdam' ? 150000 :
                   selectedCategory === 'internet' ? 250000 : 200000;

    content.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="bill-detail p-3 bg-light rounded">
                    <p><strong>Nama:</strong> ${customer.name}</p>
                    <p><strong>Nomor Pelanggan:</strong> ${customer.customerNumber}</p>
                    <p><strong>Alamat:</strong> ${customer.address}</p>
                    ${customer.tariff ? `<p><strong>Tarif:</strong> ${customer.tariff}</p>` : ''}
                    ${customer.package ? `<p><strong>Paket:</strong> ${customer.package}</p>` : ''}
                    <p><strong>Status:</strong> <span class="badge ${customer.status === 'Aktif' ? 'bg-success' : 'bg-danger'}">${customer.status}</span></p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="bill-detail p-3 bg-light rounded">
                    <p><strong>Tagihan:</strong> ${selectedCategory.toUpperCase()}</p>
                    <p><strong>Total:</strong> <span class="fw-bold text-success" style="font-size:1.5rem;">${formatRupiah(amount)}</span></p>
                    <p><strong>Jatuh Tempo:</strong> ${formatDate(Date.now() + 7 * 24 * 60 * 60 * 1000, 'DD/MM/YYYY')}</p>
                    <button class="btn btn-success w-100 mt-2" onclick="processBillPayment('${customer.customerNumber}', ${amount})">
                        <i class="fas fa-credit-card me-2"></i> Bayar Sekarang
                    </button>
                </div>
            </div>
        </div>
    `;
}

function processBillPayment(customerNumber, amount) {
    showToast('Memproses pembayaran...', 'info');
    
    setTimeout(() => {
        const transaction = {
            type: selectedCategory.toUpperCase(),
            customerNumber: customerNumber,
            customerName: selectedCustomer.name,
            amount: amount,
            status: 'success',
            method: 'VA'
        };
        
        saveHistory(transaction);
        saveLastTransaction(transaction);
        
        // Update balance
        const profile = getProfile();
        profile.balance -= amount;
        saveProfile(profile);
        
        showToast('Pembayaran berhasil!', 'success');
        navigateTo('riwayat');
    }, 1500);
}

// ============================================
// ============================================
// SPP FUNCTIONS
// ============================================
// ============================================

let selectedStudent = null;
let selectedSemesters = [];

function checkNIM() {
    const input = document.getElementById('nimInput');
    const nim = input.value.trim();
    const errorEl = document.getElementById('nimError');
    
    if (!nim) {
        errorEl.textContent = 'Masukkan NIM';
        return;
    }
    if (!/^\d{12}$/.test(nim)) {
        errorEl.textContent = 'NIM harus 12 digit angka';
        return;
    }

    errorEl.textContent = '';
    const student = DUMMY_DATA.students.find(s => s.nim === nim);
    
    if (!student) {
        errorEl.textContent = 'NIM tidak ditemukan';
        return;
    }

    selectedStudent = student;
    selectedSemesters = [];
    showStudentInfo(student);
}

function showStudentInfo(student) {
    const container = document.getElementById('studentInfoContainer');
    container.style.display = 'block';
    container.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <p><strong>Nama:</strong> ${student.name}</p>
                <p><strong>NIM:</strong> ${student.nim}</p>
                <p><strong>Program:</strong> ${student.program}</p>
            </div>
            <div class="col-md-6">
                <p><strong>Semester:</strong> ${student.semester}</p>
                <p><strong>Status:</strong> <span class="badge bg-success">${student.status}</span></p>
                <p><strong>Kode Tagihan:</strong> <code>${'986248962486438'}</code></p>
            </div>
        </div>
    `;

    showSemesters(student);
}

function showSemesters(student) {
    const container = document.getElementById('semesterContainer');
    container.style.display = 'block';
    
    container.innerHTML = `
        <h6 class="mb-3">Pilih Cicilan Semester</h6>
        <div class="table-responsive">
            <table class="table table-bordered semester-table">
                <thead class="table-success">
                    <tr>
                        <th style="width:50px;"><input type="checkbox" id="selectAllSemesters" onchange="toggleAllSemesters()"></th>
                        <th>Semester</th>
                        <th>Deskripsi</th>
                        <th>Nominal</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${student.installments.map((item, index) => `
                        <tr>
                            <td>
                                <input type="checkbox" class="semester-checkbox" data-index="${index}" 
                                       ${item.status === 'Lunas' ? 'disabled' : ''}
                                       onchange="updateSemesterTotal()">
                            </td>
                            <td>${item.semester}</td>
                            <td>${item.description}</td>
                            <td>${formatRupiah(item.nominal)}</td>
                            <td><span class="badge ${item.status === 'Lunas' ? 'bg-success' : 'bg-warning'}">${item.status}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <div id="sppTotal" class="mt-3">
            <p class="fw-bold">Total: <span id="selectedTotal">Rp 0</span></p>
        </div>
    `;
}

function toggleAllSemesters() {
    const checked = document.getElementById('selectAllSemesters').checked;
    document.querySelectorAll('.semester-checkbox:not(:disabled)').forEach(cb => {
        cb.checked = checked;
    });
    updateSemesterTotal();
}

function updateSemesterTotal() {
    const checkboxes = document.querySelectorAll('.semester-checkbox:checked');
    let total = 0;
    checkboxes.forEach(cb => {
        const index = parseInt(cb.dataset.index);
        const student = selectedStudent;
        if (student && student.installments[index]) {
            total += student.installments[index].nominal;
        }
    });
    
    document.getElementById('selectedTotal').textContent = formatRupiah(total);
    
    const summary = document.getElementById('sppPaymentSummary');
    if (total > 0) {
        summary.style.display = 'block';
        summary.innerHTML = `
            <div class="row align-items-center">
                <div class="col-md-8">
                    <h6>Ringkasan Pembayaran</h6>
                    <p>${checkboxes.length} semester terpilih</p>
                    <p class="fw-bold text-success" style="font-size:1.5rem;">Total: ${formatRupiah(total)}</p>
                </div>
                <div class="col-md-4 text-end">
                    <button class="btn btn-success btn-lg" onclick="processSPPPayment(${total})">
                        <i class="fas fa-credit-card me-2"></i> Bayar SPP
                    </button>
                </div>
            </div>
        `;
    } else {
        summary.style.display = 'none';
    }
}

function processSPPPayment(total) {
    showToast('Memproses pembayaran SPP...', 'info');
    
    setTimeout(() => {
        const transaction = {
            type: 'SPP',
            customerNumber: selectedStudent.nim,
            customerName: selectedStudent.name,
            amount: total,
            status: 'success',
            method: 'VA',
            details: `${selectedStudent.name} - ${selectedStudent.program}`
        };
        
        saveHistory(transaction);
        saveLastTransaction(transaction);
        
        const profile = getProfile();
        profile.balance -= total;
        saveProfile(profile);
        
        showToast('Pembayaran SPP berhasil!', 'success');
        navigateTo('riwayat');
    }, 1500);
}

// ============================================
// ============================================
// PULSA FUNCTIONS
// ============================================
// ============================================

let selectedProvider = null;
let selectedPulsaNominal = null;

// Phone input handler
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phoneInput');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            const value = this.value;
            const provider = detectProvider(value);
            const infoEl = document.getElementById('providerInfo');
            const nameEl = document.getElementById('providerName');
            
            if (provider) {
                infoEl.style.display = 'block';
                nameEl.textContent = provider;
                selectedProvider = provider;
                document.getElementById('pulsaNominalContainer').style.display = 'block';
            } else {
                infoEl.style.display = 'none';
                document.getElementById('pulsaNominalContainer').style.display = 'none';
            }
        });
    }
});

function selectProvider(provider) {
    selectedProvider = provider;
    document.querySelectorAll('.provider-card').forEach(el => {
        el.style.border = '2px solid transparent';
    });
    event.target.closest('.provider-card').style.border = '2px solid #0d6e4d';
    document.getElementById('pulsaNominalContainer').style.display = 'block';
}

function selectPulsaNominal(nominal) {
    selectedPulsaNominal = nominal;
    document.querySelectorAll('.payment-method').forEach(el => {
        el.style.border = '2px solid #dee2e6';
        el.style.background = 'transparent';
    });
    event.target.style.border = '2px solid #0d6e4d';
    event.target.style.background = 'rgba(13, 110, 77, 0.05)';
    document.getElementById('pulsaPaymentButton').style.display = 'block';
}

function processPulsaPayment() {
    const phone = document.getElementById('phoneInput').value.trim();
    if (!phone) {
        showToast('Masukkan nomor HP', 'error');
        return;
    }
    if (!selectedProvider) {
        showToast('Pilih provider', 'error');
        return;
    }
    if (!selectedPulsaNominal) {
        showToast('Pilih nominal pulsa', 'error');
        return;
    }

    showToast('Memproses pembelian pulsa...', 'info');
    
    setTimeout(() => {
        const transaction = {
            type: 'Pulsa',
            customerNumber: phone,
            customerName: selectedProvider,
            amount: selectedPulsaNominal,
            status: 'success',
            method: 'VA',
            details: `${selectedProvider} - ${formatRupiah(selectedPulsaNominal)}`
        };
        
        saveHistory(transaction);
        saveLastTransaction(transaction);
        
        const profile = getProfile();
        profile.balance -= selectedPulsaNominal;
        saveProfile(profile);
        
        showToast(`Pulsa ${formatRupiah(selectedPulsaNominal)} berhasil!`, 'success');
        navigateTo('riwayat');
    }, 1500);
}

// ============================================
// ============================================
// HISTORY FUNCTIONS
// ============================================
// ============================================

function filterHistoryTable() {
    const search = document.getElementById('searchHistory')?.value?.toLowerCase() || '';
    const type = document.getElementById('filterType')?.value || 'all';
    const status = document.getElementById('filterStatus')?.value || 'all';
    
    let history = getHistory();
    
    if (search) {
        history = history.filter(t => 
            t.id?.toLowerCase().includes(search) ||
            t.type?.toLowerCase().includes(search) ||
            t.customerName?.toLowerCase().includes(search)
        );
    }
    if (type !== 'all') {
        history = history.filter(t => t.type === type);
    }
    if (status !== 'all') {
        history = history.filter(t => t.status === status);
    }
    
    renderHistoryTable(history);
}

function renderHistoryTable(history) {
    const tbody = document.getElementById('historyTableBody');
    if (!tbody) return;
    
    if (history.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-4 text-muted">
                    <i class="fas fa-inbox" style="font-size: 2rem; display: block; margin-bottom: 0.5rem;"></i>
                    Tidak ada transaksi
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = history.map(trx => `
        <tr>
            <td><small>${trx.id}</small></td>
            <td>${trx.type}</td>
            <td>${formatDateTime(trx.timestamp)}</td>
            <td>
                <span class="badge ${trx.status === 'success' ? 'bg-success' : trx.status === 'pending' ? 'bg-warning' : 'bg-danger'}">
                    ${trx.status === 'success' ? 'Berhasil' : trx.status === 'pending' ? 'Proses' : 'Gagal'}
                </span>
            </td>
            <td class="fw-bold">${formatRupiah(trx.amount)}</td>
            <td>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteTransaction('${trx.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function clearAllHistory() {
    if (confirm('Apakah Anda yakin ingin menghapus semua riwayat?')) {
        clearHistory();
        showToast('Riwayat berhasil dihapus', 'success');
        navigateTo('riwayat');
    }
}

function deleteTransaction(id) {
    if (confirm('Hapus transaksi ini?')) {
        deleteHistoryItem(id);
        showToast('Transaksi dihapus', 'success');
        navigateTo('riwayat');
    }
}

// ============================================
// ============================================
// DARK MODE
// ============================================
// ============================================

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    saveDarkMode(isDark);
    const btn = document.getElementById('darkModeToggle');
    btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    showToast(isDark ? '🌙 Dark mode aktif' : '☀️ Light mode aktif', 'success');
}

// Initialize dark mode on load
if (getDarkMode()) {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-sun"></i>';
}

// ============================================
// ============================================
// INITIALIZATION
// ============================================
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 BayarKita v1.0.0');
    
    // Load dark mode
    if (getDarkMode()) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Handle navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) {
                navigateTo(page);
            }
        });
    });
    
    // Handle back to top
    const backBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backBtn.classList.toggle('visible', window.scrollY > 300);
    });
    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Handle dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
    
    // Handle chat button
    document.getElementById('chatButton').addEventListener('click', () => {
        showToast('💬 Chat support akan segera hadir!', 'info');
    });
    
    // Handle hash navigation
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    navigateTo(hash);
    
    console.log('✅ BayarKita siap digunakan!');
});

// Expose functions to global scope
window.navigateTo = navigateTo;
window.selectCategory = selectCategory;
window.checkCustomer = checkCustomer;
window.processBillPayment = processBillPayment;
window.checkNIM = checkNIM;
window.toggleAllSemesters = toggleAllSemesters;
window.updateSemesterTotal = updateSemesterTotal;
window.processSPPPayment = processSPPPayment;
window.selectProvider = selectProvider;
window.selectPulsaNominal = selectPulsaNominal;
window.processPulsaPayment = processPulsaPayment;
window.filterHistoryTable = filterHistoryTable;
window.clearAllHistory = clearAllHistory;
window.deleteTransaction = deleteTransaction;
window.toggleDarkMode = toggleDarkMode;
window.formatRupiah = formatRupiah;
window.showToast = showToast;
window.detectProvider = detectProvider;