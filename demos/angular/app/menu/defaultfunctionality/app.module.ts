import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { jqxMenuComponent } from '../../../../../jqwidgets-ts/angular_jqxmenu';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, jqxMenuComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

