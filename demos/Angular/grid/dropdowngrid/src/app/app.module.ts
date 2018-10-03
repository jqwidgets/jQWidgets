import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@NgModule({
    declarations: [AppComponent, jqxDropDownButtonComponent, jqxGridComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        