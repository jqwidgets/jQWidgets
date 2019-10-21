import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxScrollBarComponent } from './angular_jqxscrollbar';
var jqxScrollBarModule = /** @class */ (function () {
    function jqxScrollBarModule() {
    }
    jqxScrollBarModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxScrollBarComponent],
            exports: [jqxScrollBarComponent]
        })
    ], jqxScrollBarModule);
    return jqxScrollBarModule;
}());
export { jqxScrollBarModule };
