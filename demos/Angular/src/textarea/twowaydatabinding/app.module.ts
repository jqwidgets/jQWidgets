import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { jqxTextAreaModule }    from 'jqwidgets-ng/jqxtextarea';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, jqxTextAreaModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }