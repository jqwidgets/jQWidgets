import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxKnobComponent } from 'jqwidgets-ng/jqxknob';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myKnob', { static: false }) myKnob: jqxKnobComponent;
    @ViewChild('myInput', { static: false }) myInput: jqxInputComponent;

    progressBar: any =
    {
        style: { fill: '#00a644' },
        background: { fill: '#eeeeee' },
        size: '30%',
        offset: '70%'
    };

    pointer: any =
    {
        type: 'line',
        style: { fill: '#00a644' },
        size: '30%',
        offset: '70%',
        thickness: 20
    };

    dial: any =
    {
        style: {
            fill: '#fff'
        },
        innerRadius: '68%',
        outerRadius: '92%',
        startAngle: 0,
        endAngle: 360
    };

    myKnobOnChange(event: any): void {
        if (event.target.nodeName === 'INPUT')
            return;
        this.myInput.val(event.args.value);
    };

    myInputOnChange(): void {
        this.myKnob.val(this.myInput.val());
    };
}