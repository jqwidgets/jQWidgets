 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxLinearGaugeComponent } from '../../../../../jqwidgets-ts/angular_jqxlineargauge';

@Component({
    selector: 'my-app',
    template:
        `<jqxLinearGauge #linearGaugeReference style="margin-left: 60px; float: left;"
            [width]='100' [height]='350' [max]='60' [ranges]='ranges' [pointer]='pointer'
            [ticksMajor]='ticksMajor' [ticksMinor]='ticksMinor' [colorScheme]='"scheme05"'
            [labels]='labels' [orientation]='"vertical"' [animationDuration]='1500'>
        </jqxLinearGauge>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('linearGaugeReference') myLinearGauge: jqxLinearGaugeComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            this.myLinearGauge.value(50);
        });
    }

    ticksMajor: any =  { size: '10%', interval: 10 };

    ticksMinor: any = { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa'} };

    pointer: any = { size: '5%' };

    labels: any = 
    {
        interval: 20,
        formatValue: (value: number, position: string): string =>
        {
            if (position === 'far')
            {
                value = (9 / 5) * value + 32;
                if (value === -76)
                {
                    return '°F';
                }

                return value + '°';
            }

            if (value === -60)
            {
                return '°C';
            }

            return value + '°';
        }
    };

    ranges: any[] = 
    [
        { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
        { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
        { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
    ];
}
