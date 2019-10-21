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
import '../jqwidgets/jqxtreegrid';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxTreeGridComponent } from './angular_jqxtreegrid';
let jqxTreeGridModule = class jqxTreeGridModule {
};
jqxTreeGridModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxTreeGridComponent],
        exports: [jqxTreeGridComponent]
    })
], jqxTreeGridModule);
export { jqxTreeGridModule };
