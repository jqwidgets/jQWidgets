import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxMaskedInputComponent } from '../../../../../jqwidgets-ts/angular_jqxmaskedinput';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxMaskedInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

