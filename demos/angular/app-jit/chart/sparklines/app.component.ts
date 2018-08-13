import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    data: any[] = [
        { city: 'London', count: 24, monthlySales: 1128430, dailyTrend: [12, 8, 9, 3, 4, 5, 6, 2, 3, 4, 5, 6, 12, 4, 11, 4, 13, 9, 10, 12, 12, 8, 13, 7, 15, 9, 11, 12, 9, 8] },
        { city: 'New York', count: 35, monthlySales: 1434650, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
        { city: 'Berlin', count: 11, monthlySales: 498430, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
        { city: 'Madrid', count: 4, monthlySales: 181760, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
        { city: 'Paris', count: 9, monthlySales: 381760, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
    ];

    source: any =
    {
        localData: this.data,
        dataType: 'array'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    columns: any[] =
    [
        {
            text: 'City', align: 'center', dataField: 'city', width: 250,
        },
        {
            text: 'Store locations', align: 'center', dataField: 'count', width: 200
        },
        {
            text: 'Monthly sales', align: 'center', dataField: 'monthlySales'
        },
        {
            text: 'Daily sales trend', align: 'center', dataField: 'dailyTrend',
            cellsRenderer: (row: any, column: any, value: any, rowData: any) => {
                let div = '<div id="sparklineContainer' + row + '" style="margin: 0; margin-bottom: 0; width: 100%; height: 40px;"></div>';
                return div;
            }
        }
    ];

    createSparkline(selector, data, type) {

        let options =
            {
                title: '',
                description: '',
                showLegend: false,
                enableAnimations: false,
                showBorderLine: false,
                showToolTips: false,
                backgroundColor: 'transparent',
                padding: { left: 0, top: 0, right: 0, bottom: 0 },
                titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
                source: data,
                xAxis:
                {
                    visible: false,
                    valuesOnTicks: false
                },
                colorScheme: 'scheme01',
                seriesGroups:
                [
                    {
                        type: type,
                        columnsGapPercent: 0,
                        columnsMaxWidth: 2,
                        valueAxis:
                        {
                            minValue: 0,
                            visible: false
                        },
                        series: [
                            {
                                linesUnselectMode: 'click',
                                colorFunction: (value: any, itemIndex: any, serie: any, group: any): string => {
                                    return (value < 10) ? '#307DD7' : '#AA4643';
                                }
                            }
                        ]
                    }
                ]
            };

        let myChart: jqwidgets.jqxChart =
            jqwidgets.createInstance(`#${selector}`, 'jqxChart', options);

    }

    rendered = (): void => {
        for (let i = 0; i < this.data.length; i++) {
            this.createSparkline('sparklineContainer' + i, this.data[i].dailyTrend, i % 2 == 0 ? 'column' : 'line');
        }
    };

}