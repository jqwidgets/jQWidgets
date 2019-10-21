import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxRibbonModule } from 'jqwidgets-ng/jqxribbon';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxRibbonModule, jqxCheckBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


