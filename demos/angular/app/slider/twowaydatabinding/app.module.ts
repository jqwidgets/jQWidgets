import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { SliderModule }    from '../../modules/slider.module';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, SliderModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }