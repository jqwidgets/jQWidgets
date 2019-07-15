import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { jqxTimePickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtimepicker';
import { jqxFormComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxform';

@NgModule({
    declarations: [AppComponent, jqxTimePickerComponent, jqxButtonComponent, jqxFormComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        