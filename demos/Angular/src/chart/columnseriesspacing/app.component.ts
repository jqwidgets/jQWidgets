import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';
import { jqxSliderComponent } from 'jqwidgets-ng/jqxslider';
import { jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;
    @ViewChild('btnEnableSeriesGroup1', { static: false }) btnEnableSeriesGroup1: jqxCheckBoxComponent;
    @ViewChild('btnEnableSeriesGroup2', { static: false }) btnEnableSeriesGroup2: jqxCheckBoxComponent;
    @ViewChild('btnStackedSeriesGroup1', { static: false }) btnStackedSeriesGroup1: jqxCheckBoxComponent;
    @ViewChild('btnStackedSeriesGroup2', { static: false }) btnStackedSeriesGroup2: jqxCheckBoxComponent;

    chartInstance;

    ngAfterViewInit(): void {
        this.chartInstance = this.myChart.getInstance();
    }

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    sampleData: any[] = [
        { Position: 0, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 30, Serie5: 10, Serie6: 5 },
        { Position: 1, Serie1: 25, Serie2: 25, Serie3: 5, Serie4: 20, Serie5: 20, Serie6: 10 },
        { Position: 3, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 10, Serie5: 20, Serie6: 15 },
        { Position: 6, Serie1: 35, Serie2: 25, Serie3: 45, Serie4: 5, Serie5: 30, Serie6: 20 },
        { Position: 7, Serie1: 5, Serie2: 20, Serie3: 25, Serie4: 20, Serie5: 40, Serie6: 15 },
        { Position: 9, Serie1: 30, Serie2: 10, Serie3: 30, Serie4: 10, Serie5: 5, Serie6: 20 },
        { Position: 10, Serie1: 60, Serie2: 45, Serie3: 10, Serie4: 20, Serie5: 10, Serie6: 15 }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'Position',
        tickMarks: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        gridLines: {
            visible: true,
            interval: 1,
            color: '#BCBCBC'
        },
        flip: false,
        valuesOnTicks: false
    };

    valueAxis: any =
    {
        unitInterval: 10,
        title: { text: 'Value' },
        tickMarks: { color: '#BCBCBC' },
        gridLines: { color: '#BCBCBC' },
        labels: {
            horizontalAlignment: 'right'
        },
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 25,
            seriesGapPercent: 10,
            columnsMaxWidth: 40,
            columnsMinWidth: 1,
            series: [
                { dataField: 'Serie1', displayText: 'Serie1' },
                { dataField: 'Serie2', displayText: 'Serie2' },
                { dataField: 'Serie3', displayText: 'Serie3' }
            ]
        }
    ];

    updateSeriesGroupsVisibility(): void {
        this.chartInstance.seriesGroups = [];

        if (this.btnEnableSeriesGroup1.checked()) {
            this.chartInstance.seriesGroups[0] =
                {
                    type: 'column',
                    columnsGapPercent: 25,
                    seriesGapPercent: 10,
                    columnsMaxWidth: 40,
                    columnsMinWidth: 1,
                    series: [
                        { dataField: 'Serie1', displayText: 'Serie1' },
                        { dataField: 'Serie2', displayText: 'Serie2' },
                        { dataField: 'Serie3', displayText: 'Serie3' }
                    ]
                };
        }

        if (this.btnEnableSeriesGroup2.checked()) {
            let index = this.chartInstance.seriesGroups.length > 0 ? 1 : 0;

            this.chartInstance.seriesGroups[index] =
                {
                    type: 'column',
                    greyScale: true,
                    columnsGapPercent: 25,
                    seriesGapPercent: 10,
                    columnsMaxWidth: 40,
                    columnsMinWidth: 1,
                    series: [
                        { dataField: 'Serie4', displayText: 'Serie4' },
                        { dataField: 'Serie5', displayText: 'Serie5' },
                        { dataField: 'Serie6', displayText: 'Serie6' }
                    ]
                };
        }
        this.updateSeriesGroupsStacking();
    }

    updateSeriesGroupsStacking(): void {
        if (this.btnEnableSeriesGroup1.checked()) {
            if (this.btnStackedSeriesGroup1.checked()) {
                this.chartInstance.seriesGroups[0].type = 'stackedcolumn';
            }
            else {
                this.chartInstance.seriesGroups[0].type = 'column';
            }
        }

        if (this.btnEnableSeriesGroup2.checked()) {
            if (this.btnStackedSeriesGroup2.checked()) {
                this.chartInstance.seriesGroups[this.chartInstance.seriesGroups.length - 1].type = 'stackedcolumn';
            }
            else {
                this.chartInstance.seriesGroups[this.chartInstance.seriesGroups.length - 1].type = 'column';
            }
        }
        this.chartInstance.refresh();
    }

    sliderColumnsGapPercent(event: any, series: number): void {
        this.eventHandler(event, series, 'columnsGapPercent');
    };

    sliderSeriesGap(event: any, series: number): void {
        this.eventHandler(event, series, 'seriesGapPercent');
    };

    sliderMinWidth(event: any, series: number): void {
        this.eventHandler(event, series, 'columnsMinWidth');
    };

    sliderMaxWidth(event: any, series: number): void {
        this.eventHandler(event, series, 'columnsMaxWidth');
    };

    eventHandler(event: any, series: number, propName) {
        let seriesGroups = this.chartInstance.seriesGroups;
        if (seriesGroups.length !== 0) {
            if (seriesGroups.length < 2) {
                let serieDataField = seriesGroups[0].series[0].dataField;
                let serie = serieDataField == 'Serie1' ? 0 : 1;
                if (series !== serie) return;
                seriesGroups[0][propName] = event.args.value;
            } else {
                seriesGroups[series][propName] = event.args.value;
            }
            this.chartInstance.refresh();
        }
    }
}