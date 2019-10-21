import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { jqxPasswordInputModule }    from 'jqwidgets-ng/jqxpasswordinput';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, jqxPasswordInputModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }