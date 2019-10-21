import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxsplitter';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxSplitterComponent } from './angular_jqxsplitter';
var jqxSplitterModule = /** @class */ (function () {
    function jqxSplitterModule() {
    }
    jqxSplitterModule = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [jqxSplitterComponent],
            exports: [jqxSplitterComponent]
        })
    ], jqxSplitterModule);
    return jqxSplitterModule;
}());
export { jqxSplitterModule };
