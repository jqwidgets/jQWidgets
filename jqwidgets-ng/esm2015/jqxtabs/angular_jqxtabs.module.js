import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtabs';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxTabsComponent } from './angular_jqxtabs';
let jqxTabsModule = class jqxTabsModule {
};
jqxTabsModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxTabsComponent],
        exports: [jqxTabsComponent]
    })
], jqxTabsModule);
export { jqxTabsModule };
