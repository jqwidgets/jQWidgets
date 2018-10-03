import { Component, ViewChild } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { ItemsEnumeration } from '../../../items.enum';
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

@Component({
	selector: 'chartMonthly',
    templateUrl: './chartmonthly.component.html'
})

export class ChartMonthly {
    @ViewChild('referenceMonthly') chart: jqxChartComponent;

    private enumItems = new ItemsEnumeration();

    constructor(private _dataServices: DataService) {
        this._dataServices.getItemData(this.enumItems.revenueschart)
            .then(result => {
                this.revenuesSource.localdata = result;
                this.revenuesDataAdapter.dataBind();
                this.chart.source(this.revenuesDataAdapter);
                this.chart.addColorScheme('myScheme', ['#F1495B', '#4d5866', '#888D94']);
                this.chart.colorScheme('myScheme');
            })
            .catch(error => {
                console.log("Error with 'ChartMonthly' method", error);
            });
    }
    
    revenuesSource: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'Month' },
            { name: '2014' },
            { name: '2015' },
            { name: '2016' }
        ]
    };

    revenuesDataAdapter: any = new jqx.dataAdapter(this.revenuesSource, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + error); } });
    
    title: string = 'Monthly revenues';
    description: string = '(2014, 2015, 2016)';
    enableAnimations: boolean = true;
    showLegend: boolean = true;
    borderLineWidth: number = 0.5;
    padding: any = { left: 10, top: 10, right: 15, bottom: 10 };
    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
    xAxis: any = {
        dataField: 'Month',
        unitInterval: 1,
        tickMarks: { visible: true, interval: 1 },
        gridLinesInterval: { visible: true, interval: 1 },
        valuesOnTicks: false,
        padding: { bottom: 10 }
    };
    valueAxis: any = {
        minValue: 1200,
        maxValue: 2500,
        title: { text: 'Revenues<br><br>' },
        labels: { horizontalAlignment: 'right' }
    };
    seriesGroups: any =
    [
        {
            type: 'line',
            series:
            [
                {
                    dataField: '2014',
                    symbolType: 'square',
                    labels:
                    {
                        visible: true,
                        backgroundColor: '#FEFEFE',
                        backgroundOpacity: 0.2,
                        borderColor: '#7FC4EF',
                        borderOpacity: 0.7,
                        padding: { left: 5, right: 5, top: 0, bottom: 0 }
                    }
                },
                {
                    dataField: '2015',
                    symbolType: 'square',
                    labels:
                    {
                        visible: true,
                        backgroundColor: '#FEFEFE',
                        backgroundOpacity: 0.2,
                        borderColor: '#7FC4EF',
                        borderOpacity: 0.7,
                        padding: { left: 5, right: 5, top: 0, bottom: 0 }
                    }
                },
                {
                    dataField: '2016',
                    symbolType: 'square',
                    labels:
                    {
                        visible: true,
                        backgroundColor: '#FEFEFE',
                        backgroundOpacity: 0.2,
                        borderColor: '#7FC4EF',
                        borderOpacity: 0.7,
                        padding: { left: 5, right: 5, top: 0, bottom: 0 }
                    }
                }
            ]
        }
    ]
}