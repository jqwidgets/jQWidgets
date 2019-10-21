import { Component } from '@angular/core';

import { jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public players: number[] = [25, 46, 6, 55, 14, 22, 57, 40, 87, 20];

    public title: jqwidgets.BarGaugeTitle = {
      text: 'Ranking',
      subtitle: {
        text: '(boundary - 33 points)'
      }
    };

    public labels: jqwidgets.BarGaugeLabels = {
        formatFunction: (value: number): string => {
            return value + ' pts';
        },
        font: { size: 12 },
        indent: 10
    };

    public tooltip: jqwidgets.BarGaugeTooltip = {
        classname: 'myTooltip',
        formatFunction: (value: string): string => {
            const realVal = parseInt(value, 0);
            const player = this.players.indexOf(realVal) + 1;

            return 'Player ' + player + ': ' + realVal + ' points';
        },
        visible: true
    };

}
