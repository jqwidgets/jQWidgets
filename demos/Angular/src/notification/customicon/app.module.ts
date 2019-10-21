import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxNotificationModule } from 'jqwidgets-ng/jqxnotification';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxNotificationModule, jqxButtonModule, jqxInputModule, jqxTextAreaModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
