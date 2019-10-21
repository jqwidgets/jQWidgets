import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxvalidator';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxValidatorComponent } from './angular_jqxvalidator';
var jqxValidatorModule = /** @class */ (function () {
    function jqxValidatorModule() {
    }
    jqxValidatorModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxValidatorComponent],
            exports: [jqxValidatorComponent]
        })
    ], jqxValidatorModule);
    return jqxValidatorModule;
}());
export { jqxValidatorModule };
