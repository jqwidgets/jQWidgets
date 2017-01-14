 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGaugeComponent } from '../../../../../jqwidgets-ts/angular_jqxgauge';

@Component({
    selector: 'my-app',
    template: `
        <jqxGauge #gaugeReference (onValueChanging)="gaugeOnValueChanging($event)"
            [ranges]='ranges' [ticksMinor]='ticksMinor' [ticksMajor]='ticksMajor'
            [value]='0' [colorScheme]='"scheme05"' [animationDuration]='1200'>
        </jqxGauge>

        <div id="gaugeValue"
            style="position: absolute; top: 235px; left: 132px; font-family: Sans-Serif; text-align: center; font-size: 17px; width: 70px;">
        </div>`,
    styleUrls: [`../app/gauge/defaultfunctionality/app.component.css`]
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('gaugeReference') myGauge: jqxGaugeComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            this.myGauge.value(140);
        });   
    }

    gaugeOnValueChanging(event: any): void
    {
        let gaugeValueDom = <HTMLElement>document.getElementById('gaugeValue');
        gaugeValueDom.innerText = Math.round(event.args.value) + ' kph';
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
}