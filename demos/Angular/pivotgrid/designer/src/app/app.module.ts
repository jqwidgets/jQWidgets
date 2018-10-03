import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxPivotDesignerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotdesigner';
import { jqxPivotGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotgrid';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@NgModule({
    declarations: [AppComponent, jqxPivotDesignerComponent, jqxPivotGridComponent, jqxGridComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        