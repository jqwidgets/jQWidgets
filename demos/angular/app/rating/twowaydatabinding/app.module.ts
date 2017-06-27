import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { RatingModule }    from '../../modules/rating.module';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, RatingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }