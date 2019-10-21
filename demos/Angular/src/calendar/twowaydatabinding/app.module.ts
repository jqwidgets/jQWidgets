import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { jqxCalendarModule }   from 'jqwidgets-ng/jqxcalendar';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, jqxCalendarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




