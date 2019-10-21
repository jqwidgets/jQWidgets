import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { jqxRatingModule } from 'jqwidgets-ng/jqxrating';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxRatingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


