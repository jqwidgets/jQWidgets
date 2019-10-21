import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxmaskedinput';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxMaskedInputComponent } from './angular_jqxmaskedinput';
var jqxMaskedInputModule = /** @class */ (function () {
    function jqxMaskedInputModule() {
    }
    jqxMaskedInputModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxMaskedInputComponent],
            exports: [jqxMaskedInputComponent]
        })
    ], jqxMaskedInputModule);
    return jqxMaskedInputModule;
}());
export { jqxMaskedInputModule };
