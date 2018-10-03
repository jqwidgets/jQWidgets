import { Component, ViewChild } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { ItemsEnumeration } from '../../../items.enum';
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

@Component({
	selector: 'chartProduct',
    templateUrl: './chartproduct.component.html'
})

export class ChartProduct {
    @ViewChild('referenceProduct') chart: jqxChartComponent;

    private enumItems = new ItemsEnumeration();

    constructor(private _dataServices: DataService) {
        this._dataServices.getItemData(this.enumItems.popularproductschart)
            .then(result => {
                this.source.localdata = result;
                this.dataAdapter.dataBind();
                this.chart.source(this.dataAdapter);
                this.chart.addColorScheme('myScheme', ['#888D94']);
                this.chart.colorScheme('myScheme');
            })
            .catch(error => {
                console.log("Error with 'ChartGeneral' method", error);
            });
    }

    source: any =
    {
        datafields: [
            { name: 'Product' },
            { name: 'Sales' },
            { name: 'av' }
        ],
        datatype: 'json'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + error); } });

    title: string = 'Product Popularity';
    description: string = 'per sold product';
    showLegend: boolean = false;
    enableAnimations: boolean = true;
    borderLineWidth: number = 0.5;
    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };
    xAxis: any = {
        dataField: 'Product',
        flip: false,
        gridLines: { visible: false }
    };
    seriesGroups: any =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            valueAxis:
            {
                title: {
                    text: 'Amount<br><br>'
                },
                gridLines: { visible: false }
            },
            series:
            [
                { dataField: 'Sales' }
            ],
            bands: [
                {
                    minValue: 1790, maxValue: 1790, fillColor: '#F1495B', lineWidth: 2, dashStyle: '2,2'
                }
            ],
            annotations: [
                {
                    type: 'rect',
                    yValue: 1790,
                    xValue: 6,
                    offset: { x: -850, y: -25 },
                    width: 85,
                    height: 20,
                    fillColor: '#F1495B',
                    lineColor: '#F1495B',
                    text: {
                        value: 'Average',
                        fillColor: 'white',
                        offset: {
                            x: 15,
                            y: 4
                        },
                        'class': 'redLabel',
                        angle: 0
                    }
                }
            ]
        }
    ]
}