import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxKnobComponent } from 'jqwidgets-ng/jqxknob';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myKnob', { static: false }) myKnob: jqxKnobComponent;
    @ViewChild('myNumberInput', { static: false }) myNumberInput: jqxNumberInputComponent;

    progressBar: any =
    {
        style: { fill: { color: '#00a4e1', gradientType: 'radial', gradientStops: [[0, 0.5], [100, 1]] } },
        size: '50%',
        offset: '50%',
        background: { fill: { color: '#FFFFFF', gradientType: 'linear', gradientStops: [[0, 0.5], [100, 1]] } }
    };

    pointer: any =
    {
        type: 'line', style: { fill: '#00a4e1' }, size: '50%', offset: '50%', thickness: 0
    };

    myKnobOnChange(event: any): void {
        this.myNumberInput.val(event.args.value);
    };

    myNumberInputOnChange(event: any): void {
        this.myKnob.val(event.args.value);
    };
}