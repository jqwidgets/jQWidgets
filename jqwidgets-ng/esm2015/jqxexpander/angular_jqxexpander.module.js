import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxexpander';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxExpanderComponent } from './angular_jqxexpander';
let jqxExpanderModule = class jqxExpanderModule {
};
jqxExpanderModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxExpanderComponent],
        exports: [jqxExpanderComponent]
    })
], jqxExpanderModule);
export { jqxExpanderModule };
