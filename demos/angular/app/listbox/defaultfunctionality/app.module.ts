import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxListBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxlistbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxListBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

