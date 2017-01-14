 
import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxKnobComponent } from '../../../../../jqwidgets-ts/angular_jqxknob';
import { jqxNumberInputComponent } from '../../../../../jqwidgets-ts/angular_jqxnumberinput';

@Component({
    selector: 'my-app',
    templateUrl: `../app/knob/defaultfunctionality/app.component.htm`,
    styleUrls: ['../app/knob/defaultfunctionality/app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('numberInputReference') numberInput: jqxNumberInputComponent;
    @ViewChild('knobReference') myKnob: jqxKnobComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            (<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).style.border = 'none';
            (<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).style.backgroundColor = 'transparent';
            (<HTMLElement>(<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).firstElementChild).style.color = 'grey';
            (<HTMLElement>(<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).firstElementChild).style.fontSize = '20px';
            (<HTMLElement>(<HTMLElement>(<HTMLElement>document.getElementsByTagName('angularNumberInput')[0]).children[1]).firstElementChild).style.backgroundColor = 'transparent';

            this.numberInput.val(60);
        });
    }

    onChange(event: any): void
    {
        if (event.args.changeSource == 'propertyChange' || event.args.changeSource == 'val') { return; }
        this.numberInput.val(event.args.value);
    }

    onMouseDown(event: any): void
    {
        event.stopPropagation();
    }

    onKeyup(): void
    {
        let val = this.numberInput.val();
        this.myKnob.val(val);
    }

    onValueChanged(): void
    {
        let val = this.numberInput.val();
        this.myKnob.val(val);
    }

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
}
