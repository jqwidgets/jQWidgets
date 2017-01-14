import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxDockPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxdockpanel';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxDockPanelComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

