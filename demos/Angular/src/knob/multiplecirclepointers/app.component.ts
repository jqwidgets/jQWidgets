import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myLog', { static: false }) myLog: ElementRef;

    marks: any =
    {
        colorRemaining: '#333',
        colorProgress: '#66707e',
        style: 'line',
        offset: '71%',
        thickness: 1,
        size: '6%',
        majorSize: '9%',
        majorInterval: 10,
        minorInterval: 2
    };

    labels: any =
    {
        offset: '88%',
        step: 10
    };

    progressBar: any =
    {
        style: [{ fill: '#66707e', stroke: '#66707e', strokeWidth: 0 },
        { fill: '#66707e', stroke: '#66707e', strokeWidth: 0 }],
        size: '9%',
        offset: '58%',
        background: { fill: '#a2da39', stroke: '#a2da39', strokeWidth: 0 }
    };

    pointer: any =
    [
        { type: 'circle', style: { fill: '#a2da39', stroke: '#a2da39' }, size: '5%', offset: '38%', thickness: 20 },
        { type: 'circle', style: { fill: '#a2da39', stroke: '#a2da39' }, size: '5%', offset: '38%', thickness: 20 }
    ];

    spinner: any =
    {
        style: { fill: '#66707e', stroke: '#66707e' },
        innerRadius: '0%', // specifies the inner Radius of the dial
        outerRadius: '58%', // specifies the outer Radius of the dial
        marks: {
            colorRemaining: '#a2da39',
            colorProgress: '#a2da39',
            type: 'circle',
            offset: '55%',
            thickness: 3,
            size: '1%',
            majorSize: '1%',
            majorInterval: 10,
            minorInterval: 10
        }
    };

    changing = (oldValues: number[], newValues: number[]): boolean => {
        let range = newValues[1] - newValues[0];
        if (range < 10)
            return false;
        if (range > 90)
            return false;
    };

    myKnobOnChange(event: any): void {
        this.myLog.nativeElement.innerHTML = 'Values: ' + event.args.value;
    };
}