import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxHeatMapModule } from 'jqwidgets-ng/jqxheatmap';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, jqxHeatMapModule, jqxDropDownListModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
