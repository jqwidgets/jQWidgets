import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { jqxButtonModule }   from 'jqwidgets-ng/jqxbuttons';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxButtonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }



