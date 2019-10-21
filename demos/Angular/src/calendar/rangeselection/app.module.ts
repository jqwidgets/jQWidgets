import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { jqxCalendarModule }   from 'jqwidgets-ng/jqxcalendar';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxCalendarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




