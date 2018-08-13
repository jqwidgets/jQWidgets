import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { NavigationBarModule } from '../../modules/navigationbar.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, NavigationBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
