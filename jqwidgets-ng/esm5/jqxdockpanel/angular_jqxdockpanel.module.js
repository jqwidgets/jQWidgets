import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdockpanel';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxDockPanelComponent } from './angular_jqxdockpanel';
var jqxDockPanelModule = /** @class */ (function () {
    function jqxDockPanelModule() {
    }
    jqxDockPanelModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxDockPanelComponent],
            exports: [jqxDockPanelComponent]
        })
    ], jqxDockPanelModule);
    return jqxDockPanelModule;
}());
export { jqxDockPanelModule };
