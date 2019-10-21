import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGaugeComponent } from 'jqwidgets-ng/jqxgauge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myGauge', { static: false }) myGauge: jqxGaugeComponent;

    ticksMinor: any = { interval: 5, size: '5%' };

    ticksMajor: any = { interval: 10, size: '10%' };

    labels: any = { visible: true, position: 'inside' };

    style: any = { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' };

    caption: any = { offset: [0, -25], value: 'jQWidgets', position: 'bottom' };

    ranges: any[] =
    [
        { startValue: 0, endValue: 90, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
        { startValue: 90, endValue: 140, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
        { startValue: 140, endValue: 180, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
        { startValue: 180, endValue: 220, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
    ];

    ngAfterViewInit(): void {
        this.myGauge.value(220);
    }

    showLabelsCheckboxOnChange(event: any): void {
        if (this.myGauge) {
            this.labels.visible = event.args.checked;
            this.myGauge.labels(this.labels);
        }
    }

    showRangesCheckboxOnChange(event: any): void {
        if (this.myGauge) {
            this.myGauge.showRanges(event.args.checked);
        }
    }

    showBorderCheckboxOnChange(event: any): void {
        if (this.myGauge) {
            this.myGauge.border({ visible: event.args.checked });
        }
    }

    insideRadioOnChange(event: any): void {
        if (this.myGauge) {
            if (event.args.checked) {
                this.labels.position = 'inside';
                this.myGauge.labels(this.labels);
            }
        }
    }

    outsideRadioOnChange(event: any): void {
        if (this.myGauge) {
            if (event.args.checked) {
                this.labels.position = 'outside';
                this.myGauge.labels(this.labels);
            }
        }
    }
}
