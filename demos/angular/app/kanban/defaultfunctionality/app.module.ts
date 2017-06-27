import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { KanbanModule } from '../../modules/kanban.module';
import { SplitterModule } from '../../modules/splitter.module';

@NgModule({
    imports: [BrowserModule, CommonModule, KanbanModule, SplitterModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




