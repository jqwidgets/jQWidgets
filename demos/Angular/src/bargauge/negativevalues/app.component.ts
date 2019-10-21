import { Component, ViewChild } from '@angular/core';

import { jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public values: number[] = [12, -35, -14.78, 29.5, 23.124, 41];

    public labels: jqwidgets.BarGaugeLabels = {
        formatFunction: (value: number): string => {
            return value + ' m';
        },
        precision: 1,
        indent: 15
    };

}
