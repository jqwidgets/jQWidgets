import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxWindowComponent } from './angular_jqxwindow';
let jqxWindowModule = class jqxWindowModule {
};
jqxWindowModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxWindowComponent],
        exports: [jqxWindowComponent]
    })
], jqxWindowModule);
export { jqxWindowModule };
