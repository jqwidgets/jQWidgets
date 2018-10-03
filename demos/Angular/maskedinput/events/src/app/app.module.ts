import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { jqxMaskedInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmaskedinput';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel';

@NgModule({
    declarations: [
        AppComponent, jqxMaskedInputComponent, jqxPanelComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
