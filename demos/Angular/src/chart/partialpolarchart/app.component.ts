import { Component, ViewChild, OnInit } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

    chartInstance;

    ngOnInit(): void {
       this.chartInstance = this.myChart
    }

    dataset: any[] = [
        { City: 'London', SalesCountJan: 210, SalesRevenueJan: 123 },
        { City: 'Madrid', SalesCountJan: 190, SalesRevenueJan: 114 },
        { City: 'Munich', SalesCountJan: 201, SalesRevenueJan: 112 },
        { City: 'Amsterdam', SalesCountJan: 110, SalesRevenueJan: 98 },
        { City: 'Paris', SalesCountJan: 105, SalesRevenueJan: 93 },
        { City: 'Prague', SalesCountJan: 54, SalesRevenueJan: 100 }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 5 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'City',
        valuesOnTicks: true,
        labels: { autoRotate: true }
    };

    valueAxis: any =
    {
        labels: {
            formatSettings: { decimalPlaces: 0 },
            autoRotate: true
        }
    };

    seriesGroups: any =
    [
        {
            polar: true,
            endAngle: 270,
            radius: 120,
            type: 'line',
            series: [
                { dataField: 'SalesCountJan', displayText: 'Sales count', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                { dataField: 'SalesRevenueJan', displayText: 'Revenue', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
            ]
        }
    ];

    sliderStartAngle(event: any): void {
        let value = event.args.value;
        this.chartInstance.seriesGroups()[0].startAngle = value;
        this.chartInstance.update();
    }

    sliderEndAngle(event: any): void {
        let value = 360 - event.args.value;
        this.chartInstance.seriesGroups()[0].endAngle = value;
        this.chartInstance.update();
    }

    sliderRotate(event: any): void {
        let value = event.args.value;
        let endAngle = this.chartInstance.seriesGroups()[0].endAngle;
        if (isNaN(endAngle))
            endAngle = 360;
        let startAngle = this.chartInstance.seriesGroups()[0].startAngle
        if (isNaN(startAngle))
            startAngle = 0;
        let diff = endAngle - startAngle;
        this.chartInstance.seriesGroups()[0].startAngle = value;
        this.chartInstance.seriesGroups()[0].endAngle = value + diff;
        this.chartInstance.update();
    }

    sliderRadius(event: any): void {
        let value = event.args.value;
        this.chartInstance.seriesGroups()[0].radius = value;
        this.chartInstance.update();
    }

    checkBoxTicksBetween(event: any): void {
        this.chartInstance.xAxis().valuesOnTicks = !event.args.checked;
        this.chartInstance.update();
    }

    checkBoxAutoRotate(event: any): void {
        this.chartInstance.xAxis().labels.autoRotate = event.args.checked;
        this.chartInstance.valueAxis().labels.autoRotate = event.args.checked;
        this.chartInstance.update();
    }
}