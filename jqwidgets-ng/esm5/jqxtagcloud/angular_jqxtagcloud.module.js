import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtagcloud';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxTagCloudComponent } from './angular_jqxtagcloud';
var jqxTagCloudModule = /** @class */ (function () {
    function jqxTagCloudModule() {
    }
    jqxTagCloudModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxTagCloudComponent],
            exports: [jqxTagCloudComponent]
        })
    ], jqxTagCloudModule);
    return jqxTagCloudModule;
}());
export { jqxTagCloudModule };
