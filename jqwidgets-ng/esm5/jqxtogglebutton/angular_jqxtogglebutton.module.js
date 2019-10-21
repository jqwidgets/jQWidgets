import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxToggleButtonComponent } from './angular_jqxtogglebutton';
var jqxToggleButtonModule = /** @class */ (function () {
    function jqxToggleButtonModule() {
    }
    jqxToggleButtonModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxToggleButtonComponent],
            exports: [jqxToggleButtonComponent]
        })
    ], jqxToggleButtonModule);
    return jqxToggleButtonModule;
}());
export { jqxToggleButtonModule };
