import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban';
import { jqxSplitterModule } from 'jqwidgets-ng/jqxsplitter';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxKanbanModule, jqxSplitterModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




