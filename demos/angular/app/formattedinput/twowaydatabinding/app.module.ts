import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxFormattedInputComponent } from '../../../../../jqwidgets-ts/angular_jqxformattedinput';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxFormattedInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

