import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxKnobComponent } from '../../../jqwidgets-ts/angular_jqxknob';
import { jqxInputComponent } from '../../../jqwidgets-ts/angular_jqxinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myKnob') myKnob: jqxKnobComponent;
    @ViewChild('myInput') myInput: jqxInputComponent;

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