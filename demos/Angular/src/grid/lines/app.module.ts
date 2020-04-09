import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, jqxGridModule, 
		jqxCheckBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }