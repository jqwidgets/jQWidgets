import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxGridComponent } from '../../../../../jqwidgets-ts/angular_jqxgrid';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxpanel';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxGridComponent, jqxButtonComponent, jqxPanelComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

