import { Component, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';

import { jqxGaugeComponent } from 'jqwidgets-ng/jqxgauge';
import { jqxLinearGaugeComponent } from 'jqwidgets-ng/jqxlineargauge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myGauge', { static: false }) myGauge: jqxGaugeComponent; 
    @ViewChild('myLinearGauge', { static: false }) myLinearGauge: jqxLinearGaugeComponent;
    @ViewChild('gaugeValue', { static: false }) gaugeValue: ElementRef;

    ngAfterViewInit(): void {
        this.myGauge.value(140);   
        this.myLinearGauge.value(40);   
    }

    ticksMinor: any = { interval: 5, size: '5%' };

    ticksMajor: any = { interval: 10, size: '9%' };

    ranges: any[] =
    [
        { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
        { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
        { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
        { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
    ];

    ticksMinorLinear: any = { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } };

    ticksMajorLinear: any = { size: '10%', interval: 10 };

    labels: any = {
        interval: 20,
        formatValue: (value: number, position: string): string => {
            if (position === 'far') {
                value = (9 / 5) * value + 32;
                if (value === -76) {
                    return '°F';
                }
                return value + '°';
            }
            if (value === -60) {
                return '°C';
            }
            return value + '°';
        }
    };

    rangesLinear: any[] = [
        { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
        { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
        { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
    ];

    onValueChanging(event: any): void {
        this.gaugeValue.nativeElement.innerHTML = Math.round(event.args.value) + ' kph';
    }
}