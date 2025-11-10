// Mobile-specific image exports
// These reference the local assets copied from the shared package

// Direct image exports for React Native
export const logoImage = require('../../assets/images/logo.jpg');
export const placeholderImage = require('../../assets/images/placeholder.jpg');
export const bannerImage = require('../../assets/images/banner.jpg');

// Helper function to get image source for React Native
export const getImageSource = imageName => {
  const IMAGE_SOURCES = {
    logo: logoImage,
    placeholder: placeholderImage,
    banner: bannerImage,
  };
  return IMAGE_SOURCES[imageName];
};
