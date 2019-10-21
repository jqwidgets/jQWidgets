
import { Component } from '@angular/core';

import { jqxBulletChartComponent } from 'jqwidgets-ng/jqxbulletchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    labelsFormatFunction = (value: number, position: string): string => {
        let labelsColor;
        if (value < 10) {
            labelsColor = '#0099FF';
        }
        else if (value < 15) {
            labelsColor = '#006600';
        }
        else if (value < 20) {
            labelsColor = '#FF6600';
        }
        else {
            labelsColor = '#FF4526';
        }
        if (position == 'near') {
            return '<span style="color: ' + labelsColor + ';">' + (value * 1.8 + 32) + '°F</span>';
        }
        else {
            return value + '°C';
        }
    }
    tooltipFormatFunction = (value: number, target: number): string => {
        return '<div>Temperature on May 28: <strong>' +
            (value * 1.8 + 32) + '°F</strong> (' + value +
            '°C)</div><div>Average temperature in May: <strong>' +
            (target * 1.8 + 32) + '°F</strong> (' + target + '°C)</div>'
    }
    ranges: any[] =
    [
        { startValue: 0, endValue: 10, color: '#0099FF', opacity: 1 },
        { startValue: 10, endValue: 15, color: '#006600', opacity: 1 },
        { startValue: 15, endValue: 20, color: '#FF6600', opacity: 1 },
        { startValue: 20, endValue: 25, color: '#FF4526', opacity: 1 }
    ];

    pointer: any = { value: 11, size: '25%', color: '#181818' };

    target: any = { value: 15, size: 4, color: '#181818' };

    ticks: any = { position: 'both', interval: 5, size: 10 };

}
