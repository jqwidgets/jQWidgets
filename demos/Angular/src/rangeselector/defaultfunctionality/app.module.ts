import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { jqxRangeSelectorModule } from 'jqwidgets-ng/jqxrangeselector';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxRangeSelectorModule, jqxButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


