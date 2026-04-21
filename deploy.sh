#!/bin/bash

# Portfolio Deployment Script
# This script helps with building and deploying the portfolio

set -e  # Exit on error

echo "=== Portfolio Website Deployment Script ==="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}==> $1${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_warning "Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

print_step "Node.js version: $(node -v)"

# Main menu
show_menu() {
    echo ""
    echo "What would you like to do?"
    echo "1) Install dependencies"
    echo "2) Run development server"
    echo "3) Build for production"
    echo "4) Preview production build"
    echo "5) Deploy to Netlify"
    echo "6) Deploy to Vercel"
    echo "7) Update portfolio content"
    echo "0) Exit"
    echo ""
}

# Install dependencies
install_deps() {
    print_step "Installing dependencies..."
    npm install
    print_success "Dependencies installed!"
}

# Run dev server
run_dev() {
    print_step "Starting development server..."
    npm run dev
}

# Build for production
build_prod() {
    print_step "Building for production..."
    npm run build
    print_success "Build complete! Output in 'dist/' folder"
    
    # Show build size
    if command -v du &> /dev/null; then
        echo ""
        print_step "Build size:"
        du -sh dist/
    fi
}

# Preview production build
preview_build() {
    print_step "Starting preview server..."
    print_warning "Visit: http://localhost:4173"
    npm run preview
}

# Deploy to Netlify
deploy_netlify() {
    if ! command -v netlify &> /dev/null; then
        print_warning "Netlify CLI not found. Installing..."
        npm install -g netlify-cli
    fi
    
    print_step "Building for production..."
    npm run build
    
    print_step "Deploying to Netlify..."
    netlify deploy --prod --dir=dist
    print_success "Deployed to Netlify!"
}

# Deploy to Vercel
deploy_vercel() {
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    print_step "Building for production..."
    npm run build
    
    print_step "Deploying to Vercel..."
    vercel --prod
    print_success "Deployed to Vercel!"
}

# Update portfolio content
update_content() {
    print_step "Opening portfolio data file in editor..."
    if command -v code &> /dev/null; then
        code src/data/portfolio.js
    else
        print_warning "VS Code not found. Open 'src/data/portfolio.js' manually in your editor."
    fi
}

# Main loop
while true; do
    show_menu
    read -p "Enter your choice: " choice
    
    case $choice in
        1) install_deps ;;
        2) run_dev ;;
        3) build_prod ;;
        4) preview_build ;;
        5) deploy_netlify ;;
        6) deploy_vercel ;;
        7) update_content ;;
        0) print_success "Goodbye!"; exit 0 ;;
        *) print_warning "Invalid option. Please try again." ;;
    esac
done
