import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxgauge';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxLinearGaugeComponent } from './angular_jqxlineargauge';
var jqxLinearGaugeModule = /** @class */ (function () {
    function jqxLinearGaugeModule() {
    }
    jqxLinearGaugeModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxLinearGaugeComponent],
            exports: [jqxLinearGaugeComponent]
        })
    ], jqxLinearGaugeModule);
    return jqxLinearGaugeModule;
}());
export { jqxLinearGaugeModule };
