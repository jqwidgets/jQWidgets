import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxbulletchart';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxBulletChartComponent } from './angular_jqxbulletchart';
var jqxBulletChartModule = /** @class */ (function () {
    function jqxBulletChartModule() {
    }
    jqxBulletChartModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxBulletChartComponent],
            exports: [jqxBulletChartComponent]
        })
    ], jqxBulletChartModule);
    return jqxBulletChartModule;
}());
export { jqxBulletChartModule };
