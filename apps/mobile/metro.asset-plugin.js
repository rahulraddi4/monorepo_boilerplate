/**
 * Custom Metro asset plugin to sanitize asset names for Android
 * This plugin ensures that asset filenames comply with Android resource naming requirements
 */

module.exports = {
  // Filter assets that need processing
  filter: asset => {
    return true; // Process all assets
  },

  // Transform asset data
  transform: asset => {
    // Sanitize the asset name for Android
    // Android resource names must:
    // - Be lowercase
    // - Contain only [a-z0-9_]
    // - Not start with a number
    const sanitizedFiles = asset.files.map(file => {
      const fileName = file.split('/').pop();
      const sanitized = fileName
        .toLowerCase()
        .replace(/[^a-z0-9_.]/g, '_') // Replace invalid chars with underscore
        .replace(/__+/g, '_') // Replace multiple underscores with single
        .replace(/^_+|_+$/g, ''); // Remove leading/trailing underscores

      return file.replace(fileName, sanitized);
    });

    return {
      ...asset,
      files: sanitizedFiles,
    };
  },
};
