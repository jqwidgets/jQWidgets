import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxnumberinput';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxNumberInputComponent } from './angular_jqxnumberinput';
var jqxNumberInputModule = /** @class */ (function () {
    function jqxNumberInputModule() {
    }
    jqxNumberInputModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxNumberInputComponent],
            exports: [jqxNumberInputComponent]
        })
    ], jqxNumberInputModule);
    return jqxNumberInputModule;
}());
export { jqxNumberInputModule };
