import { Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material';

import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

@Component({
    selector: 'app-chart-left',
    templateUrl: './chart-left.component.html',
    styleUrls: ['./chart-left.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ChartLeftComponent implements AfterViewInit {
    @ViewChild(MatSlideToggle) toggle: MatSlideToggle;
    @ViewChild('chart1') chart1: jqxChartComponent;
    @ViewChild('chart2') chart2: jqxChartComponent;
    @ViewChild('chart3') chart3: jqxChartComponent;

    data: any[] = [];

    timer;

    ngOnInit() {
        this.generateChartData();
    }

    ngAfterViewInit(): void {
        this.startChartUpdates();      
    }

    padding: jqwidgets.ChartPadding = { left: 0, top: 10, right: 0, bottom: 0 };

    xAxis: jqwidgets.ChartXAxis =
    {
        visible: false,
        valuesOnTicks: false
    };

    seriesGroups: any[] =
    [
        {
            type: 'spline',
            valueAxis:
            {
                minValue: 0,
                visible: false
            },
            series: [
                { dataField: 'value', displayText: 'value', opacity: 0.9, lineWidth: 2}
            ]
        }
    ];

    generateChartData = (): void => {
        let max = 200;
        for (let i = 0; i < 60; i++) {
            this.data.push({ value: Math.max(100, (Math.random() * 1000) % max) });
        }
        this.data = this.data.reverse();
    }

    startChartUpdates(): void {
        let data = this.data;
        this.timer = setInterval(_ => {
            let max = 200;
            if (data.length >= 60)
                data.splice(0, 1);
            data.push({ value: Math.max(100, (Math.random() * 1000) % max) });
            this.chart1.update();
            this.chart2.update();
            this.chart3.update();
        }, 1000);
    }

    toggleOnChange(): void {
        if (this.toggle.checked) {
            this.startChartUpdates();      
        } else {
            clearInterval(this.timer);
        }
    }

    mainChartSource: any =
    {
        datatype: 'tab',
        datafields: [
            { name: 'Date' },
            { name: 'Referral' },
            { name: 'SearchPaid' },
            { name: 'SearchNonPaid' }
        ],
        url: './assets/website_analytics.txt'
    };

    mainChartDataAdapter = new jqx.dataAdapter(this.mainChartSource, { async: true, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.mainChartSource.url + '" : ' + error); } });

    mainChartxAxis: jqwidgets.ChartXAxis =
    {
        dataField: 'Date',
        type: 'date',
        baseUnit: 'day',
        valuesOnTicks: true,
        gridLines: {
            visible: false
        },
        toolTipFormatFunction: (value: Date): string => {
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
        },
    };

    mainChartSeriesGroups: any[] =
    [
        {
            alignEndPointsWithIntervals: false,
            type: 'area',
            valueAxis:
            {
                unitInterval: 100,
                minValue: 1000,
                maxValue: 1550,
                gridLines: {
                    visible: false
                },
            },
            series: [
                { dataField: 'SearchNonPaid', displayText: 'Google Visitors', opacity: 0.8 },
                { dataField: 'SearchPaid', displayText: 'Amazon Visitors', opacity: 0.9 },
            ]
         },
         {
             alignEndPointsWithIntervals: false,
             type: 'area',
             valueAxis:
             {
                 unitInterval: 100,
                 minValue: 1000,
                 maxValue: 1550,
                 gridLines: {
                     visible: false
                 },
                 position: 'right'
             },
             series: [
                 { dataField: 'Referral', displayText: ' Facebook Visitors', opacity: 0.7 }
             ]
         }
    ];   
}
