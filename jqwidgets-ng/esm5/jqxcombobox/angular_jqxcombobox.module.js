import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxcombobox';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxComboBoxComponent } from './angular_jqxcombobox';
var jqxComboBoxModule = /** @class */ (function () {
    function jqxComboBoxModule() {
    }
    jqxComboBoxModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxComboBoxComponent],
            exports: [jqxComboBoxComponent]
        })
    ], jqxComboBoxModule);
    return jqxComboBoxModule;
}());
export { jqxComboBoxModule };
