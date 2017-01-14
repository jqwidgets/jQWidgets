import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxNotificationComponent } from '../../../../../jqwidgets-ts/angular_jqxnotification';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxNotificationComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

