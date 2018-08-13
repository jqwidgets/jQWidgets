import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollBarModule } from '../../modules/scrollbar.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, ScrollBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
