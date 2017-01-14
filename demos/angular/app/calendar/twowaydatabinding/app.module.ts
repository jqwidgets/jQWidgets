import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';

import { jqxCalendarComponent } from '../../../../../jqwidgets-ts/angular_jqxcalendar';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxCalendarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

