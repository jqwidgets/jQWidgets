import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { ResponsivePanelModule } from '../../modules/responsivepanel.module';
import { PanelModule } from '../../modules/panel.module';
import { TreeModule } from '../../modules/tree.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, ResponsivePanelModule, PanelModule, TreeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


