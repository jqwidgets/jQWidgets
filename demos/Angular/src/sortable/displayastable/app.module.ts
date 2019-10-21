import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxSortableModule } from 'jqwidgets-ng/jqxsortable';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxSortableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


