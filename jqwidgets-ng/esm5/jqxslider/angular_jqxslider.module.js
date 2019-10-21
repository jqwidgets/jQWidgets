import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxslider';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxSliderComponent } from './angular_jqxslider';
var jqxSliderModule = /** @class */ (function () {
    function jqxSliderModule() {
    }
    jqxSliderModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FormsModule
            ],
            declarations: [jqxSliderComponent],
            exports: [jqxSliderComponent]
        })
    ], jqxSliderModule);
    return jqxSliderModule;
}());
export { jqxSliderModule };
