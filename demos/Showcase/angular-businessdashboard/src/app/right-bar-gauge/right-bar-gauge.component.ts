import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-bar-gauge',
  templateUrl: './right-bar-gauge.component.html',
  styleUrls: ['./right-bar-gauge.component.css']
})
export class RightBarGaugeComponent implements OnInit {

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
            colors: ['#667B82']
        };

    values: number[] = [50];

    tooltip: jqwidgets.BarGaugeTooltip =
        {
            visible: false
        };
}
