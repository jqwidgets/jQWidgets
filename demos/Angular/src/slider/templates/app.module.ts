import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxSliderModule } from 'jqwidgets-ng/jqxslider';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxSliderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


