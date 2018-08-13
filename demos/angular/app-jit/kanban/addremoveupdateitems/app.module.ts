import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { KanbanModule } from '../../modules/kanban.module';
import { ButtonModule } from '../../modules/button.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, KanbanModule, ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }