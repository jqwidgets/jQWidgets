import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxcomplexinput';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxComplexInputComponent } from './angular_jqxcomplexinput';
let jqxComplexInputModule = class jqxComplexInputModule {
};
jqxComplexInputModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxComplexInputComponent],
        exports: [jqxComplexInputComponent]
    })
], jqxComplexInputModule);
export { jqxComplexInputModule };
