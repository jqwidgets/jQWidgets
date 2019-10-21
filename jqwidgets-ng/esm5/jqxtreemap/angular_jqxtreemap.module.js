import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxtreemap';
import '../jqwidgets/jqxtooltip';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxTreeMapComponent } from './angular_jqxtreemap';
var jqxTreeMapModule = /** @class */ (function () {
    function jqxTreeMapModule() {
    }
    jqxTreeMapModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxTreeMapComponent],
            exports: [jqxTreeMapComponent]
        })
    ], jqxTreeMapModule);
    return jqxTreeMapModule;
}());
export { jqxTreeMapModule };
