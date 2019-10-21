import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxmenu';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxMenuComponent } from './angular_jqxmenu';
var jqxMenuModule = /** @class */ (function () {
    function jqxMenuModule() {
    }
    jqxMenuModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxMenuComponent],
            exports: [jqxMenuComponent]
        })
    ], jqxMenuModule);
    return jqxMenuModule;
}());
export { jqxMenuModule };
