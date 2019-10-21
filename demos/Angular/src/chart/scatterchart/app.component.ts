import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

    sampleData: any[] = [
        { City: 'New York', SalesQ1: 330500, SalesQ2: 210500, YoYGrowth: 1.05 },
        { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowth: 1.15 },
        { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowth: 1.45 },
        { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowth: 0.45 },
        { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowth: 1.65 },
        { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowth: 1.25 },
        { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowth: 0.75 }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'City',
        valuesOnTicks: false
    };

    valueAxis: any =
    {
        minValue: 50000,
        maxValue: 350000,
        unitInterval: 50000,
        title: { text: 'Sales ($)<br>' },
        labels: {
            formatSettings: { prefix: '$', thousandsSeparator: ',' },
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'scatter',
            series: [
                { dataField: 'SalesQ1', symbolSize: 20, symbolType: 'circle', displayText: 'Sales in Q1' },
                { dataField: 'SalesQ2', symbolSize: 20, symbolType: 'diamond', displayText: 'Sales in Q2' }
            ]
        }
    ];

    symbolsList: string[] = ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right'];

    dropDownSerie1SymbolOnChange(event: any): void {
        let value = event.args.item.value;
        this.myChart.seriesGroups()[0].series[0].symbolType = value;
        this.myChart.update();
    }

    dropDownSerie2SymbolOnChange(event: any): void {
        let value = event.args.item.value;
        this.myChart.seriesGroups()[0].series[1].symbolType = value;
        this.myChart.update();
    }

}