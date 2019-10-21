import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { jqxNavigationBarModule } from 'jqwidgets-ng/jqxnavigationbar';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxNavigationBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
