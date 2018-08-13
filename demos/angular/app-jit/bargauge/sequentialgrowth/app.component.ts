import { Component, ViewChild } from '@angular/core';

import { jqxBarGaugeComponent } from '../../../jqwidgets-ts/angular_jqxbargauge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myBarGauge') myBarGauge: jqxBarGaugeComponent;

    arrayOfValues: number[] = [20, 0, 0, 0];

    arrayA: number[] = [20, 60, 0, 0];

    arrayB: number[] = [20, 60, 80, 0];

    arrayC: number[] = [20, 60, 80, 100];

    loop: number = 0;

    labels: any = { precision: 0, indent: 15, connectorWidth: 1 };

    onDrawEnd(): void {
        switch (this.loop) {
            case 0:
                this.myBarGauge.values(this.arrayA);
                break;
            case 1:
                this.myBarGauge.values(this.arrayB);
                break;
            case 2:
                this.myBarGauge.values(this.arrayC);
                break;
            default:
                console.log('Render time is finished.');
                break;
        }
        this.loop += 1;
    }
}