import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'; 
import { NumberInputModule } from '../../modules/numberinput.module';
import { PanelModule } from '../../modules/panel.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, NumberInputModule, PanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
