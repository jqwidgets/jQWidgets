import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxInputComponent }        from '../../../../../jqwidgets-ts/angular_jqxinput';
import { jqxButtonComponent }       from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxToolBarComponent }      from '../../../../../jqwidgets-ts/angular_jqxtoolbar';
import { jqxComboBoxComponent }     from '../../../../../jqwidgets-ts/angular_jqxcombobox';
import { jqxDropDownListComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownlist';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxToolBarComponent, jqxButtonComponent, jqxDropDownListComponent, jqxComboBoxComponent, jqxInputComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

