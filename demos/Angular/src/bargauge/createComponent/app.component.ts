
import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myBarGauge', { static: false }) myBarGauge: jqxBarGaugeComponent;

    ngAfterViewInit(): void {
        this.myBarGauge.createComponent(this.settings);
    }

    settings: any = {
        width: 600,
        height: 600,
        max: 150,
        values: [102, 115, 130, 137],
        colorScheme: 'scheme02',
        tooltip: {
            visible: true,
            formatFunction: (value: string) => {
                let realVal = parseInt(value);
                return ('Year: 2016<br/>Price Index:' + realVal);
            }
        }
    }
}