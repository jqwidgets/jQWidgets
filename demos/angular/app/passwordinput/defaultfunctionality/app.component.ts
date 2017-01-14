 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxPasswordInputComponent } from '../../../../../jqwidgets-ts/angular_jqxpasswordinput';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxInputComponent } from '../../../../../jqwidgets-ts/angular_jqxinput';

@Component({
    selector: 'my-app',
    templateUrl: '../app/passwordinput/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('userName') userNameInput: jqxInputComponent;
    @ViewChild('password') passwordInput: jqxPasswordInputComponent;
    @ViewChild('passwordConfirm') passwordConfirmInput: jqxPasswordInputComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            (<HTMLElement>document.getElementsByTagName('angularButton')[0].firstChild).style.marginTop = '0.8em';
            (<HTMLElement>document.getElementsByTagName('angularButton')[0].firstChild).style.marginLeft = '2em';
        });
    }

    buttonClicked(): any 
    {
        let passwordValue = this.passwordInput.val();
        let confirmValue = this.passwordConfirmInput.val();
        let userNameValue = this.userNameInput.val();

        if (userNameValue.length === 0 || confirmValue.length === 0 || passwordValue === 0)
        {
            alert("You have an empty field!");
            this.userNameInput.val('');
            return false;
        }

        if (passwordValue === confirmValue)
        {
            alert("Submitting Data");
        } else
        {
            alert("Passwords do not match!");
        }

        this.passwordInput.val('');
        this.passwordConfirmInput.val('');
        this.userNameInput.val('');
    }
}
