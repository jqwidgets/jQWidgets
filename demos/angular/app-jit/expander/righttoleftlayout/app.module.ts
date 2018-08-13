import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ExpanderModule }   from '../../modules/expander.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, ExpanderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }




