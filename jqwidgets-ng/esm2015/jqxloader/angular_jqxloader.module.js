import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxloader';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxLoaderComponent } from './angular_jqxloader';
let jqxLoaderModule = class jqxLoaderModule {
};
jqxLoaderModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxLoaderComponent],
        exports: [jqxLoaderComponent]
    })
], jqxLoaderModule);
export { jqxLoaderModule };
