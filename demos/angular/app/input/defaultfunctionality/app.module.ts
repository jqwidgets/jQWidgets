import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxInputComponent } from '../../../../../jqwidgets-ts/angular_jqxinput';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

