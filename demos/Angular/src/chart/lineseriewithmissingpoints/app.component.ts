import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

    sampleData: any[] = [29, undefined, 10, 15, 10, undefined, NaN, 30, 25, undefined, 33, 19, 11];

    padding: any = { left: 5, top: 5, right: 15, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        text: 'x',
        valuesOnTicks: false
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    seriesGroups: any[] =
    [
        {
            type: 'line',
            source: this.sampleData,
            toolTipFormatFunction: (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
                let dataItem = this.sampleData[itemIndex];
                return '<DIV style="text-align:left"><b>Index:</b> ' +
                    itemIndex + '<br /><b>Value:</b> ' +
                    value + '<br /></DIV>';
            },
            valueAxis:
            {
                title: { text: 'Value<br>' }
            },
            series:
            [
                { emptyPointsDisplay: 'skip', displayText: 'Value', lineWidth: 2, symbolSize: 8, symbolType: 'circle' }
            ]
        }
    ];

    dropDownOnSelect(event: any): void {
        let chartInstance = this.myChart.getInstance();
        let args = event.args;

        if (args) {
            let value = args.item.value;
            chartInstance.seriesGroups[0].series[0].emptyPointsDisplay = value;
            chartInstance.update();
        }

    }
}