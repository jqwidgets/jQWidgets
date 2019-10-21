import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxListMenuModule } from 'jqwidgets-ng/jqxlistmenu';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxListMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
