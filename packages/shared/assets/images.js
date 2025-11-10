// Image paths for web and mobile
// For web: use these paths directly in Next.js Image component
// For mobile: use the exported image sources directly

export const IMAGES = {
  logo: "../assets/images/logo.png",
  placeholder: "../assets/images/placeholder.png",
  banner: "../assets/images/banner.png",
};

// Direct image exports for React Native
export const logoImage = require("./images/logo.png");
export const placeholderImage = require("./images/placeholder.png");
export const bannerImage = require("./images/banner.png");

console.log("Image exports:", {
  logoImage,
  placeholderImage,
  bannerImage,
});

// Helper function to get image source for React Native
export const getImageSource = (imageName) => {
  const IMAGE_SOURCES = {
    logo: logoImage,
    placeholder: placeholderImage,
    banner: bannerImage,
  };
  console.log(
    `getImageSource called with: ${imageName}`,
    IMAGE_SOURCES[imageName]
  );
  return IMAGE_SOURCES[imageName];
};
