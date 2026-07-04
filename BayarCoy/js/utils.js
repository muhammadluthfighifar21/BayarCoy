/**
 * UTILITIES MODULE
 * Common utility functions for BayarKita
 */

// ============================================
// STRING UTILITIES
// ============================================
export const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

export const formatDate = (date, format = 'DD/MM/YYYY') => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    const replacements = {
        'DD': day,
        'MM': month,
        'YYYY': year,
        'HH': hours,
        'mm': minutes
    };

    return format.replace(/DD|MM|YYYY|HH|mm/g, match => replacements[match]);
};

export const formatDateTime = (date) => {
    return formatDate(date, 'DD/MM/YYYY HH:mm');
};

export const truncateText = (text, length = 50) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
};

export const generateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
};

export const generateRandomString = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// ============================================
// NUMBER UTILITIES
// ============================================
export const formatNumber = (num) => {
    return new Intl.NumberFormat('id-ID').format(num);
};

export const roundToDecimal = (num, decimals = 0) => {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
};

export const getPercentage = (part, total) => {
    if (total === 0) return 0;
    return (part / total) * 100;
};

// ============================================
// ARRAY UTILITIES
// ============================================
export const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

export const groupBy = (array, key) => {
    return array.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
};

export const sortByKey = (array, key, ascending = true) => {
    return [...array].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];
        if (typeof aVal === 'string') {
            return ascending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }
        return ascending ? aVal - bVal : bVal - aVal;
    });
};

// ============================================
// DOM UTILITIES
// ============================================
export const createElement = (tag, classes = [], attributes = {}, innerHTML = '') => {
    const element = document.createElement(tag);
    if (classes.length) {
        element.classList.add(...classes);
    }
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }
    return element;
};

export const addEventListeners = (element, events) => {
    Object.entries(events).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
    });
};

export const debounce = (func, wait = 300) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const throttle = (func, limit = 300) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
};

// ============================================
// DATE UTILITIES
// ============================================
export const isToday = (date) => {
    const today = new Date();
    const d = new Date(date);
    return d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear();
};

export const isThisMonth = (date) => {
    const today = new Date();
    const d = new Date(date);
    return d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear();
};

export const getMonthName = (month, short = false) => {
    const names = short ? ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'] : ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return names[month] || '';
};

export const getDayName = (day, short = false) => {
    const names = short ? ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'] : ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    return names[day] || '';
};

// ============================================
// COLOR UTILITIES
// ============================================
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const getColorFromString = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 70%, 50%)`;
    return color;
};

// ============================================
// BROWSER UTILITIES
// ============================================
export const isOnline = () => {
    return navigator.onLine;
};

export const copyToClipboard = async(text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        console.error('Error copying to clipboard:', error);
        return false;
    }
};

export const downloadFile = (data, filename, type = 'text/plain') => {
    try {
        const blob = new Blob([data], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        return true;
    } catch (error) {
        console.error('Error downloading file:', error);
        return false;
    }
};

// ============================================
// VALIDATION UTILITIES
// ============================================
export const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const isValidPhone = (phone) => {
    const re = /^08\d{8,11}$/;
    return re.test(phone);
};

export const isValidNIM = (nim) => {
    const re = /^\d{12}$/;
    return re.test(nim);
};

export const isValidCustomerNumber = (number) => {
    // Generic validation for customer numbers
    return number && number.length >= 5 && number.length <= 20;
};

// ============================================
// OBJECT UTILITIES
// ============================================
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2 };
};

export const pick = (obj, keys) => {
    return keys.reduce((result, key) => {
        if (obj && obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
        return result;
    }, {});
};

export const omit = (obj, keys) => {
    const result = {...obj };
    keys.forEach(key => {
        delete result[key];
    });
    return result;
};

// ============================================
// RANDOM DATA GENERATORS
// ============================================
export const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomArray = (length, generator) => {
    return Array.from({ length }, generator);
};

// ============================================
// PERFORMANCE UTILITIES
// ============================================
export const measurePerformance = (fn, label = 'Performance') => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${label}: ${(end - start).toFixed(2)}ms`);
    return result;
};

export const lazyLoad = (callback, delay = 0) => {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(callback);
    } else {
        setTimeout(callback, delay);
    }
};

// ============================================
// URL UTILITIES
// ============================================
export const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (const [key, value] of params) {
        result[key] = value;
    }
    return result;
};

export const buildUrl = (base, params) => {
    const url = new URL(base);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });
    return url.toString();
};