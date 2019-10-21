import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxRibbonModule } from 'jqwidgets-ng/jqxribbon';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxRibbonModule, jqxGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


