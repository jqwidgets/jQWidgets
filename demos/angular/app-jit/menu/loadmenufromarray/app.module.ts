import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { MenuModule } from '../../modules/menu.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, MenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
