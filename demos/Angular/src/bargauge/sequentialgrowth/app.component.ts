import { Component, ViewChild } from '@angular/core';

import { jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myBarGauge', { static: false }) myBarGauge: jqxBarGaugeComponent;

    public labels: jqwidgets.BarGaugeLabels = { 
      precision: 0,
      indent: 15,
      connectorWidth: 1 
    };
    public arrayOfValues: number[] = [20, 0, 0, 0];

    private arrayA: number[] = [20, 60, 0, 0];
    private arrayB: number[] = [20, 60, 80, 0];
    private arrayC: number[] = [20, 60, 80, 100];
    private loop = 0;

    public onDrawEnd(): void {
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
