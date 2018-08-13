import { Component, ViewChild } from '@angular/core';

import { jqxComplexInputComponent } from '../../../jqwidgets-ts/angular_jqxcomplexinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myComplexInput') myComplexInput: jqxComplexInputComponent;

    getRealPart(): void {
        let realPart = this.myComplexInput.getReal();
        alert(`Real part is ${realPart}`);
    }

    getImaginarypart(): void {
        let imaginaryPart = this.myComplexInput.getImaginary();
        alert(`Imaginary part is ${imaginaryPart}`);
    }
}
