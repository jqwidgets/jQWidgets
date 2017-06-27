import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'; 
import { NumberInputModule } from '../../modules/numberinput.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, FormsModule, NumberInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
