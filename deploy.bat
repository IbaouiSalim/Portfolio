@echo off
REM Portfolio Deployment Script for Windows
REM This script helps with building and deploying the portfolio

setlocal enabledelayedexpansion

echo ===== Portfolio Website Deployment Script =====
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo Node.js is not installed. Please install Node.js 16+ first.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo Node.js version: %NODE_VERSION%

:menu
echo.
echo What would you like to do?
echo 1) Install dependencies
echo 2) Run development server
echo 3) Build for production
echo 4) Preview production build
echo 5) Deploy to Netlify
echo 6) Deploy to Vercel
echo 7) Update portfolio content
echo 0) Exit
echo.

set /p choice="Enter your choice: "

if "%choice%"=="1" goto install
if "%choice%"=="2" goto dev
if "%choice%"=="3" goto build
if "%choice%"=="4" goto preview
if "%choice%"=="5" goto netlify
if "%choice%"=="6" goto vercel
if "%choice%"=="7" goto update
if "%choice%"=="0" goto end
echo Invalid option. Please try again.
goto menu

:install
echo.
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo Failed to install dependencies!
    pause
    goto menu
)
echo Dependencies installed successfully!
pause
goto menu

:dev
echo.
echo Starting development server...
echo Visit: http://localhost:5173
call npm run dev
goto menu

:build
echo.
echo Building for production...
call npm run build
if errorlevel 1 (
    echo Build failed!
    pause
    goto menu
)
echo Build complete! Output in 'dist/' folder
echo.
dir /s dist
pause
goto menu

:preview
echo.
echo Starting preview server...
echo Visit: http://localhost:4173
call npm run preview
goto menu

:netlify
where netlify >nul 2>nul
if errorlevel 1 (
    echo Installing Netlify CLI...
    call npm install -g netlify-cli
)
echo.
echo Building for production...
call npm run build
echo.
echo Deploying to Netlify...
call netlify deploy --prod --dir=dist
echo Deployed to Netlify!
pause
goto menu

:vercel
where vercel >nul 2>nul
if errorlevel 1 (
    echo Installing Vercel CLI...
    call npm install -g vercel
)
echo.
echo Building for production...
call npm run build
echo.
echo Deploying to Vercel...
call vercel --prod
echo Deployed to Vercel!
pause
goto menu

:update
echo.
echo Opening portfolio data file...
if exist "src\data\portfolio.js" (
    start "" "src\data\portfolio.js"
) else (
    echo File not found. Open 'src/data/portfolio.js' manually in your editor.
)
pause
goto menu

:end
echo Goodbye!
endlocal
