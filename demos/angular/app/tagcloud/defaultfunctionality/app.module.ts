import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxTagCloudComponent } from '../../../../../jqwidgets-ts/angular_jqxtagcloud';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxTagCloudComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

