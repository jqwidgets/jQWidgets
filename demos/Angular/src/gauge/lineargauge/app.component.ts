import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxLinearGaugeComponent } from 'jqwidgets-ng/jqxlineargauge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myLinearGauge', { static: false }) myLinearGauge: jqxLinearGaugeComponent;

    pointer: any = { size: '6%' };

    labels: any = { interval: 20 };

    ticksMinor: any = { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } };

    ticksMajor: any = { size: '10%', interval: 10 };

    ranges: any[] =
    [
        { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
        { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
        { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
    ];

    ngAfterViewInit(): void {
        this.myLinearGauge.value(50);
    }

    isVerticalCheckboxOnChange(event: any): void {
        if (this.myLinearGauge) {
            if (event.args.checked) {
                this.myLinearGauge.width('100px');
                this.myLinearGauge.height('300px');
                this.myLinearGauge.orientation('vertical');
            } else {
                this.myLinearGauge.width('300px');
                this.myLinearGauge.height('100px');
                this.myLinearGauge.orientation('horizontal');
            }
        }
    }

    showTicksCheckboxOnChange(event: any): void {
        if (this.myLinearGauge) {
            if (event.args.checked) {
                this.myLinearGauge.ticksMajor({ visible: true, size: '10%', interval: 10 });
                this.myLinearGauge.ticksMinor({ visible: true, size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } });
            } else {
                this.myLinearGauge.ticksMajor({ visible: false });
                this.myLinearGauge.ticksMinor({ visible: false });
            }
        }
    }

    showLabelsCheckboxOnChange(event: any): void {
        if (this.myLinearGauge) {
            if (event.args.checked) {
                this.myLinearGauge.labels({ visible: true, interval: 20 });
            } else {
                this.myLinearGauge.labels({ visible: false });
            }
        }
    }

    showRangesCheckboxOnChange(event: any): void {
        if (this.myLinearGauge) {
            if (event.args.checked) {
                this.myLinearGauge.showRanges(true);
            } else {
                this.myLinearGauge.showRanges(false);
            }
        }
    }

    showBackgroundCheckboxOnChange(event: any): void {
        if (this.myLinearGauge) {
            if (event.args.checked) {
                this.myLinearGauge.background({ visible: true });
            } else {
                this.myLinearGauge.background({ visible: false });
            }
        }
    }

    labelsNearRadioOnChecked(): void {
        if (this.myLinearGauge) {
            this.myLinearGauge.labels({ interval: 20, position: 'near' });
        }
    }

    labelsFarRadioOnChecked(): void {
        if (this.myLinearGauge) {
            this.myLinearGauge.labels({ interval: 20, position: 'far' });
        }
    }

    labelsBothRadioOnChecked(): void {
        if (this.myLinearGauge) {
            this.myLinearGauge.labels({ interval: 20, position: 'both' });
        }
    }

    ticksNearRadioOnChecked(): void {
        if (this.myLinearGauge) {
            this.myLinearGauge.ticksPosition('near'); 
        }
    }

    ticksFarRadioOnChecked(): void {
        if (this.myLinearGauge) {
            this.myLinearGauge.ticksPosition('far');
        }
    }

    ticksBothRadioOnChecked(): void {
        if (this.myLinearGauge) {
            this.myLinearGauge.ticksPosition('both');
        }
    }

    showAnimationButtonOnClick(): void {
        if (this.myLinearGauge) {
            this.myLinearGauge.animationDuration(0);
            this.myLinearGauge.value(-60);
            this.myLinearGauge.animationDuration(1000);
            this.myLinearGauge.value(50);
        }
    }
}