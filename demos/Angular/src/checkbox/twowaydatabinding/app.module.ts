import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, jqxCheckBoxModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

