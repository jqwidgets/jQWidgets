import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { jqxRatingModule }    from 'jqwidgets-ng/jqxrating';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, jqxRatingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }