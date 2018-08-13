import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { LoaderModule } from '../../modules/loader.module';
import { ButtonModule } from '../../modules/button.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, LoaderModule, ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
