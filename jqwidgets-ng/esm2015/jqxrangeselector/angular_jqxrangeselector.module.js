import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxrangeselector';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxRangeSelectorComponent } from './angular_jqxrangeselector';
let jqxRangeSelectorModule = class jqxRangeSelectorModule {
};
jqxRangeSelectorModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxRangeSelectorComponent],
        exports: [jqxRangeSelectorComponent]
    })
], jqxRangeSelectorModule);
export { jqxRangeSelectorModule };
