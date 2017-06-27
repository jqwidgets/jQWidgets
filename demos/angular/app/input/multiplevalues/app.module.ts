import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { InputModule }    from '../../modules/input.module';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, InputModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }