import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxCalendarComponent } from 'components/angular_jqxcalendar';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxCalendarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

