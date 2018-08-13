import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { PanelModule } from '../../modules/panel.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, PanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
