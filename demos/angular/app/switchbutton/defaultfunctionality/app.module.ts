import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxSwitchButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxswitchbutton';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxSwitchButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

