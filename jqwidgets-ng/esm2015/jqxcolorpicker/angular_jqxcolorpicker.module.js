import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxdropdownbutton';
import '../jqwidgets/jqxradiobutton';
import '../jqwidgets/jqxcolorpicker';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxColorPickerComponent } from './angular_jqxcolorpicker';
let jqxColorPickerModule = class jqxColorPickerModule {
};
jqxColorPickerModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxColorPickerComponent],
        exports: [jqxColorPickerComponent]
    })
], jqxColorPickerModule);
export { jqxColorPickerModule };
