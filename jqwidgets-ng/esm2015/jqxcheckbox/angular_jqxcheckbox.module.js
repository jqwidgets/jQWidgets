import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxcheckbox';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxCheckBoxComponent } from './angular_jqxcheckbox';
let jqxCheckBoxModule = class jqxCheckBoxModule {
};
jqxCheckBoxModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxCheckBoxComponent],
        exports: [jqxCheckBoxComponent]
    })
], jqxCheckBoxModule);
export { jqxCheckBoxModule };
