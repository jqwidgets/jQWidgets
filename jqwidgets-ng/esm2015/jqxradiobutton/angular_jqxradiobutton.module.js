import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxradiobutton';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxRadioButtonComponent } from './angular_jqxradiobutton';
let jqxRadioButtonModule = class jqxRadioButtonModule {
};
jqxRadioButtonModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxRadioButtonComponent],
        exports: [jqxRadioButtonComponent]
    })
], jqxRadioButtonModule);
export { jqxRadioButtonModule };
