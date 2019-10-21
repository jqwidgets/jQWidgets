import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdockpanel';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxDockPanelComponent } from './angular_jqxdockpanel';
let jqxDockPanelModule = class jqxDockPanelModule {
};
jqxDockPanelModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxDockPanelComponent],
        exports: [jqxDockPanelComponent]
    })
], jqxDockPanelModule);
export { jqxDockPanelModule };
