import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { jqxNumberInputModule }    from 'jqwidgets-ng/jqxnumberinput';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, jqxNumberInputModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }