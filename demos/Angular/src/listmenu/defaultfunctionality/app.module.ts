import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { jqxListMenuModule } from 'jqwidgets-ng/jqxlistmenu';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxListMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
