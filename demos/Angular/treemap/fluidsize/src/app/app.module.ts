import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxTreeMapComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreemap';

@NgModule({
    declarations: [AppComponent, jqxTreeMapComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        