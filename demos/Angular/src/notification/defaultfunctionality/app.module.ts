import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxNotificationModule } from 'jqwidgets-ng/jqxnotification';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxNotificationModule, jqxButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
