import { Component, ViewChild } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { ItemsEnumeration } from '../../../items.enum';

import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

@Component({
    selector: 'chartGeneral',
    templateUrl: './chartgeneral.component.html'
})

export class ChartGeneral {
    @ViewChild('reference') chart: jqxChartComponent;

    private enumItems = new ItemsEnumeration();

    constructor(private _dataServices: DataService) {
        this._dataServices.getItemData(this.enumItems.piechart)
            .then(result => {
                this.source.localdata = result;
                this.dataAdapter.dataBind();
                this.chart.source(this.dataAdapter);
                this.chart.addColorScheme('myScheme', ['#F1495B', '#4d5866', '#888D94']);
                this.chart.colorScheme('myScheme');
            })
            .catch(error => {
                console.log("Error with 'ChartGeneral' method", error);
            });
    }
    
    source: any =
    {
        datafields: [
            { name: 'earnings' },
            { name: 'year' }
        ],
        datatype: 'json'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + error); } });

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };
    seriesGroups: any = [
        {
            type: 'donut',
            showLabels: true,
            enableSelection: true,
            series:
            [
                {
                    dataField: 'earnings',
                    displayText: 'year',
                    labelRadius: 95,
                    initialAngle: 15,
                    radius: 140,
                    innerRadius: 60,
                    centerOffset: 0
                }
            ]
        }
    ];
}