import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { NavigationBarModule } from '../../modules/navigationbar.module';
import { PanelModule } from '../../modules/panel.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, NavigationBarModule, PanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
