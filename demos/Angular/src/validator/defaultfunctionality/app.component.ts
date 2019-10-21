import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxValidatorComponent } from 'jqwidgets-ng/jqxvalidator';
import { jqxPasswordInputComponent } from 'jqwidgets-ng/jqxpasswordinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myValidator', { static: false }) myValidator: jqxValidatorComponent;
    @ViewChild('dateTimeInput', { static: false }) dateTimeInput: jqxDateTimeInputComponent;
    @ViewChild('passwordInput', { static: false }) passwordInput: jqxPasswordInputComponent;
    @ViewChild('confirmPasswordInput', { static: false }) confirmPasswordInput: jqxPasswordInputComponent;

    initialDate: Date = new Date(2017, 8, 1);

    sendButton(): void {
        this.myValidator.validate(document.getElementById('form'));
    }

    rules =
    [
        { input: '.userInput', message: 'Username is required!', action: 'keyup, blur', rule: 'required' },
        { input: '.userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', rule: 'length=3,12' },
        { input: '.realNameInput', message: 'Real Name is required!', action: 'keyup, blur', rule: 'required' },
        { input: '.realNameInput', message: 'Your real name must contain only letters!', action: 'keyup', rule: 'notNumber' },
        { input: '.realNameInput', message: 'Your real name must be between 3 and 12 characters!', action: 'keyup', rule: 'length=2,12' },
        {
            input: '.birthInput', message: 'Your birth date must be between 1/1/1900 and 1/1/2020.', action: 'valueChanged',
            rule: (input: any, commit: any): any => {
                let date = this.dateTimeInput.value();
                let result = date.getFullYear() >= 1900 && date.getFullYear() <= 2020;
                return result;
            }
        },
        { input: '.passwordInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
        { input: '.passwordInput', message: 'Your password must be between 4 and 12 characters!', action: 'keyup, blur', rule: 'length=4,12' },
        { input: '.passwordConfirmInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
        {
            input: '.passwordConfirmInput', message: 'Passwords doesn\'t match!', action: 'keyup, focus',
            rule: (input: any, commit: any): boolean => {
                if (this.passwordInput.val() === this.confirmPasswordInput.val()) {
                    return true;
                }
                return false;
            }
        },
        { input: '.emailInput', message: 'E-mail is required!', action: 'keyup, blur', rule: 'required' },
        { input: '.emailInput', message: 'Invalid e-mail!', action: 'keyup', rule: 'email' },
        { input: '.ssnInput', message: 'Invalid SSN!', action: 'valuechanged, blur', rule: 'ssn' },
        { input: '.phoneInput', message: 'Invalid phone number!', action: 'valuechanged, blur', rule: 'phone' },
        { input: '.zipInput', message: 'Invalid zip code!', action: 'valuechanged, blur', rule: 'zipCode' },
        { input: '#acceptCheckBox', message: 'You have to accept the terms', action: 'change', rule: 'required', position: 'right:217,0' }
    ];
}
