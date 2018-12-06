import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxpasswordinput from '../../jqwidgets/jqxpasswordinput';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxPasswordInputComponent } from './angular_jqxpasswordinput';
var jqxPasswordInputModule = /** @class */ (function () {
    function jqxPasswordInputModule() {
    }
    jqxPasswordInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxPasswordInputComponent],
                    exports: [jqxPasswordInputComponent]
                },] }
    ];
    return jqxPasswordInputModule;
}());
export { jqxPasswordInputModule };
