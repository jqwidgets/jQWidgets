import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxnumberinput from '../../jqwidgets/jqxnumberinput';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxNumberInputComponent } from './angular_jqxnumberinput';
var jqxNumberInputModule = /** @class */ (function () {
    function jqxNumberInputModule() {
    }
    jqxNumberInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxNumberInputComponent],
                    exports: [jqxNumberInputComponent]
                },] }
    ];
    return jqxNumberInputModule;
}());
export { jqxNumberInputModule };
