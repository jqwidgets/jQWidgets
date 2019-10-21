import { Component } from '@angular/core';

import { jqxBulletChartComponent } from 'jqwidgets-ng/jqxbulletchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {

    public ranges: jqwidgets.BulletChartRanges[] = [
        { startValue: 0, endValue: 200, color: '#000000', opacity: 0.5 },
        { startValue: 200, endValue: 250, color: '#000000', opacity: 0.3 },
        { startValue: 250, endValue: 300, color: '#000000', opacity: 0.1 }
    ];

    public pointer: jqwidgets.BulletChartPointer = {
        value: 270,
        label: 'Revenue 2019 YTD',
        size: '25%',
        color: 'Black'
    };

    public target: jqwidgets.BulletChartPointer = {
        value: 260,
        label: 'Revenue 2018 YTD',
        size: 4,
        color: 'Black'
    };

    public ticks: jqwidgets.BulletChartTicks = {
        position: 'both',
        interval: 50,
        size: 10
    };

}
