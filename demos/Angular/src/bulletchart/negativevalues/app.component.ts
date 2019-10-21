
import { Component } from '@angular/core';

import { jqxBulletChartComponent } from 'jqwidgets-ng/jqxbulletchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    ranges: any[] =
    [
        { startValue: -50, endValue: 150, color: '#000000', opacity: 0.5 },
        { startValue: 150, endValue: 200, color: '#000000', opacity: 0.3 },
        { startValue: 200, endValue: 250, color: '#000000', opacity: 0.1 }
    ];

    pointer: any = { value: -20, label: 'Profit', size: '25%', color: 'Black' };

    target: any = { value: 200, label: 'Target profit', size: 4, color: 'Black' };

    ticks: any = { position: 'far', interval: 50, size: 10 };

}
