import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { PasswordInputModule }    from '../../modules/passwordinput.module';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, PasswordInputModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }