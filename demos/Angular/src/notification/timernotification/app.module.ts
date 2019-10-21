import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { jqxNotificationModule } from 'jqwidgets-ng/jqxnotification';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, 
		jqxNotificationModule, jqxButtonModule, jqxInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
