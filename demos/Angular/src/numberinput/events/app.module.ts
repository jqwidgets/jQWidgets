import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'; 
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

@NgModule({
    declarations: [
        AppComponent, 
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxNumberInputModule, jqxPanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
