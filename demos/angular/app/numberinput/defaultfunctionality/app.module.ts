import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxNumberInputComponent } from '../../../../../jqwidgets-ts/angular_jqxnumberinput';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxNumberInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

