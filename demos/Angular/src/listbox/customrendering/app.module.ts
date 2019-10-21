import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
import { jqxSplitterModule } from 'jqwidgets-ng/jqxsplitter';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxListBoxModule, jqxSplitterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
