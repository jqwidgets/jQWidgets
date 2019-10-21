import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxnotification';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxNotificationComponent } from './angular_jqxnotification';
let jqxNotificationModule = class jqxNotificationModule {
};
jqxNotificationModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxNotificationComponent],
        exports: [jqxNotificationComponent]
    })
], jqxNotificationModule);
export { jqxNotificationModule };
