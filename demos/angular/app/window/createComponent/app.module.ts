import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxWindowComponent } from '../../../../../jqwidgets-ts/angular_jqxwindow';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';
import { jqxTabsComponent } from '../../../../../jqwidgets-ts/angular_jqxtabs';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxWindowComponent, jqxButtonComponent, jqxCheckBoxComponent, jqxTabsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

