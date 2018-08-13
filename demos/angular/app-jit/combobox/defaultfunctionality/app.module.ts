import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { ComboBoxModule }   from '../../modules/combobox.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, ComboBoxModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




