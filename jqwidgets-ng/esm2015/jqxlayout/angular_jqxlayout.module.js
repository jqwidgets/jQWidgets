import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxribbon';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxlayout';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxLayoutComponent } from './angular_jqxlayout';
let jqxLayoutModule = class jqxLayoutModule {
};
jqxLayoutModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxLayoutComponent],
        exports: [jqxLayoutComponent]
    })
], jqxLayoutModule);
export { jqxLayoutModule };
