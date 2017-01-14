import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDropDownButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownbutton';
import { jqxTreeComponent }           from '../../../../../jqwidgets-ts/angular_jqxtree';
import { jqxCheckBoxComponent }       from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDropDownButtonComponent, jqxTreeComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

