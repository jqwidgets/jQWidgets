import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent }   from './app.component';
import { jqxGanttModule } from 'jqwidgets-ng/jqxgantt';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxGanttModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

