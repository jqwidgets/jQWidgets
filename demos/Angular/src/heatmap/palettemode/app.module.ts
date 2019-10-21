import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxHeatMapModule } from 'jqwidgets-ng/jqxheatmap';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, jqxHeatMapModule, jqxRadioButtonModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
