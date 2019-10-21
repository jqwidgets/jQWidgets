import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxknob';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxKnobComponent } from './angular_jqxknob';
var jqxKnobModule = /** @class */ (function () {
    function jqxKnobModule() {
    }
    jqxKnobModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxKnobComponent],
            exports: [jqxKnobComponent]
        })
    ], jqxKnobModule);
    return jqxKnobModule;
}());
export { jqxKnobModule };
