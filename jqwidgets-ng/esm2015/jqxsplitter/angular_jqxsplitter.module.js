import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxsplitter';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxSplitterComponent } from './angular_jqxsplitter';
let jqxSplitterModule = class jqxSplitterModule {
};
jqxSplitterModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxSplitterComponent],
        exports: [jqxSplitterComponent]
    })
], jqxSplitterModule);
export { jqxSplitterModule };
