import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SwitchButtonModule }   from '../../modules/switchbutton.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, SwitchButtonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }




