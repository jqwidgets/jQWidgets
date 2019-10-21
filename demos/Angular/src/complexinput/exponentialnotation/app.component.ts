import { Component, ViewChild } from '@angular/core';

import { jqxComplexInputComponent } from 'jqwidgets-ng/jqxcomplexinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myComplexInput', { static: false }) myComplexInput: jqxComplexInputComponent;

    source: string[] = ['decimal', 'exponential', 'scientific', 'engineering'];

    notationsListOnChange(event: any): void {
        let args = event.args;
        if (args) {
            let label = args.item.label;
            if (label === 'decimal') {
                label = 'default';
            }
            this.myComplexInput.decimalNotation(label);
        }
    };

    getRealDecimalOnClick(): void {
        let decimalValue = this.myComplexInput.getReal();
        alert('Decimal value: ' + decimalValue);
    };

    getRealExponentialOnClick(): void {
        let exponentialValue = this.myComplexInput.getDecimalNotation('real', 'exponential');
        alert('Exponential notation: ' + exponentialValue);
    };

    getRealScientificOnClick(): void {
        let scientificValue = this.myComplexInput.getDecimalNotation('real', 'scientific');
        alert('Scientific notation: ' + scientificValue);
    };

    getRealEngineeringOnClick(): void {
        let engineeringValue = this.myComplexInput.getDecimalNotation('real', 'engineering');
        alert('Engineering notation: ' + engineeringValue);
    };

    getImaginaryDecimalOnClick(): void {
        let decimalValue = this.myComplexInput.getImaginary();
        alert('Decimal value: ' + decimalValue);
    };

    getImaginaryExponentialOnClick(): void {
        let exponentialValue = this.myComplexInput.getDecimalNotation('imaginary', 'exponential');
        alert('Exponential notation: ' + exponentialValue);
    };

    getImaginaryScientificOnClick(): void {
        let scientificValue = this.myComplexInput.getDecimalNotation('imaginary', 'scientific');
        alert('Scientific notation: ' + scientificValue);
    };

    getImaginaryEngineeringOnClick(): void {
        let engineeringValue = this.myComplexInput.getDecimalNotation('imaginary', 'engineering');
        alert('Engineering notation: ' + engineeringValue);
    };
}
