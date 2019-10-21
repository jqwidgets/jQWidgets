import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxrating';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxRatingComponent } from './angular_jqxrating';
let jqxRatingModule = class jqxRatingModule {
};
jqxRatingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxRatingComponent],
        exports: [jqxRatingComponent]
    })
], jqxRatingModule);
export { jqxRatingModule };
