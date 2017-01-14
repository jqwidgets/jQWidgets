/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createFileUpload(selector)
{   
    // initialization options - validated in typescript
    // jqwidgets.FileUploadOptions has generated TS definition
    let options: jqwidgets.FileUploadOptions =
    {
        width: 300, uploadUrl: 'imageUpload.php', fileInputName: 'fileToUpload'
    };

    // creates an instance
    let myFileUpload: jqwidgets.jqxFileUpload = jqwidgets.createInstance(selector, 'jqxFileUpload', options);   
}