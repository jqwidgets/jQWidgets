import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxRangeSelectorModule } from 'jqwidgets-ng/jqxrangeselector';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxRangeSelectorModule, jqxChartModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


