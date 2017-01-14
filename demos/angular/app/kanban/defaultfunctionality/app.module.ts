import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxSplitterComponent } from '../../../../../jqwidgets-ts/angular_jqxsplitter';
import { jqxKanbanComponent } from '../../../../../jqwidgets-ts/angular_jqxkanban';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxSplitterComponent, jqxKanbanComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

