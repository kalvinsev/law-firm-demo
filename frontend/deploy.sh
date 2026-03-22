#!/bin/bash

# Quick deployment script for AxonAI landing page

echo "🚀 AxonAI Landing Page Deployment"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: AxonAI landing page"
    echo "✅ Git initialized"
    echo ""
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI not found. Installing..."
    npm i -g vercel
    echo "✅ Vercel CLI installed"
    echo ""
fi

echo "🎯 Ready to deploy!"
echo ""
echo "Choose deployment method:"
echo "1. Deploy to Vercel (recommended)"
echo "2. Just build locally"
echo ""
read -p "Enter choice (1-2): " choice

case $choice in
    1)
        echo ""
        echo "🌐 Deploying to Vercel..."
        vercel --prod
        echo ""
        echo "✅ Deployment complete!"
        echo "Your site is live. Check the URL above."
        ;;
    2)
        echo ""
        echo "🔨 Building for production..."
        npm run build
        echo ""
        echo "✅ Build complete!"
        echo "Files are in ./dist — upload to any static host"
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac
