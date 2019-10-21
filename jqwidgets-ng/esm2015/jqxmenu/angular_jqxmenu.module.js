import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxmenu';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxMenuComponent } from './angular_jqxmenu';
let jqxMenuModule = class jqxMenuModule {
};
jqxMenuModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxMenuComponent],
        exports: [jqxMenuComponent]
    })
], jqxMenuModule);
export { jqxMenuModule };
