import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { PasswordInputModule } from '../../modules/passwordinput.module';
import { ExpanderModule } from '../../modules/expander.module';
import { InputModule } from '../../modules/input.module';
import { ValidatorModule } from '../../modules/validator.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { DateTimeInputModule } from '../../modules/datetimeinput.module';
import { ButtonModule } from '../../modules/button.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, FormsModule, PasswordInputModule, ExpanderModule, InputModule, ValidatorModule, DropDownListModule, DateTimeInputModule, ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
