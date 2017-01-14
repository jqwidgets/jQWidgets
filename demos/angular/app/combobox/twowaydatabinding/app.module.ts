import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxComboBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcombobox';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxComboBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

