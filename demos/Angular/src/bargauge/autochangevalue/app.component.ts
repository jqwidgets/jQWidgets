import { Component, ViewChild } from '@angular/core';

import { jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myBarGauge', { static: false }) myBarGauge: jqxBarGaugeComponent;

    formatFunction(value: number, index: number, color: string): string {
        let barGaugePalette = ['#307DD7', '#AA4643', '#89A54E', '#71588F', '#4198AF'];

        if (value < 20) {
            return barGaugePalette[0];
        }
        if (value < 40) {
            return barGaugePalette[1];
        }
        if (value < 60) {
            return barGaugePalette[2];
        }
        if (value < 80) {
            return barGaugePalette[3];
        }
        if (value <= 100) {
            return barGaugePalette[4];
        }
    }

    getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    onDrawEnd(): void {
        let values = [this.getRandomInt(1, 99)];
        setTimeout(() => {
            this.myBarGauge.val(values);
        }, 1000);
    }
}
