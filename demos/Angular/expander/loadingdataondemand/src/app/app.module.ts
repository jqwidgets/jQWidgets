import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander';

@NgModule({
    declarations: [AppComponent, jqxExpanderComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        