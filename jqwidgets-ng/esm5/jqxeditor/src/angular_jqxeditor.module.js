import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxdropdownbutton from '../../jqwidgets/jqxdropdownbutton';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
import * as jqxeditor from '../../jqwidgets/jqxeditor';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxcolorpicker from '../../jqwidgets/jqxcolorpicker';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxEditorComponent } from './angular_jqxeditor';
var jqxEditorModule = /** @class */ (function () {
    function jqxEditorModule() {
    }
    jqxEditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxEditorComponent],
                    exports: [jqxEditorComponent]
                },] }
    ];
    return jqxEditorModule;
}());
export { jqxEditorModule };
