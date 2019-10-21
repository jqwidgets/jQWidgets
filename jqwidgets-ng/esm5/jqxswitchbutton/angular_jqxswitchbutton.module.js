import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxswitchbutton';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxSwitchButtonComponent } from './angular_jqxswitchbutton';
var jqxSwitchButtonModule = /** @class */ (function () {
    function jqxSwitchButtonModule() {
    }
    jqxSwitchButtonModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxSwitchButtonComponent],
            exports: [jqxSwitchButtonComponent]
        })
    ], jqxSwitchButtonModule);
    return jqxSwitchButtonModule;
}());
export { jqxSwitchButtonModule };
