import { Component, ViewChild } from '@angular/core';

import { jqxMaskedInputComponent } from 'jqwidgets-ng/jqxmaskedinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('numericInput', { static: false }) myNumericInput: jqxMaskedInputComponent;
    @ViewChild('zipCodeInput', { static: false }) myZipCodeInput: jqxMaskedInputComponent;
    @ViewChild('ssnInput', { static: false }) mySsnInput: jqxMaskedInputComponent;
    @ViewChild('phoneInput', { static: false }) myPhoneInput: jqxMaskedInputComponent;
    @ViewChild('regexInput', { static: false }) myRegexInput: jqxMaskedInputComponent;
    @ViewChild('disabledInput', { static: false }) myDisabledInput: jqxMaskedInputComponent;

    clear(): void {
        this.myNumericInput.clear();
        this.myZipCodeInput.clear();
        this.mySsnInput.clear();
        this.myPhoneInput.clear();
        this.myRegexInput.clear();
        this.myDisabledInput.clear();
    }
}