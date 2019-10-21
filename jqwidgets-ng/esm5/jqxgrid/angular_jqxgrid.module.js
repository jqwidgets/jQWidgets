import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxbuttongroup';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxnumberinput';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxcalendar';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxgrid';
import '../jqwidgets/jqxgrid.edit';
import '../jqwidgets/jqxgrid.pager';
import '../jqwidgets/jqxgrid.selection';
import '../jqwidgets/jqxgrid.filter';
import '../jqwidgets/jqxgrid.sort';
import '../jqwidgets/jqxgrid.storage';
import '../jqwidgets/jqxgrid.grouping';
import '../jqwidgets/jqxgrid.export';
import '../jqwidgets/jqxgrid.columnsresize';
import '../jqwidgets/jqxgrid.columnsreorder';
import '../jqwidgets/jqxgrid.aggregates';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxGridComponent } from './angular_jqxgrid';
var jqxGridModule = /** @class */ (function () {
    function jqxGridModule() {
    }
    jqxGridModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxGridComponent],
            exports: [jqxGridComponent]
        })
    ], jqxGridModule);
    return jqxGridModule;
}());
export { jqxGridModule };
