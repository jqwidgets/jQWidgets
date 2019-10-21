import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxnavbar';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxNavBarComponent } from './angular_jqxnavbar';
var jqxNavBarModule = /** @class */ (function () {
    function jqxNavBarModule() {
    }
    jqxNavBarModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxNavBarComponent],
            exports: [jqxNavBarComponent]
        })
    ], jqxNavBarModule);
    return jqxNavBarModule;
}());
export { jqxNavBarModule };
