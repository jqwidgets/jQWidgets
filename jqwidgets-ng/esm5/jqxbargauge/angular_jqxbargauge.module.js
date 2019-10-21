import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxbargauge';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxBarGaugeComponent } from './angular_jqxbargauge';
var jqxBarGaugeModule = /** @class */ (function () {
    function jqxBarGaugeModule() {
    }
    jqxBarGaugeModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxBarGaugeComponent],
            exports: [jqxBarGaugeComponent]
        })
    ], jqxBarGaugeModule);
    return jqxBarGaugeModule;
}());
export { jqxBarGaugeModule };
