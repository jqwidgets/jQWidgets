import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';

import { AppComponent } from './app.component';
import { FileUploadModule } from '../../modules/fileupload.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FileUploadModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }




