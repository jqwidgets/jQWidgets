import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
        const dataItem = this.dataAdapter.records[itemIndex];
        const volume = dataItem.SPVolume;
        return '<DIV style="text-align:left"><b>Date: ' +
            categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
            '</b><br />Open price: $' + value.open +
            '</b><br />Close price: $' + value.close +
            '</b><br />Low price: $' + value.low +
            '</b><br />High price: $' + value.high +
            '</b><br />Daily volume: ' + volume +
            '</DIV>';
    };

    source: any =
        {
            datatype: 'tsv',
            datafields: [
                { name: 'Date' },
                { name: 'SPOpen' },
                { name: 'SPHigh' },
                { name: 'SPLow' },
                { name: 'SPClose' },
                { name: 'SPVolume' },
                { name: 'SPAdjClose' }
            ],
            url: './../../../sampledata/nasdaq_vs_sp500_detailed.txt'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    source2: any =
        {
            datatype: 'csv',
            datafields: [
                { name: 'Date' },
                { name: 'S&P 500' },
                { name: 'NASDAQ' }
            ],
            url: './../../../sampledata/nasdaq_vs_sp500.txt'
        };

    dataAdapter2: any = new jqx.dataAdapter(this.source2);

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 50, top: 0, right: 0, bottom: 10 };

    xAxis: any =
        {
            dataField: 'Date',
            formatFunction: (value: any) => {
                return value.getDate() + '-' + this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
            },
            type: 'date',
            valuesOnTicks: true,
            minValue: new Date(2014, 0, 1),
            maxValue: new Date(2014, 11, 1)
        };

    seriesGroups: any =
        [
            {
                type: 'candlestick',
                columnsMinWidth: 4,
                //skipOverlappingPoints: false,
                toolTipFormatFunction: this.toolTipCustomFormatFn,
                valueAxis:
                    {
                        title: { text: 'S&P 500<br>' },
                        minValue: 1500
                    },
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
                        displayText: 'S&P 500',
                        lineWidth: 1
                    }
                ]
            },
            {
                type: 'line',
                valueAxis:
                    {
                        position: 'right',
                        title: { text: '<br>Daily Volume' },
                        gridLines: { visible: false },
                        tickMarks: { visible: false },
                        labels: {
                            formatFunction: (value: any) => {
                                return value / 1000000 + 'M';
                            }
                        }
                    },
                series: [
                    {
                        dataField: 'SPVolume',
                        displayText: 'Volume',
                        lineWidth: 1
                    }
                ]
            }
        ]


    xAxis2: any =
        {
            dataField: 'Date',
            type: 'date',
            baseUnit: 'month',
            unitInterval: 1,
            valuesOnTicks: true,
            labels: {
                formatFunction: (value: any) => {
                    return this.months[value.getMonth()];
                }
            },
            toolTipFormatFunction: (value: any) => {
                return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
            },
            tickMarks: { visible: true, unitInterval: 1 },
            gridLines: { visible: true, unitInterval: 3 }
        };

    seriesGroups2: any =
        [
            {
                type: 'line',
                valueAxis:
                    {
                        unitInterval: 500,
                        visible: true,
                        title: { text: 'Daily Closing Price' }
                    },
                series: [
                    { dataField: 'S&P 500', displayText: 'S&P 500' },
                    { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                ]
            }
        ];
}
