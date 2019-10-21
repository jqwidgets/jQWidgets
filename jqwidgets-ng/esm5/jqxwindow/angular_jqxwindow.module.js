import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxWindowComponent } from './angular_jqxwindow';
var jqxWindowModule = /** @class */ (function () {
    function jqxWindowModule() {
    }
    jqxWindowModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxWindowComponent],
            exports: [jqxWindowComponent]
        })
    ], jqxWindowModule);
    return jqxWindowModule;
}());
export { jqxWindowModule };
