import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { ButtonGroupModule }   from '../../modules/buttongroup.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, ButtonGroupModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }



