import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'; 
import { NumberInputModule } from '../../modules/numberinput.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, NumberInputModule, 
		CheckBoxModule, DropDownListModule, RadioButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
