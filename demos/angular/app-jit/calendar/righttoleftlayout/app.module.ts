import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { CalendarModule }   from '../../modules/calendar.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, CalendarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




