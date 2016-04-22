@IF EXIST "%~dp0..\..\tools\node\node.exe" (
    "%~dp0..\..\tools\node\node.exe" "%~dp0..\..\tools\node\node_modules\npm\bin\npm-cli.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node "%~dp0..\..\tools\node\node_modules\npm\bin\npm-cli.js" %*
)
