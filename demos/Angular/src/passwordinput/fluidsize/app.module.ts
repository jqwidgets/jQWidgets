import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { jqxPasswordInputModule } from 'jqwidgets-ng/jqxpasswordinput';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxPasswordInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
