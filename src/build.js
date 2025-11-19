#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const sourceFile = path.join(__dirname, 'index.js');
const sourceContent = fs.readFileSync(sourceFile, 'utf-8');

const distFile = path.join(distDir, 'index.js');
fs.writeFileSync(distFile, sourceContent);

fs.chmodSync(distFile, '755');

console.log('Build completed successfully!');
console.log(`Executable created: ${distFile}`);