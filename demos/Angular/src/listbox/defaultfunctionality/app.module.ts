import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxListBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
