import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxNotificationModule } from 'jqwidgets-ng/jqxnotification';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxNotificationModule, jqxButtonModule, 
		jqxCheckBoxModule, jqxDropDownListModule, jqxExpanderModule, jqxRadioButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
