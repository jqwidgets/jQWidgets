 
import { Component } from '@angular/core';

import { jqxChartComponent } from '../../../../../jqwidgets-ts/angular_jqxChart';

@Component({
    selector: 'my-app',
    template: `<jqxChart 
                   [width]='850' [height]='500' [title]='title' [description]='description'
                   [xAxis]='xAxis' [valueAxis]='valueAxis' [seriesGroups]='seriesGroups' [source]='dataAdapter'>
               </jqxChart>`
})

export class AppComponent
{
    source: any =
    {
        datatype: "csv",
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        url: '../../demos/sampledata/nasdaq_vs_sp500.txt'
    };

    dataAdapter: any = new $.jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    title: string = 'U.S. Stock Market Index Performance';

    description: string = 'NASDAQ Composite compared to S&P 500';

    xAxis: any =
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
    };

    valueAxis: any =
    {
        visible: true,
        title: { text: 'Daily Closing Price<br>' },
        tickMarks: { color: '#BCBCBC' }
    };
    
    seriesGroups: any[] =
    [
        {
            type: 'line',
            series: [
                { dataField: 'S&P 500', displayText: 'S&P 500' },
                { dataField: 'NASDAQ', displayText: 'NASDAQ' }
            ]
        }
    ];   
}
