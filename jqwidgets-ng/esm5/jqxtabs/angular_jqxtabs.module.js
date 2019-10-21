import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtabs';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxTabsComponent } from './angular_jqxtabs';
var jqxTabsModule = /** @class */ (function () {
    function jqxTabsModule() {
    }
    jqxTabsModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxTabsComponent],
            exports: [jqxTabsComponent]
        })
    ], jqxTabsModule);
    return jqxTabsModule;
}());
export { jqxTabsModule };
