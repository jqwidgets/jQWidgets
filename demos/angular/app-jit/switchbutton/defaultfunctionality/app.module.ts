import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { SwitchButtonModule }   from '../../modules/switchbutton.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, SwitchButtonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




