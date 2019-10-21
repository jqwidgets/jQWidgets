import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxTimePickerModule } from 'jqwidgets-ng/jqxtimepicker';
import { jqxFormModule } from 'jqwidgets-ng/jqxform';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, jqxButtonModule, jqxTimePickerModule, jqxFormModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        