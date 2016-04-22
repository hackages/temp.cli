@IF EXIST "%~dp0..\..\tools\node\node.exe" (
    "%~dp0..\..\tools\node\node.exe" "%~dp0node_modules\bb-cli\bin\bb" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node "%~dp0node_modules\bb-cli\bin\bb" %*
)
