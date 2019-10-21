import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxbuttongroup';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxButtonGroupComponent } from './angular_jqxbuttongroup';
let jqxButtonGroupModule = class jqxButtonGroupModule {
};
jqxButtonGroupModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxButtonGroupComponent],
        exports: [jqxButtonGroupComponent]
    })
], jqxButtonGroupModule);
export { jqxButtonGroupModule };
