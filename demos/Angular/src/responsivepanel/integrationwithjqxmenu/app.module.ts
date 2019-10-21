import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxResponsivePanelModule } from 'jqwidgets-ng/jqxresponsivepanel';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxMenuModule } from 'jqwidgets-ng/jqxmenu';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxResponsivePanelModule,
        jqxButtonModule, jqxPanelModule, jqxMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


