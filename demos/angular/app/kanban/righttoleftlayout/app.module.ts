import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { KanbanModule } from '../../modules/kanban.module';

@NgModule({
    imports: [BrowserModule, CommonModule, KanbanModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




