import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxScrollBarModule } from 'jqwidgets-ng/jqxscrollbar';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxScrollBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
