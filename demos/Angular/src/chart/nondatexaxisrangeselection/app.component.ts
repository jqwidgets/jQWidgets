import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    source: any =
    {
        datatype: 'csv',
        datafields: [
            { name: 'Date' },
            { name: 'Open' },
            { name: 'High' },
            { name: 'Low' },
            { name: 'Close' },
            { name: 'Volume' },
            { name: 'AdjClose' }
        ],
        url: './../../../sampledata/TSLA_stockprice.csv'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 5, top: 5, right: 20, bottom: 5 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        minValue: 175,
        maxValue: 550,
        flip: false,
        valuesOnTicks: true,
        rangeSelector: {
            serieType: 'area',
            padding: { /*left: 0, right: 0,*/ top: 20, bottom: 0 },
            backgroundColor: 'white',
            size: 110,
            gridLines: { visible: false },
        }
    };

    toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
        return 'Index: ' + itemIndex + ", Value: " + value;
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            toolTipFormatFunction: this.toolTipCustomFormatFn,
            valueAxis:
            {
                flip: false,
                title: { text: 'Value<br><br>' }
            },
            series: [
                { dataField: 'Close', lineWidth: 1, lineWidthSelected: 1 }
            ]
        }
    ];
}