import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxColorPickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcolorpicker';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';
import { jqxScrollViewComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscrollview';

@NgModule({
    declarations: [AppComponent, jqxColorPickerComponent, jqxDropDownButtonComponent, jqxScrollViewComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        