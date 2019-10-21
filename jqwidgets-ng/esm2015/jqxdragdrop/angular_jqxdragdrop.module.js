import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdragdrop';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxDragDropComponent } from './angular_jqxdragdrop';
let jqxDragDropModule = class jqxDragDropModule {
};
jqxDragDropModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxDragDropComponent],
        exports: [jqxDragDropComponent]
    })
], jqxDragDropModule);
export { jqxDragDropModule };
