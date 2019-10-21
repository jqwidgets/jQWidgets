import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
            { name: 'SPAdjClose' },
            { name: 'NQOpen' },
            { name: 'NQHigh' },
            { name: 'NQLow' },
            { name: 'NQClose' },
            { name: 'NQVolume' },
            { name: 'NQAdjClose' }
        ],
        url: './../../../sampledata/nasdaq_vs_sp500_detailed.txt'
    };
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}	

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
        var dataItem = this.dataAdapter.records[itemIndex];
        var volume = serie == 0 ? dataItem.SPVolume : dataItem.NQVolume;
        return '<DIV style="text-align:left"><b>Date: ' +
            categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
            '</b><br />Open price: $' + value.open +
            '</b><br />Close price: $' + value.close +
            '</b><br />Low price: $' + value.low +
            '</b><br />High price: $' + value.high +
            '</b><br />Daily volume: ' + volume +
            '</DIV>';
    };

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    xAxis: any =
    {
        dataField: 'Date',
        labels:
        {
            formatFunction: (value: any) => {
                return value.getDate() + '-' + this.months[value.getMonth()] + '<br>' + value.getFullYear().toString();
            }
        },
        type: 'date',
        valuesOnTicks: true,
        minValue: new Date(2014, 8, 20),
        maxValue: new Date(2014, 10, 1),
        rangeSelector: {
            serieType: 'area',
            padding: { left: 25, right: 10, top: 10, bottom: 10 },
            backgroundColor: 'white',
            dataField: 'SPClose',
            baseUnit: 'month',
            gridLines: { visible: false },
            labels:
            {
                formatFunction: (value: any) => {
                    return this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                }
            }
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'ohlc',
            toolTipFormatFunction: this.toolTipCustomFormatFn,
            valueAxis:
            {
                description: 'S&P 500<br>'
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
            toolTipFormatFunction: this.toolTipCustomFormatFn,
            valueAxis:
            {
                position: 'right',
                title: { text: '<br>NASDAQ' },
                gridLines: { visible: false }
            },
            series: [
                {
                    dataField: 'NQClose',
                    dataFieldClose: 'NQClose',
                    displayTextClose: 'Nasdaq Close price',
                    dataFieldOpen: 'NQOpen',
                    displayTextOpen: 'Nasdaq Open price',
                    dataFieldHigh: 'NQHigh',
                    displayTextHigh: 'Nasdaq High price',
                    dataFieldLow: 'NQLow',
                    displayTextLow: 'Nasdaq Low price',
                    displayText: 'NASDAQ',
                    lineWidth: 1
                }
            ]
        }
    ];
}