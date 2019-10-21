import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxScrollBarModule } from 'jqwidgets-ng/jqxscrollbar';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxScrollBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
