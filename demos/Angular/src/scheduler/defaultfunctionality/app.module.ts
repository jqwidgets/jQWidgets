import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, jqxSchedulerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


