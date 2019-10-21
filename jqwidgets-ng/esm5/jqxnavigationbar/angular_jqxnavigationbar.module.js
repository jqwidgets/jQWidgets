import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxnavigationbar';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxNavigationBarComponent } from './angular_jqxnavigationbar';
var jqxNavigationBarModule = /** @class */ (function () {
    function jqxNavigationBarModule() {
    }
    jqxNavigationBarModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxNavigationBarComponent],
            exports: [jqxNavigationBarComponent]
        })
    ], jqxNavigationBarModule);
    return jqxNavigationBarModule;
}());
export { jqxNavigationBarModule };
