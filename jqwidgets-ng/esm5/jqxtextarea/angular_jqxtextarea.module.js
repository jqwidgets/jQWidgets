import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxtextarea';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxTextAreaComponent } from './angular_jqxtextarea';
var jqxTextAreaModule = /** @class */ (function () {
    function jqxTextAreaModule() {
    }
    jqxTextAreaModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxTextAreaComponent],
            exports: [jqxTextAreaComponent]
        })
    ], jqxTextAreaModule);
    return jqxTextAreaModule;
}());
export { jqxTextAreaModule };
