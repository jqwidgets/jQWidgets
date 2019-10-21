import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxformattedinput';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxFormattedInputComponent } from './angular_jqxformattedinput';
var jqxFormattedInputModule = /** @class */ (function () {
    function jqxFormattedInputModule() {
    }
    jqxFormattedInputModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxFormattedInputComponent],
            exports: [jqxFormattedInputComponent]
        })
    ], jqxFormattedInputModule);
    return jqxFormattedInputModule;
}());
export { jqxFormattedInputModule };
