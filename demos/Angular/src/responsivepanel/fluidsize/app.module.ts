import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxResponsivePanelModule } from 'jqwidgets-ng/jqxresponsivepanel';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxResponsivePanelModule, jqxPanelModule, jqxTreeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


