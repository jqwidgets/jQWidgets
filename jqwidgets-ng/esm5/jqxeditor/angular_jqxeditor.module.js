import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxdropdownbutton';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxeditor';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxcolorpicker';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxEditorComponent } from './angular_jqxeditor';
var jqxEditorModule = /** @class */ (function () {
    function jqxEditorModule() {
    }
    jqxEditorModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxEditorComponent],
            exports: [jqxEditorComponent]
        })
    ], jqxEditorModule);
    return jqxEditorModule;
}());
export { jqxEditorModule };
