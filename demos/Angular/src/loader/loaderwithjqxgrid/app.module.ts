import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxLoaderModule } from 'jqwidgets-ng/jqxloader';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxLoaderModule, jqxGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
