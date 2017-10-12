rd jqwidgets
rd jqwidgets-ts
rd node_modules
rd build
rd images
rd sampledata
md build
md jqwidgets-ts
md jqwidgets
md images
md sampledata
xcopy /S /I ..\..\jqwidgets-ts jqwidgets-ts
xcopy /S /I ..\..\jqwidgets jqwidgets
xcopy /S /I ..\..\images images
xcopy /S /I ..\..\scripts scripts
xcopy /S /I ..\..\styles styles
xcopy /S /I ..\sampledata sampledata

call npm install
call npm i increase-memory-limit
call increase-memory-limit
call npm start