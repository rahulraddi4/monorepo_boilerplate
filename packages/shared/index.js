// Export all utilities
export * from "./utils/formatters";
export * from "./utils/validators";
export * from "./utils/stringUtils";
export * from "./utils/dataUtils";
export * from "./utils/numberUtils";

// Export all hooks
export * from "./hooks/useCounter";
export * from "./hooks/useFetch";

// NOTE: Image exports are removed from the main index
// For web: import from "@monorepo/shared/assets/images"
// For mobile: use local assets copied to the app's assets folder
// This prevents Metro from bundling shared package images which causes
// Android resource naming conflicts
