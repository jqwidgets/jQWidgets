import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxProgressBarModule } from 'jqwidgets-ng/jqxprogressbar';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule,jqxProgressBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


