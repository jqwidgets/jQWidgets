import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxdocking';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxDockingComponent } from './angular_jqxdocking';
var jqxDockingModule = /** @class */ (function () {
    function jqxDockingModule() {
    }
    jqxDockingModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxDockingComponent],
            exports: [jqxDockingComponent]
        })
    ], jqxDockingModule);
    return jqxDockingModule;
}());
export { jqxDockingModule };
