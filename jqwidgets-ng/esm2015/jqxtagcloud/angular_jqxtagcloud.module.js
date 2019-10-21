import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtagcloud';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxTagCloudComponent } from './angular_jqxtagcloud';
let jqxTagCloudModule = class jqxTagCloudModule {
};
jqxTagCloudModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxTagCloudComponent],
        exports: [jqxTagCloudComponent]
    })
], jqxTagCloudModule);
export { jqxTagCloudModule };
