import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxResponsivePanelModule } from 'jqwidgets-ng/jqxresponsivepanel';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxResponsivePanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


