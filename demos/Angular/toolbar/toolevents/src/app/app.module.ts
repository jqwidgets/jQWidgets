import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxColorPickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcolorpicker';
import { jqxToolBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtoolbar';

@NgModule({
    declarations: [AppComponent, jqxColorPickerComponent, jqxToolBarComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        