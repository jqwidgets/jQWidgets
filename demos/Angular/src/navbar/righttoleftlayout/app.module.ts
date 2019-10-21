import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxNavBarModule } from 'jqwidgets-ng/jqxnavbar';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxNavBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
