@echo off
echo.
echo ========================================
echo    RESUME FILE SETUP
echo ========================================
echo.
echo This script will help you add your resume to the website.
echo.
echo INSTRUCTIONS:
echo 1. Place your resume PDF anywhere on your Desktop
echo 2. Name it: Luis_Figueroa_Hardware_IoT_Resume.pdf
echo 3. Run this script again
echo.

set "RESUME_NAME=Luis_Figueroa_Hardware_IoT_Resume.pdf"
set "DESKTOP=C:\Users\luifi\Desktop"
set "PUBLIC_DIR=C:\Users\luifi\Desktop\portfolio-nextjs\public"

echo Searching for resume on Desktop...
echo.

if exist "%DESKTOP%\%RESUME_NAME%" (
    echo [FOUND] %RESUME_NAME%
    echo.
    echo Copying to public folder...
    copy "%DESKTOP%\%RESUME_NAME%" "%PUBLIC_DIR%\Luis_Figueroa_Resume.pdf"
    
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo [SUCCESS] Resume added successfully!
        echo.
        echo File location: %PUBLIC_DIR%\Luis_Figueroa_Resume.pdf
        echo.
        echo The resume download button will now work on your site.
        echo Visit: http://localhost:3000
        echo.
        del "%PUBLIC_DIR%\PLACE-RESUME-HERE.txt" 2>nul
    ) else (
        echo.
        echo [ERROR] Failed to copy file.
        echo.
    )
) else (
    echo [NOT FOUND] Could not find: %RESUME_NAME%
    echo.
    echo Please place your resume PDF on the Desktop and name it:
    echo %RESUME_NAME%
    echo.
    echo OR manually copy your resume to:
    echo %PUBLIC_DIR%\Luis_Figueroa_Resume.pdf
    echo.
)

echo.
echo ========================================
pause
