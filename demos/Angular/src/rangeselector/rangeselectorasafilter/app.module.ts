import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxRangeSelectorModule } from 'jqwidgets-ng/jqxrangeselector';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxRangeSelectorModule, jqxGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


