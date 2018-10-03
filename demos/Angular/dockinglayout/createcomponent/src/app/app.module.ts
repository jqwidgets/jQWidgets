import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlayout';
import { jqxDockingLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdockinglayout';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';

@NgModule({
    declarations: [AppComponent, jqxChartComponent, jqxLayoutComponent, jqxDockingLayoutComponent, jqxMenuComponent, jqxTreeComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        