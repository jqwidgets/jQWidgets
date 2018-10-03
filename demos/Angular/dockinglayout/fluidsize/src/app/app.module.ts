import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlayout';
import { jqxDockingLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdockinglayout';

@NgModule({
    declarations: [AppComponent, jqxLayoutComponent, jqxDockingLayoutComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        