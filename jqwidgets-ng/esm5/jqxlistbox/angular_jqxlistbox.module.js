import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdragdrop';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxListBoxComponent } from './angular_jqxlistbox';
var jqxListBoxModule = /** @class */ (function () {
    function jqxListBoxModule() {
    }
    jqxListBoxModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxListBoxComponent],
            exports: [jqxListBoxComponent]
        })
    ], jqxListBoxModule);
    return jqxListBoxModule;
}());
export { jqxListBoxModule };
