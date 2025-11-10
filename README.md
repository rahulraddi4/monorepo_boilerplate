# Monorepo - React Native CLI + Next.js

A monorepo setup with React Native CLI (not Expo) and Next.js, sharing common code (utilities, hooks, and assets) while keeping node_modules separate for optimal compatibility.

## 📁 Project Structure

```
monorepo/
├── apps/
│   ├── mobile/          # React Native CLI app (separate node_modules)
│   │   ├── ios/
│   │   ├── android/
│   │   ├── src/
│   │   │   └── screens/
│   │   ├── assets/
│   │   │   └── images/  # Auto-copied from shared package
│   │   ├── scripts/
│   │   │   └── copy-assets.js  # Asset sync script
│   │   ├── App.tsx
│   │   └── package.json
│   └── web/             # Next.js app (workspace)
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   └── about/
│       └── package.json
├── packages/
│   └── shared/          # Shared code package
│       ├── utils/       # Utility functions (formatters, validators)
│       ├── hooks/       # Custom React hooks (useCounter, useFetch)
│       ├── assets/
│       │   └── images/  # Source of truth for all images
│       └── package.json
└── package.json         # Root workspace config
```

## 🎨 Asset Management

This monorepo uses a smart asset sharing strategy:

### How It Works

1. **Single Source of Truth**: All images are stored in `packages/shared/assets/images/`
2. **Web (Next.js)**: Imports images directly from the shared package using ES6 imports
3. **Mobile (React Native)**: Uses an automated copy script that syncs images before builds

### Asset Sync Script

The mobile app includes a `copy-assets.js` script that:

- Copies all images from `packages/shared/assets/images/` to `apps/mobile/assets/images/`
- Runs automatically on `postinstall`, `android`, and `ios` commands
- Ensures React Native Metro bundler can properly resolve assets

**Why this approach?**

- React Native Metro bundler has issues with symlinked assets and cross-package requires
- Next.js can import directly from the shared package without issues
- This keeps images in one place while ensuring compatibility with both platforms

### Adding New Images

1. Add images to `packages/shared/assets/images/`
2. For mobile: The copy script runs automatically on next build
3. For web: Import directly from `@monorepo/shared/assets/images/your-image.png`

````

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20
- npm or yarn
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and JDK

### Installation

1. **Install root dependencies:**

   ```bash
   npm install
````

2. **Install app dependencies:**

   ```bash
   # Install Next.js dependencies
   cd apps/web
   npm install
   cd ../..

   # Install React Native dependencies
   cd apps/mobile
   npm install

   # For iOS, install pods
   cd ios
   pod install
   cd ../../..
   ```

## 🏃 Running the Apps

### Next.js Web App

```bash
# From root directory
npm run web

# OR from apps/web directory
cd apps/web
npm run dev
```

The web app will be available at http://localhost:3000

**Web App Features:**

- Home page with counter hook demo and shared images
- About page with validators demo
- Direct imports of images from shared package
- Uses shared utilities and hooks

### React Native Mobile App

```bash
# Start Metro bundler (in one terminal)
npm run mobile

# In another terminal, run iOS
npm run ios

# OR run Android
npm run android
```

**Mobile App Features:**

- Home screen with counter hook demo and logo image
- Profile screen with validators demo and placeholder image
- Tab navigation between screens
- Auto-synced images from shared package
- Uses shared utilities and hooks

**Note:** The asset copy script runs automatically before iOS/Android builds. Images are synced from `packages/shared/assets/images/` to `apps/mobile/assets/images/`.

## 📦 Shared Package

The `@monorepo/shared` package contains:

### Utilities (`packages/shared/utils/`)

- **formatters.js**: `formatCurrency()`, `formatDate()`, `truncate()`, `formatNumber()`, `getInitials()`
- **validators.js**: `isValidEmail()`, `isValidPhone()`, `isEmpty()`
- **stringUtils.js**: `capitalize()`, `slugify()`, `pluralize()`
- **numberUtils.js**: `calculatePercentage()`, `formatBytes()`
- **dataUtils.js**: `chunk()`, `shuffle()`, `unique()`

### Hooks (`packages/shared/hooks/`)

- **useCounter**: Counter with increment, decrement, reset
- **useFetch**: Data fetching hook with loading and error states

### Assets (`packages/shared/assets/`)

- **images/**: Shared images (logo.png, placeholder.png, banner.png)
- **images.js**: Helper exports for image imports

### Usage Examples

#### Using Utilities and Hooks

```javascript
// In Next.js or React Native
import { useCounter, formatCurrency, isValidEmail } from "@monorepo/shared";

