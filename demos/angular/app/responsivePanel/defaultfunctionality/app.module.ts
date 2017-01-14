import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxTreeComponent } from '../../../../../jqwidgets-ts/angular_jqxtree';
import { jqxPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxpanel';
import { jqxResponsivePanelComponent } from '../../../../../jqwidgets-ts/angular_jqxresponsivepanel';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxTreeComponent, jqxPanelComponent, jqxResponsivePanelComponent, jqxButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

