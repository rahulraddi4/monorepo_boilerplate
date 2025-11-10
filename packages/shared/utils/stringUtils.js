/**
 * String manipulation utilities
 */

/**
 * Truncate a string to a specified length with ellipsis
 * @param {string} str - The string to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated string
 */
export const truncate = (str, maxLength = 50) => {
  if (!str || str.length <= maxLength) return str;
  return str.substring(0, maxLength) + "...";
};

/**
 * Convert string to slug format (URL-friendly)
 * @param {string} str - The string to slugify
 * @returns {string} Slugified string
 */
export const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Generate initials from a name
 * @param {string} name - Full name
 * @returns {string} Initials (e.g., "John Doe" -> "JD")
 */
export const getInitials = (name) => {
  if (!name) return "";
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
};

/**
 * Pluralize a word based on count
 * @param {number} count - Number of items
 * @param {string} singular - Singular form
 * @param {string} plural - Plural form (optional, defaults to singular + 's')
 * @returns {string} Pluralized string
 */
export const pluralize = (count, singular, plural) => {
  if (count === 1) return `${count} ${singular}`;
  return `${count} ${plural || singular + "s"}`;
};
