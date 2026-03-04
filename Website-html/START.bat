@echo off
echo ========================================
echo ========================================
echo FitTrack - Installing Dependencies
echo ========================================
cd /d "C:\Users\arvin\OneDrive\Desktop\Website-html"
"C:\Program Files\nodejs\npm.cmd" install

echo.
echo Installing client dependencies...
echo ========================================
cd client
"C:\Program Files\nodejs\npm.cmd" install
cd ..

echo.
echo ========================================
echo Starting development servers (API on 5000, React on 3000)
echo ========================================
echo.
echo 🏋️  Open your browser and go to:
echo     http://localhost:3000

echo Press Ctrl+C two times to stop both processes
echo ========================================
echo.

"C:\Program Files\nodejs\npm.cmd" run devall

pause
