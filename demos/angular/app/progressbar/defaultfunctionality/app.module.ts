import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxProgressBarComponent } from '../../../../../jqwidgets-ts/angular_jqxprogressbar';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxProgressBarComponent, jqxButtonComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

