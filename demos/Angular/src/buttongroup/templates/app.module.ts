import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { jqxButtonGroupModule }   from 'jqwidgets-ng/jqxbuttongroup';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxButtonGroupModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }



