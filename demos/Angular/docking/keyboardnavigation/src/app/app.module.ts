import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDockingComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdocking';

@NgModule({
    declarations: [AppComponent, jqxDockingComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        