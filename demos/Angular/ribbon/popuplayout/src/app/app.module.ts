import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxRibbonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxribbon';

@NgModule({
    declarations: [AppComponent, jqxRibbonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        