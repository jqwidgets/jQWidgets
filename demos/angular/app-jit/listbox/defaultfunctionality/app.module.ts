import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListBoxModule } from '../../modules/listbox.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, ListBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
