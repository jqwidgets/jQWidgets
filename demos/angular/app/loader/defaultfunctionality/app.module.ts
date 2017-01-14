import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxLoaderComponent } from '../../../../../jqwidgets-ts/angular_jqxloader';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxLoaderComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

