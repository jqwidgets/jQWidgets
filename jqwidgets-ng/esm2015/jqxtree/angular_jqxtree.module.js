import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxpanel';
import '../jqwidgets/jqxdragdrop';
import '../jqwidgets/jqxtree';
import '../jqwidgets/jqxcheckbox';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxTreeComponent } from './angular_jqxtree';
let jqxTreeModule = class jqxTreeModule {
};
jqxTreeModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxTreeComponent],
        exports: [jqxTreeComponent]
    })
], jqxTreeModule);
export { jqxTreeModule };
