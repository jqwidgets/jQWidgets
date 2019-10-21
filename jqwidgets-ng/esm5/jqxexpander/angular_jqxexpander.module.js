import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxexpander';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxExpanderComponent } from './angular_jqxexpander';
var jqxExpanderModule = /** @class */ (function () {
    function jqxExpanderModule() {
    }
    jqxExpanderModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxExpanderComponent],
            exports: [jqxExpanderComponent]
        })
    ], jqxExpanderModule);
    return jqxExpanderModule;
}());
export { jqxExpanderModule };
