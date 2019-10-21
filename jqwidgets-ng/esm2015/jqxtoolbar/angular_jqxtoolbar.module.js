import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxinput';
import '../jqwidgets/jqxtoolbar';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { jqxToolBarComponent } from './angular_jqxtoolbar';
let jqxToolBarModule = class jqxToolBarModule {
};
jqxToolBarModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [jqxToolBarComponent],
        exports: [jqxToolBarComponent]
    })
], jqxToolBarModule);
export { jqxToolBarModule };
