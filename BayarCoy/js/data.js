/**
 * DATA MODULE
 * Contains all dummy data for BayarKita application
 */

// ============================================
// DUMMY USERS
// ============================================
export const dummyUsers = {
    profile: {
        name: 'Muhammad Rizky',
        email: 'm.rizky@student.univ.ac.id',
        phone: '081234567890',
        address: 'Jl. Merdeka No. 123, Jakarta',
        membership: 'Gold',
        joinDate: '2023-08-15',
        balance: 2500000,
        avatar: 'MR'
    }
};

// ============================================
// DUMMY CUSTOMERS FOR BILL PAYMENTS
// ============================================
export const dummyCustomers = {
    pln: [{
            id: 1,
            name: 'Ahmad Firmansyah',
            customerNumber: 'PLN20240001',
            address: 'Jl. Sudirman No. 45, Jakarta',
            meterNumber: 'MTR-001-2024',
            tariff: 'R1-1300',
            lastPayment: '2026-05-15',
            status: 'Aktif'
        },
        {
            id: 2,
            name: 'Siti Rahayu',
            customerNumber: 'PLN20240002',
            address: 'Jl. Gatot Subroto No. 12, Bandung',
            meterNumber: 'MTR-002-2024',
            tariff: 'R2-2200',
            lastPayment: '2026-05-10',
            status: 'Aktif'
        },
        {
            id: 3,
            name: 'Budi Santoso',
            customerNumber: 'PLN20240003',
            address: 'Jl. Diponegoro No. 78, Surabaya',
            meterNumber: 'MTR-003-2024',
            tariff: 'R1-900',
            lastPayment: '2026-04-28',
            status: 'Tunggakan'
        },
        {
            id: 4,
            name: 'Dewi Lestari',
            customerNumber: 'PLN20240004',
            address: 'Jl. Ahmad Yani No. 56, Medan',
            meterNumber: 'MTR-004-2024',
            tariff: 'R1-1300',
            lastPayment: '2026-05-20',
            status: 'Aktif'
        },
        {
            id: 5,
            name: 'Rudi Hartono',
            customerNumber: 'PLN20240005',
            address: 'Jl. Pahlawan No. 34, Semarang',
            meterNumber: 'MTR-005-2024',
            tariff: 'R2-2200',
            lastPayment: '2026-05-01',
            status: 'Aktif'
        }
    ],
    pdam: [{
            id: 1,
            name: 'Andi Wijaya',
            customerNumber: 'PDAM2024001',
            address: 'Jl. Merdeka No. 23, Jakarta',
            meterNumber: 'PDM-001-2024',
            status: 'Aktif'
        },
        {
            id: 2,
            name: 'Maya Sari',
            customerNumber: 'PDAM2024002',
            address: 'Jl. Kemang Raya No. 89, Jakarta',
            meterNumber: 'PDM-002-2024',
            status: 'Tunggakan'
        },
        {
            id: 3,
            name: 'Hendra Gunawan',
            customerNumber: 'PDAM2024003',
            address: 'Jl. BSD City No. 45, Tangerang',
            meterNumber: 'PDM-003-2024',
            status: 'Aktif'
        }
    ],
    internet: [{
            id: 1,
            name: 'Rina Marlina',
            customerNumber: 'INET2024001',
            package: 'IndiHome Fiber 50Mbps',
            address: 'Jl. Raya Bogor No. 67, Jakarta',
            status: 'Aktif'
        },
        {
            id: 2,
            name: 'Firman Hidayat',
            customerNumber: 'INET2024002',
            package: 'Biznet Home 100Mbps',
            address: 'Jl. Kalimalang No. 34, Bekasi',
            status: 'Aktif'
        },
        {
            id: 3,
            name: 'Nina Lestari',
            customerNumber: 'INET2024003',
            package: 'MyRepublic 75Mbps',
            address: 'Jl. Cikarang Raya No. 78, Cikarang',
            status: 'Tunggakan'
        }
    ],
    seminar: [{
            id: 1,
            name: 'Workshop JavaScript Mastery',
            code: 'SEM-JS-001',
            price: 250000,
            date: '2026-06-15',
            location: 'Online via Zoom',
            status: 'Tersedia'
        },
        {
            id: 2,
            name: 'Seminar AI & Data Science',
            code: 'SEM-AI-002',
            price: 350000,
            date: '2026-06-20',
            location: 'Hotel Santika, Jakarta',
            status: 'Tersedia'
        },
        {
            id: 3,
            name: 'Workshop UI/UX Design',
            code: 'SEM-UX-003',
            price: 200000,
            date: '2026-06-25',
            location: 'Online via Google Meet',
            status: 'Tersedia'
        }
    ]
};

