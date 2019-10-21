import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxsortable';
import '../jqwidgets/jqxsplitter';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxkanban';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxKanbanComponent } from './angular_jqxkanban';
var jqxKanbanModule = /** @class */ (function () {
    function jqxKanbanModule() {
    }
    jqxKanbanModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxKanbanComponent],
            exports: [jqxKanbanComponent]
        })
    ], jqxKanbanModule);
    return jqxKanbanModule;
}());
export { jqxKanbanModule };
