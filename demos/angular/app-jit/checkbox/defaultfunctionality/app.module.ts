import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent }   from './app.component';
import { CheckBoxModule } from '../../modules/checkbox.module';

@NgModule({
    imports: [BrowserModule, CommonModule, CheckBoxModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

