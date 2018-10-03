import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxRangeSelectorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxrangeselector';

@NgModule({
    declarations: [AppComponent, jqxGridComponent, jqxRangeSelectorComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        