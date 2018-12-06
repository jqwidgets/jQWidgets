import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxCheckBoxComponent } from './angular_jqxcheckbox';
var jqxCheckBoxModule = /** @class */ (function () {
    function jqxCheckBoxModule() {
    }
    jqxCheckBoxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxCheckBoxComponent],
                    exports: [jqxCheckBoxComponent]
                },] }
    ];
    return jqxCheckBoxModule;
}());
export { jqxCheckBoxModule };
