import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;
    @ViewChild('checkboxSwapAxis', { static: false }) checkboxSwapAxis: jqxChartComponent;

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

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        textRotationAngle: 0,
        dataField: 'month',
        unitInterval: 1,
        tickMarks: {
            visible: true,
            step: 1,
            color: '#888888'
        },
        gridLines: {
            visible: true,
            step: 1,
            color: '#888888'
        }
    };

    valueAxis: any =
    {
        unitInterval: 5,
        title: { text: 'Temperature [C]' },
        tickMarks: { color: '#888888' },
        minValue: -5,
        maxValue: 30,
        alternatingBackgroundColor: '#E5E5E5',
        alternatingBackgroundColor2: '#F5F5F5',
        alternatingBackgroundOpacity: 0.5
    };

    toolTipCustomFormatFn = (value: any, itemIndex: number, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
        let dataItem = this.data[itemIndex];
        return '<DIV style="text-align:left"><b>Month: ' +
            categoryValue + '</b><br />Min: ' +
            dataItem.min + '&deg;<br />Max: ' +
            dataItem.max + '&deg;<br />Average: ' +
            dataItem.avg + '&deg;</DIV>';
    };

    seriesGroups: any[] =
    [
        {
            type: 'rangecolumn',
            columnsGapPercent: 100,
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

    checkboxSwapAxisOnChange(event: any): void {
    let swap = event.args.checked;
        for (let i = 0; i < this.myChart.seriesGroups().length; i++)
            this.myChart.seriesGroups()[i].orientation = swap ? 'horizontal' : 'vertical';
        this.myChart.refresh();
    };
}
