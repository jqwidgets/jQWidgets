import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxButtonGroupComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttongroup';
import { jqxRadioButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxradiobutton';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxButtonGroupComponent, jqxRadioButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
