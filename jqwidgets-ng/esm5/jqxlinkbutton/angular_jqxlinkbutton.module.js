import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxLinkButtonComponent } from './angular_jqxlinkbutton';
var jqxLinkButtonModule = /** @class */ (function () {
    function jqxLinkButtonModule() {
    }
    jqxLinkButtonModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxLinkButtonComponent],
            exports: [jqxLinkButtonComponent]
        })
    ], jqxLinkButtonModule);
    return jqxLinkButtonModule;
}());
export { jqxLinkButtonModule };
