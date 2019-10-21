import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxpanel';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxPanelComponent } from './angular_jqxpanel';
var jqxPanelModule = /** @class */ (function () {
    function jqxPanelModule() {
    }
    jqxPanelModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxPanelComponent],
            exports: [jqxPanelComponent]
        })
    ], jqxPanelModule);
    return jqxPanelModule;
}());
export { jqxPanelModule };
