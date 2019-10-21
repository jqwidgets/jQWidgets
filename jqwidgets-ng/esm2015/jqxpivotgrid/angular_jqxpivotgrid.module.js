import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxdragdrop';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxinput';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxpivot';
import '../jqwidgets/jqxpivotgrid';
import '../jqwidgets/jqxpivotdesigner';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxPivotGridComponent } from './angular_jqxpivotgrid';
let jqxPivotGridModule = class jqxPivotGridModule {
};
jqxPivotGridModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxPivotGridComponent],
        exports: [jqxPivotGridComponent]
    })
], jqxPivotGridModule);
export { jqxPivotGridModule };
