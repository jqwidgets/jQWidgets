import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgauge';
import { jqxSliderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxslider';

@NgModule({
    declarations: [AppComponent, jqxGaugeComponent, jqxSliderComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        