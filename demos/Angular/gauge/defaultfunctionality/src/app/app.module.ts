import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgauge';
import { jqxLinearGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlineargauge';

@NgModule({
    declarations: [AppComponent, jqxGaugeComponent, jqxLinearGaugeComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        