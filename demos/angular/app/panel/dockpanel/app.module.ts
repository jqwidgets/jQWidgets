import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { DockPanelModule } from '../../modules/dockpanel.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, DockPanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
