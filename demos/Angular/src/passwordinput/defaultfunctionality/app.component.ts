import { Component, ViewChild } from '@angular/core';

import { jqxPasswordInputComponent } from 'jqwidgets-ng/jqxpasswordinput';
import { jqxExpanderComponent } from 'jqwidgets-ng/jqxexpander';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxValidatorComponent } from 'jqwidgets-ng/jqxvalidator';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild('createAccount', { static: false }) createAccount: jqxExpanderComponent;
    @ViewChild('firstName', { static: false }) firstName: jqxInputComponent;
    @ViewChild('lastName', { static: false }) lastName: jqxInputComponent;
    @ViewChild('userName', { static: false }) userName: jqxInputComponent;
    @ViewChild('password', { static: false }) password: jqxPasswordInputComponent;
    @ViewChild('passwordConfirm', { static: false }) passwordConfirm: jqxPasswordInputComponent;
    @ViewChild('validatorReference', { static: false }) myValidator: jqxValidatorComponent;
    @ViewChild('gender', { static: false }) gender: jqxDropDownListComponent;

    genders: string[] = ["male", "female"];

    rules: any[] = [
        {
            input: ".firstName", message: "First name is required!", action: 'keyup, blur', rule: (input: any, commit: any): boolean => {
                return this.firstName.val() != "" && this.firstName.val() != "First";
            }
        },
        {
            input: ".lastName", message: "Last name is required!", action: 'keyup, blur', rule: (input: any, commit: any): boolean => {
                return this.lastName.val() != "" && this.lastName.val() != "Last";
            }
        },
        { input: ".userName", message: "Username is required!", action: 'keyup, blur', rule: 'required' },
        { input: ".password", message: "Password is required!", action: 'keyup, blur', rule: 'required' },
        { input: ".passwordConfirm", message: "Password is required!", action: 'keyup, blur', rule: 'required' },
        {
            input: ".passwordConfirm", message: "Passwords should match!", action: 'keyup, blur', rule: (input: any, commit: any): boolean => {
                let firstPassword = this.password.val();
                let secondPassword = this.passwordConfirm.val();
                return firstPassword == secondPassword;
            }
        },
        {
            input: ".gender", message: "Gender is required!", action: 'blur', rule: (input: any, commit: any): boolean => {
                let index = this.gender.getSelectedIndex();
                return index != -1;
            }
        }
    ];

    buttonClicked(): void {
        this.myValidator.validate(document.getElementById('form'));
    };

    validationSuccess(event: any): void {
        this.createAccount.setContent('<span style="margin: 10px;">Account created.</span>');
    };
}