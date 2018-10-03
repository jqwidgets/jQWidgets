import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

@Component({
    selector: 'app-performance-chart',
    templateUrl: './performance-chart.component.html',
    styleUrls: ['./performance-chart.component.css']
})
export class PerformanceChartComponent implements OnInit {

    @ViewChild('performanceChart') performanceChart: jqxChartComponent;
    @Input() dataToDisplay: string = 'chartperformanceaapl';

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        if (!changes.dataToDisplay.firstChange) {
            this.source.url = `../../assets/sample-data/${this.dataToDisplay}.json`;
            this.dataAdapter = new jqx.dataAdapter(this.source, { async: true, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
            this.performanceChart.refresh();
        }
    }

    padding: jqwidgets.ChartPadding =
        {
            left: 5,
            top: 5,
            right: 5,
            bottom: 55
        };

    xAxis: jqwidgets.ChartXAxis =
        {
            dataField: 'day',
            unitInterval: 1,
            tickMarks: { visible: true, interval: 1 },
            gridLines: { visible: true, interval: 1 },
            valuesOnTicks: false,
            padding: { bottom: 20, left: 0, right: 0, top: 0 }
        }

    source: any =
        {
            datafields: [
                { name: 'day' },
                { name: 'SPOpen' },
                { name: 'SPHigh' },
                { name: 'SPLow' },
                { name: 'SPClose' }
            ],
            url: `../../assets/sample-data/${this.dataToDisplay}.json`,
            datatype: 'json'
        };

    dataAdapter = new jqx.dataAdapter(this.source, { async: true, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    toolTipCustomFormatFn = function (value) {
        return '<div style="text-align:left;padding-bottom:6px;"><b><i>Close: $' + value.close +
            '<br />Open: $' + value.open + '<br />High: $' + value.high + '<br />Low: $' + value.low + '</i></b></div>';
    };

    seriesGroups: any =
        [
            {
                type: 'candlestick',
                columnsMaxWidth: 18,
                columnsMinWidth: 8,
                series: [
                    {
                        dataFieldClose: 'SPClose',
                        displayTextClose: 'S&P Close price',
                        dataFieldOpen: 'SPOpen',
                        displayTextOpen: 'S&P Open price',
                        dataFieldHigh: 'SPHigh',
                        displayTextHigh: 'S&P High price',
                        dataFieldLow: 'SPLow',
                        displayTextLow: 'S&P Low price',
                        displayText: 'AAPL',
                        lineWidth: 1
                    }
                ],
                toolTipFormatFunction: this.toolTipCustomFormatFn
            }
        ]
}
