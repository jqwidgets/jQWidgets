 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxExpanderComponent }      from '../../../../../jqwidgets-ts/angular_jqxexpander';
import { jqxValidatorComponent }     from '../../../../../jqwidgets-ts/angular_jqxvalidator';
import { jqxInputComponent }         from '../../../../../jqwidgets-ts/angular_jqxinput';
import { jqxPasswordInputComponent } from '../../../../../jqwidgets-ts/angular_jqxpasswordinput';
import { jqxDateTimeInputComponent } from '../../../../../jqwidgets-ts/angular_jqxdatetimeinput';
import { jqxMaskedInputComponent }   from '../../../../../jqwidgets-ts/angular_jqxmaskedinput';
import { jqxButtonComponent }        from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxCheckBoxComponent }      from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    templateUrl: '../app/validator/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('validatorReference') myValidator: jqxValidatorComponent;
    @ViewChild('passwordInput') passwordInput: jqxPasswordInputComponent;
    @ViewChild('passwordConfirmInput') passwordConfirmInput: jqxPasswordInputComponent;
    @ViewChild('birthInput') birthInput: jqxDateTimeInputComponent;

    ngAfterViewInit(): void 
    {
        this.setStyles();
    }

    onSend(): void 
    {
        this.myValidator.validate(document.getElementById('form'));
    }

    setStyles(): void
    {
        let i;
        for (i = 0; i < document.getElementsByClassName('text-input').length; i++)
        {
            (<HTMLElement>document.getElementsByClassName('text-input')[i].firstChild).style.height = '21px';
            (<HTMLElement>document.getElementsByClassName('text-input')[i].firstChild).style.width = '146px';
        }
        for (i = 0; i < document.getElementsByTagName('h3').length; i++)
        {
            (<HTMLElement>document.getElementsByTagName('h3')[i]).style.display = 'inline-block';
            (<HTMLElement>document.getElementsByTagName('h3')[i]).style.margin = '0px';
        }
        for (i = 0; i < document.getElementsByTagName('tr').length; i++)
        {
            (<HTMLElement>document.getElementsByTagName('tr')[i]).style.margin = '0px';
            (<HTMLElement>document.getElementsByTagName('tr')[i]).style.padding = '2px';
            (<HTMLElement>document.getElementsByTagName('tr')[i]).style.borderSpacing = '0px';
            (<HTMLElement>document.getElementsByTagName('tr')[i]).style.borderCollapse = 'collapse';
            (<HTMLElement>document.getElementsByTagName('tr')[i]).style.fontFamily = 'Verdana';
            (<HTMLElement>document.getElementsByTagName('tr')[i]).style.fontSize = '12px';
        }
        for (i = 0; i < document.getElementsByTagName('td').length; i++)
        {
            (<HTMLElement>document.getElementsByTagName('td')[i]).style.margin = '0px';
            (<HTMLElement>document.getElementsByTagName('td')[i]).style.padding = '2px';
            (<HTMLElement>document.getElementsByTagName('td')[i]).style.borderSpacing = '0px';
            (<HTMLElement>document.getElementsByTagName('td')[i]).style.borderCollapse = 'collapse';
            (<HTMLElement>document.getElementsByTagName('td')[i]).style.fontFamily = 'Verdana';
            (<HTMLElement>document.getElementsByTagName('td')[i]).style.fontSize = '12px';
        }

        (<HTMLElement>document.getElementsByClassName('register-table')[0]).style.marginTop = '10px';
        (<HTMLElement>document.getElementsByClassName('register-table')[0]).style.marginBottom = '10px';
        (<HTMLElement>document.getElementsByTagName('angularCheckBox')[0].firstChild).style.marginLeft = '50px';
    }

    birthDate: any = new Date(2014, 4, 1);

    rules: any[] = 
    [
        { input: '#userInput', message: 'Username is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', rule: 'length=3,12' },
        { input: '#realNameInput', message: 'Real Name is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#realNameInput', message: 'Your real name must contain only letters!', action: 'keyup', rule: 'notNumber' },
        { input: '#realNameInput', message: 'Your real name must be between 3 and 12 characters!', action: 'keyup', rule: 'length=3,12' },
        {
            input: '#birthInput', message: 'Your birth date must be between 1/1/1900 and 1/1/2014.', action: 'valueChanged',
            rule: (input, commit): any =>
            {
                var date = this.birthInput.value();
                var result = date.getFullYear() >= 1900 && date.getFullYear() <= 2014;
                return result;
            }
        },
        { input: '#passwordInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#passwordInput', message: 'Your password must be between 4 and 12 characters!', action: 'keyup, blur', rule: 'length=4,12' },
        { input: '#passwordConfirmInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
        {
            input: '#passwordConfirmInput', message: 'Passwords doesn\'t match!', action: 'keyup, focus',
            rule: (input, commit): boolean =>
            {
                if (this.passwordConfirmInput.val() === this.passwordInput.val())
                {
                    return true;
                }
                return false;
            }
        },
        { input: '#emailInput', message: 'E-mail is required!', action: 'keyup, blur', rule: 'required' },
        { input: '#emailInput', message: 'Invalid e-mail!', action: 'keyup', rule: 'email' },
        { input: '#ssnInput', message: 'Invalid SSN!', action: 'valuechanged, blur', rule: 'ssn' },
        { input: '#phoneInput', message: 'Invalid phone number!', action: 'valuechanged, blur', rule: 'phone' },
        { input: '#zipInput', message: 'Invalid zip code!', action: 'valuechanged, blur', rule: 'zipCode' },
        { input: '#acceptCheckBox', message: 'You have to accept the terms', action: 'change', rule: 'required', position: 'right:170,0' }
    ];      
}

