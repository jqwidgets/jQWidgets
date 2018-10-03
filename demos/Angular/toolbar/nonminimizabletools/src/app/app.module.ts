import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxToolBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtoolbar';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';

@NgModule({
    declarations: [AppComponent, jqxToolBarComponent, jqxWindowComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        