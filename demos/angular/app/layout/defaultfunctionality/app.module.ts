import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxLayoutComponent } from '../../../../../jqwidgets-ts/angular_jqxlayout';
import { jqxTreeComponent } from '../../../../../jqwidgets-ts/angular_jqxtree';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxLayoutComponent, jqxTreeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

