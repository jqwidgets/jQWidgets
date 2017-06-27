import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { NumberInputModule }    from '../../modules/numberinput.module';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, NumberInputModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }