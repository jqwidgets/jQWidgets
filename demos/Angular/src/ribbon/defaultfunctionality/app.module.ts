import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { jqxRibbonModule } from 'jqwidgets-ng/jqxribbon';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxTooltipModule } from 'jqwidgets-ng/jqxtooltip';
import { jqxDropDownButtonModule } from 'jqwidgets-ng/jqxdropdownbutton';
import { jqxColorPickerModule } from 'jqwidgets-ng/jqxcolorpicker';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxToggleButtonModule } from 'jqwidgets-ng/jqxtogglebutton';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxRibbonModule, jqxGridModule, jqxButtonModule, jqxTooltipModule, jqxDropDownButtonModule, jqxColorPickerModule, jqxDropDownListModule, jqxToggleButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


