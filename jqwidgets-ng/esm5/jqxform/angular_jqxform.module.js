import '../jqwidgets/jqxcore';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxinput';
import '../jqwidgets/jqxpasswordinput';
import '../jqwidgets/jqxnumberinput';
import '../jqwidgets/jqxradiobutton';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxmaskedinput';
import '../jqwidgets/jqxcalendar';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxform';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxFormComponent } from './angular_jqxform';
var jqxFormModule = /** @class */ (function () {
    function jqxFormModule() {
    }
    jqxFormModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxFormComponent],
            exports: [jqxFormComponent]
        })
    ], jqxFormModule);
    return jqxFormModule;
}());
export { jqxFormModule };
