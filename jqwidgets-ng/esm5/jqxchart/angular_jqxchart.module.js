import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxchart.core';
import '../jqwidgets/jqxchart.api';
import '../jqwidgets/jqxchart.annotations';
import '../jqwidgets/jqxchart.rangeselector';
import '../jqwidgets/jqxchart.waterfall';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxChartComponent } from './angular_jqxchart';
var jqxChartModule = /** @class */ (function () {
    function jqxChartModule() {
    }
    jqxChartModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxChartComponent],
            exports: [jqxChartComponent]
        })
    ], jqxChartModule);
    return jqxChartModule;
}());
export { jqxChartModule };
