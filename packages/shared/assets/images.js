// Image paths for web and mobile
// For web: use these paths directly in Next.js Image component
// For mobile: use the mobile app's local assets instead (apps/mobile/assets/images/)

export const IMAGES = {
  logo: "../assets/images/logo.jpg",
  placeholder: "../assets/images/placeholder.jpg",
  banner: "../assets/images/banner.jpg",
};

// Direct image exports for React Native - WEB ONLY
// Mobile apps should import from their local assets folder
export const logoImage = require("./images/logo.jpg");
export const placeholderImage = require("./images/placeholder.jpg");
export const bannerImage = require("./images/banner.jpg");

// Helper function to get image source for React Native
export const getImageSource = (imageName) => {
  const IMAGE_SOURCES = {
    logo: logoImage,
    placeholder: placeholderImage,
    banner: bannerImage,
  };
  return IMAGE_SOURCES[imageName];
};
