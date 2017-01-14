import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxTreeMapComponent } from '../../../../../jqwidgets-ts/angular_jqxtreemap';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxTreeMapComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

