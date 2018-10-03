import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxFileUploadComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxfileupload';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel';

@NgModule({
    declarations: [AppComponent, jqxFileUploadComponent, jqxPanelComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        