#!/bin/bash

# Vercel build script
echo "Starting Vercel build..."

# Install dependencies
npm install

# Build the application
npm run build

echo "Build completed successfully!"
