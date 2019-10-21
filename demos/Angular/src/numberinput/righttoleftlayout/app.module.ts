import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'; 
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxNumberInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
