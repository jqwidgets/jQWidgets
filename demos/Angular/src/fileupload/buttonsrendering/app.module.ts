import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxFileUploadModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }




