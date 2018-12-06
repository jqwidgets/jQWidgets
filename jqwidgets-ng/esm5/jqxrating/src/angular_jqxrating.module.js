import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxrating from '../../jqwidgets/jqxrating';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxRatingComponent } from './angular_jqxrating';
var jqxRatingModule = /** @class */ (function () {
    function jqxRatingModule() {
    }
    jqxRatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxRatingComponent],
                    exports: [jqxRatingComponent]
                },] }
    ];
    return jqxRatingModule;
}());
export { jqxRatingModule };
