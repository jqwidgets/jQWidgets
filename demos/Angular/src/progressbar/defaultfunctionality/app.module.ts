import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { jqxProgressBarModule } from 'jqwidgets-ng/jqxprogressbar';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, FormsModule, jqxProgressBarModule, jqxButtonModule, jqxCheckBoxModule, jqxInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


