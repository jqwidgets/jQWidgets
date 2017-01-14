import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxTextAreaComponent } from '../../../../../jqwidgets-ts/angular_jqxtextarea';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxTextAreaComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

