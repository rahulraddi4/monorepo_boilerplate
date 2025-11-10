#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(
  __dirname,
  '../../../packages/shared/assets/images',
);
const targetDir = path.join(__dirname, '../assets/images');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy all image files
fs.readdirSync(sourceDir).forEach(file => {
  if (
    file.endsWith('.png') ||
    file.endsWith('.jpg') ||
    file.endsWith('.jpeg')
  ) {
    const source = path.join(sourceDir, file);
    const target = path.join(targetDir, file);
    fs.copyFileSync(source, target);
    console.log(`Copied ${file}`);
  }
});

console.log('✅ Assets copied successfully!');