// ============================================
// DUMMY STUDENTS FOR SPP
// ============================================
export const dummyStudents = [{
        nim: '202401010001',
        name: 'Aulia Putri',
        program: 'Teknik Informatika',
        semester: 4,
        totalSemesters: 8,
        status: 'Aktif',
        installments: [
            { semester: 1, description: 'SPP Semester Ganjil 2023/2024', nominal: 4500000, status: 'Lunas', paidDate: '2023-08-20' },
            { semester: 2, description: 'SPP Semester Genap 2023/2024', nominal: 4500000, status: 'Lunas', paidDate: '2024-02-15' },
            { semester: 3, description: 'SPP Semester Ganjil 2024/2025', nominal: 4500000, status: 'Lunas', paidDate: '2024-08-10' },
            { semester: 4, description: 'SPP Semester Genap 2024/2025', nominal: 4500000, status: 'Belum Lunas', paidDate: null },
            { semester: 5, description: 'SPP Semester Ganjil 2025/2026', nominal: 4500000, status: 'Belum Lunas', paidDate: null },
            { semester: 6, description: 'SPP Semester Genap 2025/2026', nominal: 4500000, status: 'Belum Lunas', paidDate: null },
            { semester: 7, description: 'SPP Semester Ganjil 2026/2027', nominal: 4500000, status: 'Belum Lunas', paidDate: null },
            { semester: 8, description: 'SPP Semester Genap 2026/2027', nominal: 4500000, status: 'Belum Lunas', paidDate: null }
        ]
    },
    {
        nim: '202401010002',
        name: 'Rizky Ramadhan',
        program: 'Sistem Informasi',
        semester: 6,
        totalSemesters: 8,
        status: 'Aktif',
        installments: [
            { semester: 1, description: 'SPP Semester Ganjil 2023/2024', nominal: 4200000, status: 'Lunas', paidDate: '2023-08-25' },
            { semester: 2, description: 'SPP Semester Genap 2023/2024', nominal: 4200000, status: 'Lunas', paidDate: '2024-02-20' },
            { semester: 3, description: 'SPP Semester Ganjil 2024/2025', nominal: 4200000, status: 'Lunas', paidDate: '2024-08-15' },
            { semester: 4, description: 'SPP Semester Genap 2024/2025', nominal: 4200000, status: 'Lunas', paidDate: '2025-02-10' },
            { semester: 5, description: 'SPP Semester Ganjil 2025/2026', nominal: 4200000, status: 'Lunas', paidDate: '2025-08-05' },
            { semester: 6, description: 'SPP Semester Genap 2025/2026', nominal: 4200000, status: 'Belum Lunas', paidDate: null },
            { semester: 7, description: 'SPP Semester Ganjil 2026/2027', nominal: 4200000, status: 'Belum Lunas', paidDate: null },
            { semester: 8, description: 'SPP Semester Genap 2026/2027', nominal: 4200000, status: 'Belum Lunas', paidDate: null }
        ]
    },
    {
        nim: '202401010003',
        name: 'Siti Fatimah',
        program: 'Teknik Elektro',
        semester: 2,
        totalSemesters: 8,
        status: 'Aktif',
        installments: [
            { semester: 1, description: 'SPP Semester Ganjil 2023/2024', nominal: 4800000, status: 'Lunas', paidDate: '2023-08-30' },
            { semester: 2, description: 'SPP Semester Genap 2023/2024', nominal: 4800000, status: 'Belum Lunas', paidDate: null },
            { semester: 3, description: 'SPP Semester Ganjil 2024/2025', nominal: 4800000, status: 'Belum Lunas', paidDate: null },
            { semester: 4, description: 'SPP Semester Genap 2024/2025', nominal: 4800000, status: 'Belum Lunas', paidDate: null },
            { semester: 5, description: 'SPP Semester Ganjil 2025/2026', nominal: 4800000, status: 'Belum Lunas', paidDate: null },
            { semester: 6, description: 'SPP Semester Genap 2025/2026', nominal: 4800000, status: 'Belum Lunas', paidDate: null },
            { semester: 7, description: 'SPP Semester Ganjil 2026/2027', nominal: 4800000, status: 'Belum Lunas', paidDate: null },
            { semester: 8, description: 'SPP Semester Genap 2026/2027', nominal: 4800000, status: 'Belum Lunas', paidDate: null }
        ]
    }
];

// ============================================
// PROVIDER PREFIX MAPPING
// ============================================
export const providerPrefixes = {
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
};

// ============================================
// PULSA & PACKAGE DATA
// ============================================
export const pulsaNominal = [
    { value: 10000, label: 'Rp 10.000' },
    { value: 25000, label: 'Rp 25.000' },
    { value: 50000, label: 'Rp 50.000' },
    { value: 100000, label: 'Rp 100.000' },
    { value: 200000, label: 'Rp 200.000' }
];

export const packageData = [
    { id: 1, provider: 'Telkomsel', name: 'Paket Internet 5GB', price: 50000, validity: '30 Hari', type: 'Internet' },
    { id: 2, provider: 'Telkomsel', name: 'Paket Internet 15GB', price: 100000, validity: '30 Hari', type: 'Internet' },
    { id: 3, provider: 'Telkomsel', name: 'Paket Combo 10GB + 100 Menit', price: 75000, validity: '30 Hari', type: 'Combo' },
    { id: 4, provider: 'XL', name: 'Paket Internet 6GB', price: 55000, validity: '30 Hari', type: 'Internet' },
    { id: 5, provider: 'XL', name: 'Paket Internet 20GB', price: 120000, validity: '30 Hari', type: 'Internet' },
    { id: 6, provider: 'XL', name: 'Paket Combo 8GB + 50 Menit', price: 65000, validity: '30 Hari', type: 'Combo' },
    { id: 7, provider: 'Indosat', name: 'Paket Internet 4GB', price: 45000, validity: '30 Hari', type: 'Internet' },
    { id: 8, provider: 'Indosat', name: 'Paket Internet 12GB', price: 90000, validity: '30 Hari', type: 'Internet' },
    { id: 9, provider: 'Tri', name: 'Paket Internet 3GB', price: 35000, validity: '30 Hari', type: 'Internet' },
    { id: 10, provider: 'Tri', name: 'Paket Internet 10GB', price: 80000, validity: '30 Hari', type: 'Internet' },
    { id: 11, provider: 'Smartfren', name: 'Paket Internet 5GB', price: 50000, validity: '30 Hari', type: 'Internet' },
    { id: 12, provider: 'Smartfren', name: 'Paket Internet 15GB', price: 110000, validity: '30 Hari', type: 'Internet' },
    { id: 13, provider: 'Axis', name: 'Paket Internet 4GB', price: 40000, validity: '30 Hari', type: 'Internet' },
    { id: 14, provider: 'Axis', name: 'Paket Internet 12GB', price: 85000, validity: '30 Hari', type: 'Internet' }
];

// ============================================
// BANKS FOR VIRTUAL ACCOUNT
// ============================================
export const banks = [
    'Bank Mandiri',
    'Bank BCA',
    'Bank BNI',
    'Bank BRI',
    'Bank CIMB Niaga',
    'Bank Danamon',
    'Bank Permata',
    'Bank BTPN'
];

