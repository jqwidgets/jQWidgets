import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollViewModule } from '../../modules/scrollview.module';
import { ButtonModule } from '../../modules/button.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, ScrollViewModule, ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
