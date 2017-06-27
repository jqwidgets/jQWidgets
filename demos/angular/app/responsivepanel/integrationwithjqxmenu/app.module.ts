import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ResponsivePanelModule } from '../../modules/responsivepanel.module';
import { ButtonModule } from '../../modules/button.module';
import { MenuModule } from '../../modules/menu.module';
import { PanelModule } from '../../modules/panel.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, ResponsivePanelModule,
        ButtonModule, PanelModule, MenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


