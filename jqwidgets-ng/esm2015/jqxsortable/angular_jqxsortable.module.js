import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxsortable';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxSortableComponent } from './angular_jqxsortable';
let jqxSortableModule = class jqxSortableModule {
};
jqxSortableModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxSortableComponent],
        exports: [jqxSortableComponent]
    })
], jqxSortableModule);
export { jqxSortableModule };
