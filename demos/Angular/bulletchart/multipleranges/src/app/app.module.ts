import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxBulletChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbulletchart';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

@NgModule({
    declarations: [AppComponent, jqxBulletChartComponent, jqxChartComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        