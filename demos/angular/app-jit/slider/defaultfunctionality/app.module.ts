import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderModule } from '../../modules/slider.module';
import { CheckBoxModule } from '../../modules/checkbox.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, SliderModule, CheckBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


