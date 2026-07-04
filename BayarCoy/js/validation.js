/**
 * VALIDATION MODULE
 * Input validation functions for BayarKita
 */

import {
    isValidEmail,
    isValidPhone,
    isValidNIM,
    isValidCustomerNumber
} from './utils.js';

// ============================================
// CUSTOMER VALIDATION
// ============================================
export const validatePLNNumber = (number) => {
    const pattern = /^PLN\d{8}$/;
    if (!number) {
        return { valid: false, message: 'Nomor pelanggan PLN harus diisi' };
    }
    if (!pattern.test(number)) {
        return { valid: false, message: 'Format nomor pelanggan PLN tidak valid (contoh: PLN20240001)' };
    }
    return { valid: true, message: 'Nomor pelanggan valid' };
};

export const validatePDAMNumber = (number) => {
    const pattern = /^PDAM\d{7}$/;
    if (!number) {
        return { valid: false, message: 'Nomor pelanggan PDAM harus diisi' };
    }
    if (!pattern.test(number)) {
        return { valid: false, message: 'Format nomor pelanggan PDAM tidak valid (contoh: PDAM2024001)' };
    }
    return { valid: true, message: 'Nomor pelanggan valid' };
};

export const validateInternetNumber = (number) => {
    const pattern = /^INET\d{7}$/;
    if (!number) {
        return { valid: false, message: 'Nomor pelanggan Internet harus diisi' };
    }
    if (!pattern.test(number)) {
        return { valid: false, message: 'Format nomor pelanggan Internet tidak valid (contoh: INET2024001)' };
    }
    return { valid: true, message: 'Nomor pelanggan valid' };
};

export const validateSeminarCode = (code) => {
    const pattern = /^SEM-[A-Z]{2}-\d{3}$/;
    if (!code) {
        return { valid: false, message: 'Kode seminar harus diisi' };
    }
    if (!pattern.test(code)) {
        return { valid: false, message: 'Format kode seminar tidak valid (contoh: SEM-JS-001)' };
    }
    return { valid: true, message: 'Kode seminar valid' };
};

// ============================================
// NIM VALIDATION
// ============================================
export const validateNIM = (nim) => {
    if (!nim) {
        return { valid: false, message: 'NIM harus diisi' };
    }
    if (!isValidNIM(nim)) {
        return { valid: false, message: 'NIM harus 12 digit angka' };
    }
    return { valid: true, message: 'NIM valid' };
};

// ============================================
// PHONE VALIDATION
// ============================================
export const validatePhone = (phone) => {
    if (!phone) {
        return { valid: false, message: 'Nomor HP harus diisi' };
    }
    if (!isValidPhone(phone)) {
        return { valid: false, message: 'Nomor HP harus diawali 08 dan 10-13 digit' };
    }
    return { valid: true, message: 'Nomor HP valid' };
};

// ============================================
// PAYMENT VALIDATION
// ============================================
export const validatePaymentMethod = (method) => {
    if (!method) {
        return { valid: false, message: 'Pilih metode pembayaran terlebih dahulu' };
    }
    const validMethods = ['va', 'qris', 'teller'];
    if (!validMethods.includes(method)) {
        return { valid: false, message: 'Metode pembayaran tidak valid' };
    }
    return { valid: true, message: 'Metode pembayaran valid' };
};

export const validateAmount = (amount) => {
    if (!amount || amount <= 0) {
        return { valid: false, message: 'Jumlah pembayaran harus lebih dari 0' };
    }
    if (isNaN(amount)) {
        return { valid: false, message: 'Jumlah pembayaran harus berupa angka' };
    }
    return { valid: true, message: 'Jumlah pembayaran valid' };
};

// ============================================
// FORM VALIDATION
// ============================================
export const validateForm = (inputs, rules) => {
    const errors = {};
    let isValid = true;

    inputs.forEach(input => {
        const value = input.value.trim();
        const name = input.name || input.id;
        const rule = rules[name];

        if (rule) {
            const result = rule(value);
            if (!result.valid) {
                errors[name] = result.message;
                isValid = false;
            }
        }
    });

    return { isValid, errors };
};

// ============================================
// REALTIME VALIDATION
// ============================================
export const createRealtimeValidator = (input, validationFn, errorElement) => {
    const validate = () => {
        const value = input.value.trim();
        const result = validationFn(value);

        if (errorElement) {
            if (!result.valid) {
                errorElement.textContent = result.message;
                errorElement.classList.add('text-danger');
                errorElement.classList.remove('text-success');
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
            } else {
                errorElement.textContent = result.message;
                errorElement.classList.add('text-success');
                errorElement.classList.remove('text-danger');
                input.classList.add('is-valid');
                input.classList.remove('is-invalid');
            }
        }

        return result;
    };

    // Add event listeners
    input.addEventListener('input', validate);
    input.addEventListener('blur', validate);

    return validate;
};

// ============================================
// BILL VALIDATION
// ============================================
export const validateBillPayment = (data) => {
    const errors = {};
    let isValid = true;

    if (!data.customerNumber || data.customerNumber.trim() === '') {
        errors.customerNumber = 'Nomor pelanggan harus diisi';
        isValid = false;
    }

    if (!data.type) {
        errors.type = 'Jenis tagihan harus dipilih';
        isValid = false;
    }

    if (!data.amount || data.amount <= 0) {
        errors.amount = 'Jumlah tagihan tidak valid';
        isValid = false;
    }

    return { isValid, errors };
};

// ============================================
// SPP VALIDATION
// ============================================
export const validateSPP = (data) => {
    const errors = {};
    let isValid = true;

    if (!data.nim || data.nim.trim() === '') {
        errors.nim = 'NIM harus diisi';
        isValid = false;
    }

    if (data.selectedSemesters && data.selectedSemesters.length === 0) {
        errors.semesters = 'Pilih minimal satu cicilan semester';
        isValid = false;
    }

    if (data.selectedSemesters && data.selectedSemesters.length > 0) {
        const total = data.selectedSemesters.reduce((sum, s) => sum + s.nominal, 0);
        if (total <= 0) {
            errors.total = 'Total pembayaran tidak valid';
            isValid = false;
        }
    }

    return { isValid, errors };
};

// ============================================
// PULSA VALIDATION
// ============================================
export const validatePulsa = (data) => {
    const errors = {};
    let isValid = true;

    if (!data.phone || data.phone.trim() === '') {
        errors.phone = 'Nomor HP harus diisi';
        isValid = false;
    } else if (!isValidPhone(data.phone)) {
        errors.phone = 'Format nomor HP tidak valid (08xxxxxxxx)';
        isValid = false;
    }

    if (!data.provider) {
        errors.provider = 'Provider tidak terdeteksi';
        isValid = false;
    }

    if (!data.nominal || data.nominal <= 0) {
        errors.nominal = 'Pilih nominal pulsa';
        isValid = false;
    }

    return { isValid, errors };
};

// ============================================
// PROFILE VALIDATION
// ============================================
export const validateProfile = (data) => {
    const errors = {};
    let isValid = true;

    if (!data.name || data.name.trim() === '') {
        errors.name = 'Nama harus diisi';
        isValid = false;
    }

    if (!data.email || data.email.trim() === '') {
        errors.email = 'Email harus diisi';
        isValid = false;
    } else if (!isValidEmail(data.email)) {
        errors.email = 'Format email tidak valid';
        isValid = false;
    }

    if (data.phone && data.phone.trim() !== '') {
        if (!isValidPhone(data.phone)) {
            errors.phone = 'Format nomor HP tidak valid';
            isValid = false;
        }
    }

    return { isValid, errors };
};

// ============================================
// GENERIC VALIDATORS
// ============================================
export const isRequired = (value) => {
    if (!value || value.trim() === '') {
        return { valid: false, message: 'Field ini harus diisi' };
    }
    return { valid: true, message: 'Field valid' };
};

export const isNumeric = (value) => {
    if (!value) return { valid: false, message: 'Field harus diisi' };
    if (isNaN(value)) {
        return { valid: false, message: 'Harus berupa angka' };
    }
    return { valid: true, message: 'Field valid' };
};

export const minLength = (value, length) => {
    if (!value || value.length < length) {
        return { valid: false, message: `Minimal ${length} karakter` };
    }
    return { valid: true, message: 'Field valid' };
};

export const maxLength = (value, length) => {
    if (value && value.length > length) {
        return { valid: false, message: `Maksimal ${length} karakter` };
    }
    return { valid: true, message: 'Field valid' };
};

// ============================================
// EXPORT VALIDATION RULES
// ============================================
export const validationRules = {
    // PLN
    plnNumber: validatePLNNumber,
    // PDAM
    pdamNumber: validatePDAMNumber,
    // Internet
    internetNumber: validateInternetNumber,
    // Seminar
    seminarCode: validateSeminarCode,
    // NIM
    nim: validateNIM,
    // Phone
    phone: validatePhone,
    // Generic
    required: isRequired,
    numeric: isNumeric,
};