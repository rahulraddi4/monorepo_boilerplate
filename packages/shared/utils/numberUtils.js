/**
 * Number utilities
 */

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Calculate percentage
 * @param {number} value - Current value
 * @param {number} total - Total value
 * @param {number} decimals - Number of decimal places
 * @returns {number} Percentage
 */
export const calculatePercentage = (value, total, decimals = 2) => {
  if (total === 0) return 0;
  return Number(((value / total) * 100).toFixed(decimals));
};

/**
 * Clamp number between min and max
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped number
 */
export const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

/**
 * Generate random number between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Round number to specified decimal places
 * @param {number} num - Number to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} Rounded number
 */
export const roundTo = (num, decimals = 2) => {
  return Number(num.toFixed(decimals));
};

/**
 * Format bytes to human readable size
 * @param {number} bytes - Number of bytes
 * @returns {string} Formatted size
 */
export const formatBytes = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};
