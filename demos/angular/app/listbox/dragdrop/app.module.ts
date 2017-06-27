import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ListBoxModule } from '../../modules/listbox.module';
import { TextAreaModule } from '../../modules/textarea.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, ListBoxModule, TextAreaModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
