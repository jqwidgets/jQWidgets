import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxDateTimeInputComponent } from '../../../../../jqwidgets-ts/angular_jqxdatetimeinput';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxDateTimeInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

