import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxDockPanelModule } from 'jqwidgets-ng/jqxdockpanel';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxDockPanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
