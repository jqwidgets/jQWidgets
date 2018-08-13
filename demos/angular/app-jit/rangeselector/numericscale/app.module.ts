import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { RangeSelectorModule } from '../../modules/rangeselector.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, RangeSelectorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


