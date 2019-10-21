import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxRepeatButtonComponent } from './angular_jqxrepeatbutton';
var jqxRepeatButtonModule = /** @class */ (function () {
    function jqxRepeatButtonModule() {
    }
    jqxRepeatButtonModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxRepeatButtonComponent],
            exports: [jqxRepeatButtonComponent]
        })
    ], jqxRepeatButtonModule);
    return jqxRepeatButtonModule;
}());
export { jqxRepeatButtonModule };
