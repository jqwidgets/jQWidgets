import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { FormModule } from '../../modules/form.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
