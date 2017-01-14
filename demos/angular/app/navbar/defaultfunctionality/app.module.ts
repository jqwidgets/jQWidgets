import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxNavBarComponent } from '../../../../../jqwidgets-ts/angular_jqxnavbar';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxNavBarComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

