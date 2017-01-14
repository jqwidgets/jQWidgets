import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxPasswordInputComponent } from '../../../../../jqwidgets-ts/angular_jqxpasswordinput';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxPasswordInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule{ }

