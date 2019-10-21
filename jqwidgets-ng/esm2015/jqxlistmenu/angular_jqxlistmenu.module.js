import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistmenu';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxListMenuComponent } from './angular_jqxlistmenu';
let jqxListMenuModule = class jqxListMenuModule {
};
jqxListMenuModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxListMenuComponent],
        exports: [jqxListMenuComponent]
    })
], jqxListMenuModule);
export { jqxListMenuModule };
