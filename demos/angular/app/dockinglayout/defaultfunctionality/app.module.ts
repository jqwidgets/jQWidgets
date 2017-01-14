import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDockingLayoutComponent } from '../../../../../jqwidgets-ts/angular_jqxdockinglayout';
import { jqxTreeComponent }          from '../../../../../jqwidgets-ts/angular_jqxtree';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDockingLayoutComponent, jqxTreeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