function MyComponent() {
  const { count, increment } = useCounter(0);
  const price = formatCurrency(99.99);
  const valid = isValidEmail("test@example.com");

  // Your component code...
}
```

#### Using Images

**In Next.js (Web):**

```javascript
import Image from "next/image";
import logoImg from "@monorepo/shared/assets/images/logo.png";

function Header() {
  return <Image src={logoImg} alt="Logo" width={150} height={150} />;
}
```

**In React Native (Mobile):**

```javascript
import { Image } from "react-native";

const logoImage = require("../../assets/images/logo.png");

function Header() {
  return <Image source={logoImage} style={{ width: 120, height: 120 }} />;
}
```

## 🔧 How It Works

### Workspace Configuration

- **Web app**: Part of npm workspaces for shared dependency management
- **Mobile app**: Separate node_modules (not in workspaces) to avoid React version conflicts
- Shared package linked via `file:` protocol in mobile app

### Module Resolution

- **Next.js**: Configured in `tsconfig.json` with path mapping and `transpilePackages` in `next.config.js`
- **React Native**: Configured in `metro.config.js` with `watchFolders` to include shared package

### Asset Management

- **Source**: `packages/shared/assets/images/` (single source of truth)
- **Web**: Direct ES6 imports from shared package
- **Mobile**: Automated copy script syncs images to `apps/mobile/assets/images/` before builds
- **Automation**: `postinstall` hook and pre-build scripts ensure images are always in sync

### Why Separate node_modules for Mobile?

React Native requires specific versions of React (19.1.1) that conflict with Next.js (18.3.1). By keeping mobile app outside workspaces with its own node_modules, both apps can use their optimal React versions without conflicts.

## 📝 Development Tips

### Adding New Shared Code

1. Add your code to `packages/shared/`
2. Export it from `packages/shared/index.js`
3. Use it in any app: `import { myFunction } from '@monorepo/shared'`

### Adding New Dependencies

```bash
# Add to web app
cd apps/web
npm install package-name

# Add to mobile app
cd apps/mobile
npm install package-name

# Don't forget iOS pods
cd ios && pod install
```

### Testing the Setup

1. **Web App**: Navigate to http://localhost:3000

   - Test counter on home page
   - Test validators on about page

2. **Mobile App**: Run on emulator/device
   - Test counter on Home tab
   - Test validators on Profile tab

## 🛠️ Technology Stack

- **React Native**: 0.82.1 (CLI, not Expo)
- **Next.js**: 15.0.0 (App Router)
- **React**: 18.3.1+ (Web) / 19.1.1 (Mobile)
- **TypeScript**: 5.3.3+
- **Workspace Manager**: npm workspaces

## 📂 Key Configuration Files

- `package.json` (root): Workspace configuration
- `apps/web/next.config.js`: Next.js transpilePackages config
- `apps/web/tsconfig.json`: Path mappings for shared package
- `apps/mobile/metro.config.js`: Metro bundler config for monorepo
- `packages/shared/package.json`: Shared package definition

## 🎯 Benefits of This Setup

✅ Share code between web and mobile  
✅ Separate node_modules (no dependency conflicts)  
✅ Type-safe imports with TypeScript  
✅ Hot reload works on both platforms  
✅ Easy to maintain and scale  
✅ No Expo limitations - full React Native CLI power
