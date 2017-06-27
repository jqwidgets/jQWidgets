import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { ListMenuModule } from '../../modules/listmenu.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, ListMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
