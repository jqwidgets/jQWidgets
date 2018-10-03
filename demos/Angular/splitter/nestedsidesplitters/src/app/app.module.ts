import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxSplitterComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxsplitter';

@NgModule({
    declarations: [AppComponent, jqxSplitterComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        