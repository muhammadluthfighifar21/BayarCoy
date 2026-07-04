/**
 * STORAGE MODULE
 * Manages all LocalStorage operations for BayarKita
 */

// ============================================
// STORAGE KEYS
// ============================================
const STORAGE_KEYS = {
    HISTORY: 'bayarkita_history',
    PROFILE: 'bayarkita_profile',
    DARK_MODE: 'bayarkita_darkmode',
    BALANCE: 'bayarkita_balance',
    LAST_TRANSACTION: 'bayarkita_last_transaction',
    FAVORITES: 'bayarkita_favorites'
};

// ============================================
// HISTORY STORAGE
// ============================================
export const saveHistory = (transaction) => {
    try {
        const history = getHistory();
        history.unshift({
            ...transaction,
            id: generateTransactionId(),
            timestamp: new Date().toISOString()
        });
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
        return true;
    } catch (error) {
        console.error('Error saving history:', error);
        return false;
    }
};

export const getHistory = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error getting history:', error);
        return [];
    }
};

export const clearHistory = () => {
    try {
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
        return true;
    } catch (error) {
        console.error('Error clearing history:', error);
        return false;
    }
};

export const deleteHistoryItem = (id) => {
    try {
        const history = getHistory();
        const filtered = history.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(filtered));
        return true;
    } catch (error) {
        console.error('Error deleting history item:', error);
        return false;
    }
};

export const getTransactionById = (id) => {
    try {
        const history = getHistory();
        return history.find(item => item.id === id) || null;
    } catch (error) {
        console.error('Error getting transaction:', error);
        return null;
    }
};

// ============================================
// PROFILE STORAGE
// ============================================
export const saveProfile = (profile) => {
    try {
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
        return true;
    } catch (error) {
        console.error('Error saving profile:', error);
        return false;
    }
};

export const getProfile = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
        if (data) {
            return JSON.parse(data);
        }
        // Return default profile if not exists
        return {
            name: 'Muhammad Rizky',
            email: 'm.rizky@student.univ.ac.id',
            phone: '081234567890',
            address: 'Jl. Merdeka No. 123, Jakarta',
            membership: 'Gold',
            joinDate: '2023-08-15',
            balance: 2500000,
            avatar: 'MR'
        };
    } catch (error) {
        console.error('Error getting profile:', error);
        return null;
    }
};

export const updateBalance = (amount) => {
    try {
        const profile = getProfile();
        if (profile) {
            profile.balance += amount;
            saveProfile(profile);
            return profile.balance;
        }
        return null;
    } catch (error) {
        console.error('Error updating balance:', error);
        return null;
    }
};

// ============================================
// DARK MODE STORAGE
// ============================================
export const saveDarkMode = (isDark) => {
    try {
        localStorage.setItem(STORAGE_KEYS.DARK_MODE, JSON.stringify(isDark));
        return true;
    } catch (error) {
        console.error('Error saving dark mode:', error);
        return false;
    }
};

export const getDarkMode = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
        return data ? JSON.parse(data) : false;
    } catch (error) {
        console.error('Error getting dark mode:', error);
        return false;
    }
};

// ============================================
// LAST TRANSACTION STORAGE
// ============================================
export const saveLastTransaction = (transaction) => {
    try {
        localStorage.setItem(STORAGE_KEYS.LAST_TRANSACTION, JSON.stringify(transaction));
        return true;
    } catch (error) {
        console.error('Error saving last transaction:', error);
        return false;
    }
};

export const getLastTransaction = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.LAST_TRANSACTION);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error getting last transaction:', error);
        return null;
    }
};

// ============================================
// FAVORITES STORAGE
// ============================================
export const saveFavorites = (favorites) => {
    try {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
        return true;
    } catch (error) {
        console.error('Error saving favorites:', error);
        return false;
    }
};

export const getFavorites = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error getting favorites:', error);
        return [];
    }
};

export const toggleFavorite = (id) => {
    try {
        const favorites = getFavorites();
        const index = favorites.indexOf(id);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(id);
        }
        saveFavorites(favorites);
        return favorites;
    } catch (error) {
        console.error('Error toggling favorite:', error);
        return null;
    }
};

export const isFavorite = (id) => {
    try {
        const favorites = getFavorites();
        return favorites.includes(id);
    } catch (error) {
        console.error('Error checking favorite:', error);
        return false;
    }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
const generateTransactionId = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    return `TRX${year}${month}${day}${random}`;
};

// ============================================
// STORAGE CLEANUP
// ============================================
export const clearAllStorage = () => {
    try {
        Object.values(STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
        return true;
    } catch (error) {
        console.error('Error clearing storage:', error);
        return false;
    }
};

// ============================================
// STORAGE STATISTICS
// ============================================
export const getStorageStats = () => {
    try {
        let totalSize = 0;
        const stats = {};

        Object.entries(STORAGE_KEYS).forEach(([key, value]) => {
            const data = localStorage.getItem(value);
            if (data) {
                const size = new Blob([data]).size;
                stats[key] = size;
                totalSize += size;
            } else {
                stats[key] = 0;
            }
        });

        return {
            stats,
            totalSize,
            items: Object.keys(STORAGE_KEYS).length
        };
    } catch (error) {
        console.error('Error getting storage stats:', error);
        return null;
    }
};