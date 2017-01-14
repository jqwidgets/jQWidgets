/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createFileUpload(selector) {
    // initialization options - validated in typescript
    // jqwidgets.FileUploadOptions has generated TS definition
    var options = {
        width: 300, uploadUrl: 'imageUpload.php', fileInputName: 'fileToUpload'
    };
    // creates an instance
    var myFileUpload = jqwidgets.createInstance(selector, 'jqxFileUpload', options);
}
//# sourceMappingURL=typescript-fileupload.js.map