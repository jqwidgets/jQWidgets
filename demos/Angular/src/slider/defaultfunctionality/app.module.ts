import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxSliderModule } from 'jqwidgets-ng/jqxslider';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxSliderModule, jqxCheckBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


