import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { jqxSwitchButtonModule }   from 'jqwidgets-ng/jqxswitchbutton';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, jqxSwitchButtonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




