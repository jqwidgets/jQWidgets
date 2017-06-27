import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { NotificationModule } from '../../modules/notification.module';
import { ButtonModule } from '../../modules/button.module';
import { CheckBoxModule } from '../../modules/checkbox.module';
import { DropDownListModule } from '../../modules/dropdownlist.module';
import { ExpanderModule } from '../../modules/expander.module';
import { RadioButtonModule } from '../../modules/radiobutton.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, NotificationModule, ButtonModule, 
		CheckBoxModule, DropDownListModule, ExpanderModule, RadioButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
