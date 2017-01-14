import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxFileUploadComponent } from '../../../../../jqwidgets-ts/angular_jqxfileupload';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxFileUploadComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

