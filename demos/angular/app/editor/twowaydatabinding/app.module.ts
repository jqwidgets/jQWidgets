import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxEditorComponent } from '../../../../../jqwidgets-ts/angular_jqxeditor';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxEditorComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

