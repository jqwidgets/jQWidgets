import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    data1: any[] =
    [
        { text: 'Used', value: 55 },
        { text: 'Available', value: 9 }
    ];
    data2: any[] =
    [
        { text: 'Used', value: 37 },
        { text: 'Available', value: 63 }
    ];
    data3: any[] =
    [
        { text: 'Used', value: 89.3 },
        { text: 'Available', value: 166.7 }
    ];
    data4: any[] =
    [
        { text: 'Used', value: 47 },
        { text: 'Available', value: 53 }
    ];
    data5: any[] =
    [
        { hour: 0, latency: 235, requests: 3500 },
        { hour: 1, latency: 231, requests: 3400 },
        { hour: 2, latency: 217, requests: 3350 },
        { hour: 3, latency: 215, requests: 3260 },
        { hour: 4, latency: 225, requests: 3320 },
        { hour: 5, latency: 235, requests: 3400 },
        { hour: 6, latency: 239, requests: 3550 },
        { hour: 7, latency: 255, requests: 4100 },
        { hour: 8, latency: 251, requests: 4200 },
        { hour: 9, latency: 259, requests: 4500 },
        { hour: 10, latency: 265, requests: 4560 },
        { hour: 11, latency: 257, requests: 4500 },
        { hour: 12, latency: 265, requests: 4490 },
        { hour: 13, latency: 261, requests: 4400 },
        { hour: 14, latency: 258, requests: 4350 },
        { hour: 15, latency: 257, requests: 4340 },
        { hour: 16, latency: 255, requests: 4200 },
        { hour: 17, latency: 245, requests: 4050 },
        { hour: 18, latency: 241, requests: 4020 },
        { hour: 19, latency: 239, requests: 3900 },
        { hour: 20, latency: 237, requests: 3810 },
        { hour: 21, latency: 236, requests: 3720 },
        { hour: 22, latency: 235, requests: 3610 },
        { hour: 23, latency: 239, requests: 3550 },
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 5, top: 5, right: 5, bottom: 5 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    seriesGroups: any[] =
    [
        {
            type: 'donut',
            useGradientColors: false,
            series:
            [
                {
                    showLabels: false,
                    enableSelection: true,
                    displayText: 'text',
                    dataField: 'value',
                    labelRadius: 120,
                    initialAngle: 90,
                    radius: 60,
                    innerRadius: 50,
                    centerOffset: 0
                }
            ]
        }
    ];

    counter: number = 0;

    drawBefore = (renderer: any, rect: any): void => {
        let value;

        if (this.counter === 0) {
            value = this.data1[0].value;
        } else if (this.counter === 1) {
            value = this.data2[0].value;
        } else if (this.counter === 2) {
            value = this.data3[0].value;
        } else if (this.counter === 3) {
            value = this.data4[0].value;
        }

        let sz = renderer.measureText(value, 0, { 'class': 'chart-inner-text' });
        renderer.text(
            value,
            rect.x + (rect.width - sz.width) / 2,
            rect.y + rect.height / 2,
            0,
            0,
            0,
            { 'class': 'chart-inner-text' }
        );

        this.counter++;
    };

    xAxis: any =
    {
        dataField: 'hour',
        displayText: 'Hour',
    };

    latencyThreshold: number = 260;

    seriesGroups2: any[] =
    [
        {
            type: 'column',
            valueAxis:
            {
                title: { text: 'Request Latency [ms]<br>' },
                position: 'left'
            },
            toolTipFormatSettings: { sufix: ' ms' },
            series:
            [
                {
                    dataField: 'latency',
                    displayText: 'Request latency',
                    colorFunction: (value: any, itemIndex: any, serie: any, group: any): any => {
                        return (value > this.latencyThreshold) ? '#CC1133' : '#55CC55';
                    }
                }
            ],
            bands:
            [
                {
                    minValue: this.latencyThreshold,
                    maxValue: this.latencyThreshold,
                    lineWidth: 1,
                    color: 'red'
                }
            ]
        },
        {
            type: 'spline',
            valueAxis:
            {
                title: { text: 'Get Requests per second' },
                position: 'right'
            },
            toolTipFormatSettings: { sufix: ' req/s' },
            series:
            [
                {
                    dataField: 'requests',
                    displayText: 'Get requests',
                    lineColor: '#343F9B',
                    lineWidth: 2
                }
            ]
        },
    ];
}