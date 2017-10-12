import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LayoutModule } from '../../modules/layout.module';
import { TreeModule } from '../../modules/tree.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, LayoutModule, TreeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }