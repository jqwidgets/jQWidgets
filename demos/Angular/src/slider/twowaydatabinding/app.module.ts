import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { jqxSliderModule }    from 'jqwidgets-ng/jqxslider';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, jqxSliderModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }