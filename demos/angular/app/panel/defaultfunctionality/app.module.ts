import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxPanelComponent } from '../../../../../jqwidgets-ts/angular_jqxpanel';;

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxPanelComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

