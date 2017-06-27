import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { MenuModule } from '../../modules/menu.module';
import { CheckBoxModule } from '../../modules/checkbox.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, MenuModule, CheckBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
