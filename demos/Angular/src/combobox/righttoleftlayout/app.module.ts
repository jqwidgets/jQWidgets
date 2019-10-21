import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { jqxComboBoxModule }   from 'jqwidgets-ng/jqxcombobox';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxComboBoxModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




