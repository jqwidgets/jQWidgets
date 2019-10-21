import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxDrawComponent } from './angular_jqxdraw';
let jqxDrawModule = class jqxDrawModule {
};
jqxDrawModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxDrawComponent],
        exports: [jqxDrawComponent]
    })
], jqxDrawModule);
export { jqxDrawModule };
