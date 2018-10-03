import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxColorPickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcolorpicker';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';
import { jqxTagCloudComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtagcloud';

@NgModule({
    declarations: [AppComponent, jqxColorPickerComponent, jqxDropDownButtonComponent, jqxTagCloudComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        