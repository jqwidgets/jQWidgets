import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxDropDownListComponent } from './angular_jqxdropdownlist';
let jqxDropDownListModule = class jqxDropDownListModule {
};
jqxDropDownListModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxDropDownListComponent],
        exports: [jqxDropDownListComponent]
    })
], jqxDropDownListModule);
export { jqxDropDownListModule };
