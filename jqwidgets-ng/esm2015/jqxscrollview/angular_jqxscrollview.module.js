import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollview';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxScrollViewComponent } from './angular_jqxscrollview';
let jqxScrollViewModule = class jqxScrollViewModule {
};
jqxScrollViewModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxScrollViewComponent],
        exports: [jqxScrollViewComponent]
    })
], jqxScrollViewModule);
export { jqxScrollViewModule };
