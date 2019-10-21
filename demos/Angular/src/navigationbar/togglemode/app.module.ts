import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxNavigationBarModule } from 'jqwidgets-ng/jqxnavigationbar';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxNavigationBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
