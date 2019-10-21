import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'; 
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxNumberInputModule, 
		jqxCheckBoxModule, jqxDropDownListModule, jqxRadioButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
