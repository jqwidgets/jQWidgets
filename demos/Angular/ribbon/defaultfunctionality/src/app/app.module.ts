import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { jqxColorPickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcolorpicker';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxRibbonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxribbon';
import { jqxToggleButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtogglebutton';
import { jqxTooltipComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtooltip';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxColorPickerComponent, jqxDropDownButtonComponent, jqxDropDownListComponent, jqxGridComponent, jqxRibbonComponent, jqxToggleButtonComponent, jqxTooltipComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        