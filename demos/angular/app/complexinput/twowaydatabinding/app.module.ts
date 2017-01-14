import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxComplexInputComponent } from '../../../../../jqwidgets-ts/angular_jqxcomplexinput';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxComplexInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

