import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { jqxInputModule }    from 'jqwidgets-ng/jqxinput';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, jqxInputModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }