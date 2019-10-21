import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxdropdownbutton';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxDropDownButtonComponent } from './angular_jqxdropdownbutton';
let jqxDropDownButtonModule = class jqxDropDownButtonModule {
};
jqxDropDownButtonModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxDropDownButtonComponent],
        exports: [jqxDropDownButtonComponent]
    })
], jqxDropDownButtonModule);
export { jqxDropDownButtonModule };
