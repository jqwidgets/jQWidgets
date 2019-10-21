import '../jqwidgets/jqxcore';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxcalendar';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxDateTimeInputComponent } from './angular_jqxdatetimeinput';
let jqxDateTimeInputModule = class jqxDateTimeInputModule {
};
jqxDateTimeInputModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxDateTimeInputComponent],
        exports: [jqxDateTimeInputComponent]
    })
], jqxDateTimeInputModule);
export { jqxDateTimeInputModule };
