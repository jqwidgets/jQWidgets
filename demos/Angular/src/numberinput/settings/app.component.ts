import { Component, ViewChild } from '@angular/core';

import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('numericInput', { static: false }) numericInput: jqxNumberInputComponent;

    symboltypes: string[] = ['$', '%', 'None'];
    decimaldigitsNumbers: string[] = ['0', '1', '2', '3', '4'];
    digitsNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

    change(event) {
        if (this.numericInput) {
            let checked = event.args.checked;
            this.numericInput.spinButtons(checked);
        }
    };

    checkedLeftbutton(event) {
        if (this.numericInput) {
            this.numericInput.symbolPosition('left');
        }
    };

    checkedRightbutton(event) {
        if (this.numericInput) {
            this.numericInput.symbolPosition('right');
        }
    };

    symboltypeSelect(event) {
        if (this.numericInput) {
            let index = event.args.index;
            if (index == 2) {
                this.numericInput.symbol('');
            }
            else {
                let symbol = this.symboltypes[index];
                this.numericInput.symbol(symbol);
            } 
        }
    };

    decimaldigitsSelect(event) {
        if (this.numericInput) {
            let index = event.args.index;
            this.numericInput.decimalDigits(this.decimaldigitsNumbers[index]);
        }
    };

    digitsSelect(event) {
        if (this.numericInput) {
            let index = event.args.index;
            this.numericInput.digits(this.digitsNumbers[index]);
        }
    };    
}