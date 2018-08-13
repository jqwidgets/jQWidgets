import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { RatingModule } from '../../modules/rating.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, RatingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


