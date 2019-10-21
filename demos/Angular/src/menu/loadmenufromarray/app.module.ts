import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
