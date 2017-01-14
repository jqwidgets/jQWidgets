import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxExpanderComponent }      from '../../../../../jqwidgets-ts/angular_jqxexpander';
import { jqxValidatorComponent }     from '../../../../../jqwidgets-ts/angular_jqxvalidator';
import { jqxInputComponent }         from '../../../../../jqwidgets-ts/angular_jqxinput';
import { jqxPasswordInputComponent } from '../../../../../jqwidgets-ts/angular_jqxpasswordinput';
import { jqxDateTimeInputComponent } from '../../../../../jqwidgets-ts/angular_jqxdatetimeinput';
import { jqxMaskedInputComponent }   from '../../../../../jqwidgets-ts/angular_jqxmaskedinput';
import { jqxButtonComponent }        from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxCheckBoxComponent }      from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, jqxExpanderComponent, jqxValidatorComponent, jqxInputComponent, jqxPasswordInputComponent,
                    jqxDateTimeInputComponent, jqxMaskedInputComponent, jqxButtonComponent, jqxCheckBoxComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

