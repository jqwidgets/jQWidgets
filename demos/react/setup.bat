rd jqwidgets-react
rd node_modules
rd build
rd images
rd styles
rd scripts
rd sampledata
md build
md images
md scripts
md styles
md jqwidgets-react
md sampledata
xcopy /S /I ..\..\jqwidgets-react jqwidgets-react
xcopy /S /I ..\..\images images
xcopy /S /I ..\..\scripts scripts
xcopy /S /I ..\..\styles styles
xcopy /S /I ..\sampledata sampledata
npm install
npm start