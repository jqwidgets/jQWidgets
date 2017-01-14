import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxGridComponent } from '../../../../../jqwidgets-ts/angular_jqxgrid';
import { jqxPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxpanel';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxGridComponent, jqxPanelComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

