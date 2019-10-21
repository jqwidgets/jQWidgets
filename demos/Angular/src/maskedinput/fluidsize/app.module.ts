import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { jqxMaskedInputModule } from 'jqwidgets-ng/jqxmaskedinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxMaskedInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
