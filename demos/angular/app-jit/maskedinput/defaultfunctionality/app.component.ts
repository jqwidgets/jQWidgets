import { Component, ViewChild } from '@angular/core';

import { jqxMaskedInputComponent } from '../../../jqwidgets-ts/angular_jqxmaskedinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('numericInput') myNumericInput: jqxMaskedInputComponent;
    @ViewChild('zipCodeInput') myZipCodeInput: jqxMaskedInputComponent;
    @ViewChild('ssnInput') mySsnInput: jqxMaskedInputComponent;
    @ViewChild('phoneInput') myPhoneInput: jqxMaskedInputComponent;
    @ViewChild('regexInput') myRegexInput: jqxMaskedInputComponent;
    @ViewChild('disabledInput') myDisabledInput: jqxMaskedInputComponent;

    clear(): void {
        this.myNumericInput.clear();
        this.myZipCodeInput.clear();
        this.mySsnInput.clear();
        this.myPhoneInput.clear();
        this.myRegexInput.clear();
        this.myDisabledInput.clear();
    }
}