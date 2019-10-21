import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxtimepicker';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxTimePickerComponent } from './angular_jqxtimepicker';
var jqxTimePickerModule = /** @class */ (function () {
    function jqxTimePickerModule() {
    }
    jqxTimePickerModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxTimePickerComponent],
            exports: [jqxTimePickerComponent]
        })
    ], jqxTimePickerModule);
    return jqxTimePickerModule;
}());
export { jqxTimePickerModule };
