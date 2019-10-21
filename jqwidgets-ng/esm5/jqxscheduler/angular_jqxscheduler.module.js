import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxdate';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxradiobutton';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxcolorpicker';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxnumberinput';
import '../jqwidgets/jqxinput';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxcalendar';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxscheduler';
import '../jqwidgets/jqxscheduler.api';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxSchedulerComponent } from './angular_jqxscheduler';
var jqxSchedulerModule = /** @class */ (function () {
    function jqxSchedulerModule() {
    }
    jqxSchedulerModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxSchedulerComponent],
            exports: [jqxSchedulerComponent]
        })
    ], jqxSchedulerModule);
    return jqxSchedulerModule;
}());
export { jqxSchedulerModule };
