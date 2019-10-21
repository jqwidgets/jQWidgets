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

    style: any =
    {
        stroke: '#dfe3e9', strokeWidth: 3,
        fill: {
            color: '#fefefe', gradientType: "linear",
            gradientStops: [[0, 1], [50, 0.9], [100, 1]]
        }
    };

    marks: any =
    {
        colorRemaining: { color: 'grey', border: 'grey' },
        colorProgress: { color: '#00a4e1', border: '#00a4e1' },
        type: 'line', offset: '71%', thickness: 3, size: '6%',
        majorSize: '9%', majorInterval: 10, minorInterval: 2
    };

    labels: any =
    {
        offset: '88%',
        step: 10,
        visible: true
    };

    progressBar: any =
    {
        style: { fill: '#00a4e1', stroke: 'grey' },
        size: '9%', offset: '60%',
        background: { fill: 'grey', stroke: 'grey' }
    };

    pointer: any =
    {
        type: 'arrow', style: { fill: '#00a4e1', stroke: 'grey' },
        size: '59%', offset: '49%', thickness: 20
    };

    onChange(event: any): void {
        if (event.args.changeSource == 'propertyChange' || event.args.changeSource == 'val') { return; }
        this.myNumberInput.val(event.args.value);
    }

    onMouseDown(event: any): void {
        event.stopPropagation();
    }

    onKeyup(): void {
        let val = this.myNumberInput.val();
        this.myKnob.val(val);
    }

    onValueChanged(): void {
        let val = this.myNumberInput.val();
        this.myKnob.val(val);
    }
}