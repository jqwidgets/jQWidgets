import { Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-chart-right',
    templateUrl: './chart-right.component.html',
    styleUrls: ['./chart-right.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ChartRightComponent {
    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    listValue: string = 'June, 29 - July 5';

    padding: jqwidgets.ChartPadding = { left: 0, top: 10, right: 0, bottom: 0 };

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

    dataAdapter = new jqx.dataAdapter(this.mainChartSource, { async: true, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.mainChartSource.url + '" : ' + error); } });


    xAxis: any =
    {
        dataField: 'Date',
        type: 'date',
        baseUnit: 'day',
        minValue: new Date(2017, 9, 10),
        maxValue: new Date(2017, 9, 20),
        valuesOnTicks: false,
        gridLines: {
            visible: false
        },
        labels:
        {
            formatFunction: (value: Date): string => {
                return value.getDate() + '-' + this.months[value.getMonth()];
            }
        },
        rangeSelector: {
            serieType: 'splinearea',
            padding: this.padding,
            backgroundColor: 'white',
            size: 110,
            gridLines: { visible: false },
        }
    };

    seriesGroups =
    [
        {
            type: 'stackedspline',
            valueAxis: {
                minValue: 500,
                maxValue: 5000,
                gridLines: {
                    visible: false
                }
            },
            series: [
                { dataField: 'Referral', displayText: 'Amazon Orders' },
                { dataField: 'SearchPaid', displayText: 'Facebook Orders' },
                { dataField: 'SearchNonPaid', displayText: 'Google Orders' }
            ]
        }
    ];
}
