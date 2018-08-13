import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ListBoxModule } from '../../modules/listbox.module';
import { SplitterModule } from '../../modules/splitter.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, ListBoxModule, SplitterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
