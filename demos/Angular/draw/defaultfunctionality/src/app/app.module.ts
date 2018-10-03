import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDrawComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdraw';

@NgModule({
    declarations: [AppComponent, jqxDrawComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        