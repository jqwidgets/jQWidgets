import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxNotificationModule } from 'jqwidgets-ng/jqxnotification';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxNotificationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
