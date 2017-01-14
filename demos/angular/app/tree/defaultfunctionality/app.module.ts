import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxExpanderComponent } from '../../../../../jqwidgets-ts/angular_jqxexpander';
import { jqxTreeComponent }     from '../../../../../jqwidgets-ts/angular_jqxtree';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxExpanderComponent, jqxTreeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

