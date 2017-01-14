 
import { Component, ViewChild } from '@angular/core';

import { jqxComplexInputComponent } from '../../../../../jqwidgets-ts/angular_jqxcomplexinput';
import { jqxButtonComponent }       from '../../../../../jqwidgets-ts/angular_jqxbuttons';

@Component({
    selector: 'my-app',
    templateUrl: `../app/complexinput/defaultfunctionality/app.component.htm`
}) 

export class AppComponent
{ 
    @ViewChild('complexInputReference') myComplexInput: jqxComplexInputComponent;

    getRealPart(): void
    {
        let realPart = this.myComplexInput.getReal();
        alert("Real part is " + realPart);
    }

    getImaginarypart(): void
    {
        let imaginaryPart = this.myComplexInput.getImaginary();
        alert("Imaginary part is " + imaginaryPart);
    }
}
