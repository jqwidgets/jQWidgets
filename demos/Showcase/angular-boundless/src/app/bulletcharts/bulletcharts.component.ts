import { Component, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material';

import { jqxBulletChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbulletchart';

@Component({
    selector: 'app-bulletcharts',
    templateUrl: './bulletcharts.component.html',
    styleUrls: ['./bulletcharts.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class BulletChartsComponent implements AfterViewInit {
    @ViewChild(MatSlideToggle) toggle: MatSlideToggle;
    @ViewChild('myBulletChart1') myBulletChart1: jqxBulletChartComponent;
    @ViewChild('myBulletChart2') myBulletChart2: jqxBulletChartComponent;
    @ViewChild('myBulletChart3') myBulletChart3: jqxBulletChartComponent;

    timer;

    ngAfterViewInit(): void {
        this.startBulletChartsUpdate();
    }

    startBulletChartsUpdate(): void {
        this.timer = setInterval(_ => {
            if (this.myBulletChart1.target().value === 90) {
                this.myBulletChart1.setOptions({ ranges: this.ranges1_2, pointer: this.pointer1_2, target: this.target1_2 });
                this.myBulletChart2.setOptions({ ranges: this.ranges2_2, pointer: this.pointer2_2, target: this.target2_2 });
                this.myBulletChart3.setOptions({ ranges: this.ranges3_2, pointer: this.pointer3_2, target: this.target3_2 });
            } else {
                this.myBulletChart1.setOptions({ ranges: this.ranges1_1, pointer: this.pointer1_1, target: this.target1_1 });
                this.myBulletChart2.setOptions({ ranges: this.ranges2_1, pointer: this.pointer2_1, target: this.target2_1 });
                this.myBulletChart3.setOptions({ ranges: this.ranges3_1, pointer: this.pointer3_1, target: this.target3_1 });
            }
            this.myBulletChart1.refresh();
        }, 3000);
    }

    toggleOnChange(): void {
        if (this.toggle.checked) {
            this.startBulletChartsUpdate();
        } else {
            clearInterval(this.timer);
        }
    }

    // BulletChart 1 Options
    ranges1_1: any[] =
    [
        { startValue: 0, endValue: 320, color: '#475a6b', opacity: 0.7 },
        { startValue: 320, endValue: 480, color: '#52677a', opacity: 0.7 },
        { startValue: 480, endValue: 1099, color: '#5c748a', opacity: 0.7 }
    ];

    ranges1_2: any[] =
    [
        { startValue: 0, endValue: 450, color: '#475a6b', opacity: 0.7 },
        { startValue: 450, endValue: 630, color: '#52677a', opacity: 0.7 },
        { startValue: 630, endValue: 1099, color: '#5c748a', opacity: 0.7 }
    ];

    pointer1_1: any = { value: 310, size: '16%', color: '' };

    pointer1_2: any = { value: 360, size: '16%', color: '' };

    target1_1: any = { value: 90, size: 3, color: '#475a6b' };

    target1_2: any = { value: 140, size: 3, color: '#475a6b' };

    ticks1: any = { position: 'far', interval: 100, size: 3 };

    // BulletChart 2 Options
    ranges2_1: any[] =
    [
        { startValue: 0, endValue: 45, color: '#ff1a1a', opacity: 0.7 },
        { startValue: 45, endValue: 85, color: '#ff3333', opacity: 0.7 },
        { startValue: 85, endValue: 150, color: '#ff4d4d', opacity: 0.7 }
    ];

    ranges2_2: any[] =
    [
        { startValue: 0, endValue: 60, color: '#ff1a1a', opacity: 0.7 },
        { startValue: 60, endValue: 105, color: '#ff3333', opacity: 0.7 },
        { startValue: 105, endValue: 150, color: '#ff4d4d', opacity: 0.7 }
    ];

    pointer2_1: any = { value: 70, size: '16%', color: 'white' };

    pointer2_2: any = { value: 85, size: '16%', color: 'white' };

    target2_1: any = { value: 105, size: 3, color: '#990000' };

    target2_2: any = { value: 75, size: 3, color: '#990000' };

    ticks2: any = { position: 'far', interval: 20, size: 3 };

    // BulletChart 3 Options
    ranges3_1: any[] =
    [
        { startValue: 0, endValue: 700, color: '#29a329', opacity: 0.7 },
        { startValue: 700, endValue: 1200, color: '#2eb82e', opacity: 0.7 },
        { startValue: 1200, endValue: 3099, color: '#33cc33', opacity: 0.7 }
    ];

    ranges3_2: any[] =
    [
        { startValue: 0, endValue: 1300, color: '#29a329', opacity: 0.7 },
        { startValue: 1300, endValue: 2200, color: '#2eb82e', opacity: 0.7 },
        { startValue: 2200, endValue: 3099, color: '#33cc33', opacity: 0.7 }
    ];

    pointer3_1: any = { value: 600, size: '16%', color: '#e6e6e6' };

    pointer3_2: any = { value: 2600, size: '16%', color: '#e6e6e6' };

    target3_1: any = { value: 400, size: 3, color: '#1f7a1f' };

    target3_2: any = { value: 1600, size: 3, color: '#1f7a1f' };

    ticks3: any = { position: 'far', interval: 500, size: 3 };

}
