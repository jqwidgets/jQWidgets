import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxprogressbar';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxProgressBarComponent } from './angular_jqxprogressbar';
let jqxProgressBarModule = class jqxProgressBarModule {
};
jqxProgressBarModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxProgressBarComponent],
        exports: [jqxProgressBarComponent]
    })
], jqxProgressBarModule);
export { jqxProgressBarModule };
