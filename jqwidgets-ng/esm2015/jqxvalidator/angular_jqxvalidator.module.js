import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxvalidator';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxValidatorComponent } from './angular_jqxvalidator';
let jqxValidatorModule = class jqxValidatorModule {
};
jqxValidatorModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxValidatorComponent],
        exports: [jqxValidatorComponent]
    })
], jqxValidatorModule);
export { jqxValidatorModule };
