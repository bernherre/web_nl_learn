@echo off
cd /d "%~dp0"
echo.
echo web_nl_learn - servidor local
echo http://localhost:8000
echo.
start "" http://localhost:8000
py -m http.server 8000
