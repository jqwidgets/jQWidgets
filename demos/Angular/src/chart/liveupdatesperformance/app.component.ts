import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;
    @ViewChild('myBtn', { static: false }) myBtn: jqxButtonComponent;

    ngOnInit() {
        this.generateChartData();
    }

    data: any[] = [];

    padding: any = { left: 10, top: 10, right: 10, bottom: 10 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'key',
        unitInterval: 1,
        valuesOnTicks: true,
        gridLines: { visible: false }
    };

    valueAxis: any =
    {
        minValue: 0,
        maxValue: 750,
        title: { text: 'Index Value<br>' },
    };

    seriesGroups: any[] =
    [
        {
            type: 'line',
            useGradientColors: false,
            series: [
                { dataField: 'value1', displayText: 'value1', lineWidth: 2, symbolType: 'circle' }
            ]
        },
        {
            type: 'spline',
            useGradientColors: false,
            columnsGapPercent: 50,
            alignEndPointsWithIntervals: true,
            series: [
                { dataField: 'value2', displayText: 'value2' }
            ]
        },
        {
            type: 'column',
            useGradientColors: false,
            columnsGapPercent: 50,
            alignEndPointsWithIntervals: true,
            series: [
                { dataField: 'value3', displayText: 'value3' }
            ]
        }
    ];

    colorsSchemesList: string[] = ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'];

    colorsOnChange(event: any): void {
        let value = event.args.item.value;
        this.myChart.colorScheme(value);
        this.myChart.update();
    }


    timerFunction = () => {
        let data = this.myChart.source();
        data.splice(0, 1);
        data.push({
            key: data[data.length - 1].key + 1,
            value1: (Math.random() * 200) % 200 + 200,
            value2: (Math.random() * 200) % 200 + 500,
            value3: (Math.random() * 200) % 200,
        });
        this.myChart.update();
    };

    timer = setInterval(this.timerFunction, this.refreshTimeout());

    btnOnClick(event): void {
        if (this.timer) {
            clearInterval(this.timer);
            this.myBtn.val('Resume');
            this.timer = undefined;
        }
        else {
            this.timer = setInterval(this.timerFunction, this.refreshTimeout());
            this.myBtn.val('Pause');
        }
    }

    generateChartData = (): void => {
        let max = 200;
        let timestamp = new Date();
        for (let i = 0; i < 20; i++) {
            this.data.push({
                key: i,
                value1: (Math.random() * 200) % 200 + 200,
                value2: (Math.random() * 200) % 200 + 500,
                value3: (Math.random() * 200) % 200,
            });
        }
    }

    refreshTimeout(): number {
        return 100;
    }
}