// ============================================
// FAQ DATA
// ============================================
export const faqData = [{
        id: 1,
        question: 'Apa itu BayarKita?',
        answer: 'BayarKita adalah platform pembayaran multi-layanan yang memungkinkan Anda membayar berbagai tagihan seperti PLN, PDAM, Internet, SPP, dan mengisi pulsa dengan mudah dan cepat secara online.'
    },
    {
        id: 2,
        question: 'Bagaimana cara membayar tagihan?',
        answer: 'Pilih menu "Bayar Tagihan", pilih jenis tagihan, masukkan nomor pelanggan, validasi data, pilih metode pembayaran (VA, QRIS, atau Teller), dan konfirmasi pembayaran.'
    },
    {
        id: 3,
        question: 'Metode pembayaran apa saja yang tersedia?',
        answer: 'Tersedia 3 metode pembayaran: Virtual Account (VA) dengan berbagai bank, QRIS (QR Code Indonesia Standard), dan Teller (pembayaran di kantor cabang).'
    },
    {
        id: 4,
        question: 'Apakah data saya aman di BayarKita?',
        answer: 'Ya, semua data disimpan secara lokal di browser Anda menggunakan LocalStorage. Tidak ada data yang dikirim ke server eksternal, sehingga privasi Anda terjamin.'
    },
    {
        id: 5,
        question: 'Berapa lama proses pembayaran?',
        answer: 'Proses pembayaran sangat cepat, hanya membutuhkan waktu 1-2 detik setelah konfirmasi. Anda akan langsung menerima struk digital dan transaksi tercatat di riwayat.'
    },
    {
        id: 6,
        question: 'Apa yang harus dilakukan jika QRIS expired?',
        answer: 'Jika QRIS expired, Anda dapat memilih metode pembayaran lain atau mengulangi proses pembayaran dengan kode VA atau Teller yang tidak memiliki batas waktu.'
    },
    {
        id: 7,
        question: 'Bagaimana cara melihat riwayat transaksi?',
        answer: 'Klik menu "Riwayat" untuk melihat semua transaksi yang pernah Anda lakukan. Anda juga dapat mencari, menyaring, dan mengekspor data dalam bentuk PDF.'
    },
    {
        id: 8,
        question: 'Apakah bisa membayar SPP untuk beberapa semester?',
        answer: 'Ya, pada menu SPP Anda dapat memilih beberapa cicilan semester sekaligus. Total pembayaran akan dihitung secara otomatis dan Anda dapat membayar dalam satu transaksi.'
    },
    {
        id: 9,
        question: 'Bagaimana cara mendeteksi provider pulsa?',
        answer: 'Sistem akan secara otomatis mendeteksi provider berdasarkan prefix nomor HP yang Anda masukkan. Contoh: 0811-0813 adalah Telkomsel, 0817-0819 adalah XL, dan seterusnya.'
    },
    {
        id: 10,
        question: 'Apa keunggulan BayarKita?',
        answer: 'BayarKita menawarkan antarmuka premium, semua proses cepat, 3 metode pembayaran, riwayat transaksi lengkap, dukungan dark mode, dan dapat diakses secara offline setelah halaman dimuat.'
    }
];

// ============================================
// PROMO BANNER DATA
// ============================================
export const promoData = [{
        id: 1,
        title: 'Cashback 20%',
        description: 'Untuk pembayaran PLN pertama Anda',
        color: 'primary',
        icon: 'fa-bolt'
    },
    {
        id: 2,
        title: 'Gratis Ongkir',
        description: 'Minimal transaksi Rp 100.000',
        color: 'success',
        icon: 'fa-truck'
    },
    {
        id: 3,
        title: 'Diskon SPP',
        description: 'Bayar 4 semester dapat diskon 5%',
        color: 'warning',
        icon: 'fa-graduation-cap'
    },
    {
        id: 4,
        title: 'Bonus Pulsa',
        description: 'Isi pulsa Rp 100.000 dapat bonus 5.000',
        color: 'info',
        icon: 'fa-mobile-alt'
    }
];