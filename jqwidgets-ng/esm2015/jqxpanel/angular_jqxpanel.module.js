import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxpanel';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxPanelComponent } from './angular_jqxpanel';
let jqxPanelModule = class jqxPanelModule {
};
jqxPanelModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxPanelComponent],
        exports: [jqxPanelComponent]
    })
], jqxPanelModule);
export { jqxPanelModule };
