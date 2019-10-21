import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { jqxNavBarModule } from 'jqwidgets-ng/jqxnavbar';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxNavBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
