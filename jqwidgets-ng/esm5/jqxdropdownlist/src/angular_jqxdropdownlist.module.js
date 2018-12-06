import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxDropDownListComponent } from './angular_jqxdropdownlist';
var jqxDropDownListModule = /** @class */ (function () {
    function jqxDropDownListModule() {
    }
    jqxDropDownListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxDropDownListComponent],
                    exports: [jqxDropDownListComponent]
                },] }
    ];
    return jqxDropDownListModule;
}());
export { jqxDropDownListModule };
