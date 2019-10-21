import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;
    @ViewChild('dropDownSerie1Symbol', { static: false }) dropDownSerie1Symbol: jqxDropDownListComponent;
    @ViewChild('dropDownSerie2Symbol', { static: false }) dropDownSerie2Symbol: jqxDropDownListComponent;

    sampleData: any = [
        { City: 'New York', SalesQ1: 310500, SalesQ2: 210500, YoYGrowthQ1: 1.05, YoYGrowthQ2: 1.25 },
        { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowthQ1: 1.15, YoYGrowthQ2: 0.95 },
        { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowthQ1: 1.45, YoYGrowthQ2: 1.15 },
        { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowthQ1: 0.45, YoYGrowthQ2: 0.55 },
        { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowthQ1: 1.65, YoYGrowthQ2: 1.05 },
        { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.15 },
        { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.65 }
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
        unitInterval: 50000,
        minValue: 50000,
        maxValue: 350000,
        title: { text: 'Sales ($)<br>' },
        labels: {
            formatSettings: { prefix: '$', thousandsSeparator: ',' },
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'bubble',
            series: [
                { dataField: 'SalesQ1', radiusDataField: 'YoYGrowthQ1', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q1' },
                { dataField: 'SalesQ2', radiusDataField: 'YoYGrowthQ2', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q2' }
            ]
        }
    ];

    symbolsList: string[] = ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right'];

    dropDown1OnChange(event: any) {
        let value = event.args.item.value;
        this.myChart.seriesGroups()[0].series[0].symbolType = value;
        this.myChart.update();
    }

    dropDown2OnChange(event: any) {
        let value = event.args.item.value;
        this.myChart.seriesGroups()[0].series[1].symbolType = value;
        this.myChart.update();
    }
}
