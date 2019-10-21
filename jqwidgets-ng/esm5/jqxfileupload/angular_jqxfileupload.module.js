import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxfileupload';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxFileUploadComponent } from './angular_jqxfileupload';
var jqxFileUploadModule = /** @class */ (function () {
    function jqxFileUploadModule() {
    }
    jqxFileUploadModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxFileUploadComponent],
            exports: [jqxFileUploadComponent]
        })
    ], jqxFileUploadModule);
    return jqxFileUploadModule;
}());
export { jqxFileUploadModule };
