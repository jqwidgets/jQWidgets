/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" /> 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxChartComponent } from '../../../../../jqwidgets-ts/angular_jqxChart';

@Component({
    selector: 'my-app',
    template: `<jqxChart [width]='850' [height]='500' [auto-create]='false' #chartReference></jqxChart>`
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('chartReference') myChart: jqxChartComponent;  

    ngAfterViewInit(): void
    {
        this.myChart.createComponent(this.settings);
    }

    source =
    {
        datatype: "csv",
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        url: '../../demos/sampledata/nasdaq_vs_sp500.txt'
    };

    dataAdapter = new $.jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    settings: jqwidgets.ChartOptions = {
        title: "U.S. Stock Market Index Performance",
        description: "NASDAQ Composite compared to S&P 500",
        enableAnimations: true,
        showLegend: true,
        padding: { left: 10, top: 5, right: 10, bottom: 5 },
        titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
        source: this.dataAdapter,
        xAxis:
        {
            dataField: 'Date',
            type: 'date',
            baseUnit: 'month',
            valuesOnTicks: true,
            minValue: '01-01-2014',
            maxValue: '01-01-2015',
            tickMarks: {
                visible: true,
                interval: 1,
                color: '#BCBCBC'
            },
            unitInterval: 1,
            gridLines: {
                visible: true,
                interval: 3,
                color: '#BCBCBC'
            },
            labels: {
                angle: -45,
                rotationPoint: 'topright',
                offset: { x: 0, y: -25 }
            }
        },
        valueAxis:
        {
            visible: true,
            title: { text: 'Daily Closing Price<br>' },
            tickMarks: { color: '#BCBCBC' }
        },
        colorScheme: 'scheme04',
        seriesGroups:
        [
            {
                type: 'line',
                series: [
                    { dataField: 'S&P 500', displayText: 'S&P 500' },
                    { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                ]
            }
        ]
    }
}
