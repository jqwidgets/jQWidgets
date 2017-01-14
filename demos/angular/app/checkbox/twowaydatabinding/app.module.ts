import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

