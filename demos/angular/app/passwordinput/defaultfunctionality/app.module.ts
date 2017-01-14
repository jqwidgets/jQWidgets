import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxPasswordInputComponent } from '../../../../../jqwidgets-ts/angular_jqxpasswordinput';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxInputComponent } from '../../../../../jqwidgets-ts/angular_jqxinput';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxPasswordInputComponent, jqxButtonComponent, jqxInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule{ }

