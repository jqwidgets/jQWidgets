import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxfileupload';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxFileUploadComponent } from './angular_jqxfileupload';
let jqxFileUploadModule = class jqxFileUploadModule {
};
jqxFileUploadModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxFileUploadComponent],
        exports: [jqxFileUploadComponent]
    })
], jqxFileUploadModule);
export { jqxFileUploadModule };
