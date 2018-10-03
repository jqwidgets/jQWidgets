import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';
import { jqxDateTimeInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput';
import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput';
import { jqxMaskedInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmaskedinput';
import { jqxPasswordInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpasswordinput';
import { jqxValidatorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxCheckBoxComponent, jqxDateTimeInputComponent, jqxExpanderComponent, jqxInputComponent, jqxMaskedInputComponent, jqxPasswordInputComponent, jqxValidatorComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        