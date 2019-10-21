import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxMenuModule, jqxCheckBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
