@echo off
set NO_UPDATE_NOTIFIER=1
set NPM_CONFIG_UPDATE_NOTIFIER=false
echo Installing dependencies (may take 30-60 min on slow network, please wait)...
call npm install --no-audit --no-fund
echo.
echo Starting dev server...
call npm run dev
