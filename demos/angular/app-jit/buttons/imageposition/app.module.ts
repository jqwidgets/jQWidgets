import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { ButtonModule }   from '../../modules/button.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, ButtonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }



