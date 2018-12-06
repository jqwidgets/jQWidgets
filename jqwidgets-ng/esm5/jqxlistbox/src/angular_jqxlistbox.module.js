import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdragdrop from '../../jqwidgets/jqxdragdrop';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxListBoxComponent } from './angular_jqxlistbox';
var jqxListBoxModule = /** @class */ (function () {
    function jqxListBoxModule() {
    }
    jqxListBoxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxListBoxComponent],
                    exports: [jqxListBoxComponent]
                },] }
    ];
    return jqxListBoxModule;
}());
export { jqxListBoxModule };
