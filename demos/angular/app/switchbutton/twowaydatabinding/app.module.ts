import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxSwitchButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxswitchbutton';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxSwitchButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

