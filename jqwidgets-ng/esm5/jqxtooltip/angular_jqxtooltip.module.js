import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxtooltip';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxTooltipComponent } from './angular_jqxtooltip';
var jqxTooltipModule = /** @class */ (function () {
    function jqxTooltipModule() {
    }
    jqxTooltipModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxTooltipComponent],
            exports: [jqxTooltipComponent]
        })
    ], jqxTooltipModule);
    return jqxTooltipModule;
}());
export { jqxTooltipModule };
