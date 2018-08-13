import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { RibbonModule } from '../../modules/ribbon.module';
import { PanelModule } from '../../modules/panel.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, RibbonModule, PanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


