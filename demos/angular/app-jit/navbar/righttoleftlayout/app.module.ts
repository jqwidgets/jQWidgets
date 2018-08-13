import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { NavBarModule } from '../../modules/navbar.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, NavBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
