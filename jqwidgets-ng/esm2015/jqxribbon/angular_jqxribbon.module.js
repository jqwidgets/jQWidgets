import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxribbon';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxRibbonComponent } from './angular_jqxribbon';
let jqxRibbonModule = class jqxRibbonModule {
};
jqxRibbonModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxRibbonComponent],
        exports: [jqxRibbonComponent]
    })
], jqxRibbonModule);
export { jqxRibbonModule };
