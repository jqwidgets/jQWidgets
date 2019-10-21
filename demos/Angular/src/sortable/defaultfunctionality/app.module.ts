import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxSortableModule } from 'jqwidgets-ng/jqxsortable';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxSortableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


