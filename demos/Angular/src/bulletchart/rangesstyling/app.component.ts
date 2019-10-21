
import { Component } from '@angular/core';

import { jqxBulletChartComponent } from 'jqwidgets-ng/jqxbulletchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    ranges: any[] =
    [
        { startValue: 0, endValue: 200, color: '#CC0000', opacity: 1 },
        { startValue: 200, endValue: 250, color: '#FFD633', opacity: 1 },
        { startValue: 250, endValue: 300, color: '#00CC00', opacity: 1 }
    ];

    pointer: any = { value: 270, label: 'Revenue 2019 YTD', size: '25%', color: '' };

    target: any = { value: 260, label: 'Revenue 2018 YTD', size: 4, color: '' };

    ticks: any = { position: 'far', interval: 50, size: 10 };

}
