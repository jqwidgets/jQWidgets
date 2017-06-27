import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KnobModule } from '../../modules/knob.module';
import { InputModule } from '../../modules/input.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, KnobModule, InputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }