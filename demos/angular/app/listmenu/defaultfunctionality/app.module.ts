import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxListMenuComponent } from '../../../../../jqwidgets-ts/angular_jqxlistmenu';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxListMenuComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

