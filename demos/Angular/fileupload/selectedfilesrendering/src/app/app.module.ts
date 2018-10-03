import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxFileUploadComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxfileupload';

@NgModule({
    declarations: [AppComponent, jqxFileUploadComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        