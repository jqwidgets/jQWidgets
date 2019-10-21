import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { jqxSplitterModule } from 'jqwidgets-ng/jqxsplitter';
import { jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, HttpClientModule, 
		jqxSplitterModule, jqxExpanderModule, jqxTreeModule, jqxPanelModule, jqxListBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


