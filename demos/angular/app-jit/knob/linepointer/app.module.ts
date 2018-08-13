import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { KnobModule } from '../../modules/knob.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, KnobModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }