import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban';

@NgModule({
    imports: [BrowserModule, CommonModule, jqxKanbanModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




