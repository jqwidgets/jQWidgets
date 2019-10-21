import '../jqwidgets/jqxcore';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxcalendar';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxCalendarComponent } from './angular_jqxcalendar';
let jqxCalendarModule = class jqxCalendarModule {
};
jqxCalendarModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxCalendarComponent],
        exports: [jqxCalendarComponent]
    })
], jqxCalendarModule);
export { jqxCalendarModule };
