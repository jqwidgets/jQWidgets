import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxHeatMapModule } from 'jqwidgets-ng/jqxheatmap';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, jqxHeatMapModule, jqxCheckBoxModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
