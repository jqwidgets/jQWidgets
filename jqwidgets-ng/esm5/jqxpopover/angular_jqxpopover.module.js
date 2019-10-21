import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxpopover';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxPopoverComponent } from './angular_jqxpopover';
var jqxPopoverModule = /** @class */ (function () {
    function jqxPopoverModule() {
    }
    jqxPopoverModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxPopoverComponent],
            exports: [jqxPopoverComponent]
        })
    ], jqxPopoverModule);
    return jqxPopoverModule;
}());
export { jqxPopoverModule };
