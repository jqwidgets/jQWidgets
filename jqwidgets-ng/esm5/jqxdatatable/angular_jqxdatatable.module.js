import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxnumberinput';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxdatatable';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxDataTableComponent } from './angular_jqxdatatable';
var jqxDataTableModule = /** @class */ (function () {
    function jqxDataTableModule() {
    }
    jqxDataTableModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxDataTableComponent],
            exports: [jqxDataTableComponent]
        })
    ], jqxDataTableModule);
    return jqxDataTableModule;
}());
export { jqxDataTableModule };
