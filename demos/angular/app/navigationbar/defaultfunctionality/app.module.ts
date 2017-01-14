import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxNavigationBarComponent } from '../../../../../jqwidgets-ts/angular_jqxnavigationbar';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxNavigationBarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

