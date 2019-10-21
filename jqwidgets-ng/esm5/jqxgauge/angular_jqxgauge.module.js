import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxgauge';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxGaugeComponent } from './angular_jqxgauge';
var jqxGaugeModule = /** @class */ (function () {
    function jqxGaugeModule() {
    }
    jqxGaugeModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxGaugeComponent],
            exports: [jqxGaugeComponent]
        })
    ], jqxGaugeModule);
    return jqxGaugeModule;
}());
export { jqxGaugeModule };
