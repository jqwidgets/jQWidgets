import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-left-bar-gauge',
    templateUrl: './left-bar-gauge.component.html',
    styleUrls: ['./left-bar-gauge.component.css']
})
export class LeftBarGaugeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    labels: jqwidgets.BarGaugeLabels =
        {
            indent: 0.1,
            visible: false
        };

    customColorScheme: jqwidgets.BarGaugeCustomColorScheme =
        {
            name: 'customColors',
            colors: ['#6BBD49']
        };

    values: number[] = [25];

    tooltip: jqwidgets.BarGaugeTooltip =
        {
            visible: false
        };
}
