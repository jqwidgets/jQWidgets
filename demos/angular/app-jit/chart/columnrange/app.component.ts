import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    data: any[] = [
        { 'month': 'Jan', 'min': -1.9, 'max': 3.7, 'avg': 0.2 },
        { 'month': 'Feb', 'min': -0.9, 'max': 5.9, 'avg': 1.1 },
        { 'month': 'Mar', 'min': 0.8, 'max': 9.8, 'avg': 4.9 },
        { 'month': 'Apr', 'min': 4.1, 'max': 13.9, 'avg': 8.7 },
        { 'month': 'May', 'min': 8.0, 'max': 18.4, 'avg': 13.1 },
        { 'month': 'Jun', 'min': 11.3, 'max': 22.2, 'avg': 16.6 },
        { 'month': 'Jul', 'min': 13.3, 'max': 25.3, 'avg': 18.4 },
        { 'month': 'Aug', 'min': 13.0, 'max': 24.4, 'avg': 17.6 },
        { 'month': 'Sep', 'min': 10.3, 'max': 20.8, 'avg': 14.3 },
        { 'month': 'Oct', 'min': 6.6, 'max': 14.9, 'avg': 9.2 },
        { 'month': 'Nov', 'min': 2.1, 'max': 8.4, 'avg': 4.2 },
        { 'month': 'Dec', 'min': -0.5, 'max': 4.5, 'avg': 1.5 }
    ];

    toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
        let dataItem =this.data[itemIndex];
        return '<DIV style="text-align:left"><b>Month: ' +
            categoryValue + '</b><br />Min: ' +
            dataItem.min + '°<br />Max: ' +
            dataItem.max + '°<br />Average: ' +
            dataItem.avg + '°</DIV>';
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    padding = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis =
    {
        dataField: 'month',
        unitInterval: 1,
        gridLines: {
            step: 3
        }
    };

    valueAxis =
    {
        minValue: -5,
        maxValue: 30,
        unitInterval: 5,
        title: { text: 'Temperature [C]<br>' },
        labels: {
            horizontalAlignment: 'right',
            formatSettings: { sufix: '°' }
        }
    };

    seriesGroups =
    [
        {
            type: 'rangecolumn',
            columnsGapPercent: 50,
            toolTipFormatFunction: this.toolTipCustomFormatFn,
            series: [
                { dataFieldTo: 'max', displayText: 'Temperature Range', dataFieldFrom: 'min', opacity: 1 }
            ]
        },
        {
            type: 'spline',
            toolTipFormatFunction: this.toolTipCustomFormatFn,
            series: [
                { dataField: 'avg', displayText: 'Average Temperature', opacity: 1, lineWidth: 2 }
            ]
        }
    ];
}
