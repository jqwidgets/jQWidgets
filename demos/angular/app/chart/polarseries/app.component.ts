 
import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from '../../../../../jqwidgets-ts/angular_jqxChart';
import { jqxSliderComponent } from '../../../../../jqwidgets-ts/angular_jqxslider';
import { jqxDropDownListComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownlist';

@Component({
    selector: 'my-app',
    templateUrl: '../app/chart/polarseries/app.component.htm'
}) 

export class AppComponent
{
    @ViewChild('chart') myChart: jqxChartComponent;

    sliderStartAngleOnChange(event: any): void
    {
        let value = event.args.value;
        this.seriesGroups[0].startAngle = value;
        this.seriesGroups[0].endAngle = value + 360;
        this.myChart.refresh();
    }
    sliderRadiusOnChange(event: any): void
    {
        let value = event.args.value;
        this.seriesGroups[0].radius = value;
        this.myChart.refresh();
    }
    dropDownListColorsOnChange(event: any): void
    {
        let value = event.args.item.value;
        this.colorScheme = value;
    }
    dropDownListSeriesOnSelect(event: any): void
    {
        let args = event.args;
        if (args)
        {
            let value = args.item.value;
            this.seriesGroups[0].type = value;
            this.myChart.refresh();
        }
    }

    source: any =
    {
        datatype: "tab",
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        url: '../sampledata/homeprices.txt'
    };

    dataAdapter: any = new $.jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    title: string = "U.S. Real Home Price vs Building Cost Indeces (1950-2010)";

    colorScheme: string = 'scheme01';

    description: string = "Source: http://www.econ.yale.edu/~shiller/data.htm";

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 5 };

    xAxis: any = 
    {
        dataField: 'Year',
        unitInterval: 10,
        maxValue: 2010,
        valuesOnTicks: true,
        labels: { autoRotate: true }
    };

    seriesGroups: any[] = 
    [
        {
            polar: true,
            radius: 120,
            type: 'splinearea',
            valueAxis:
            {
                labels: {
                    formatSettings: { decimalPlaces: 0 },
                    autoRotate: true
                }
            },
            series: [
                { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7, lineWidth: 1, radius: 2 },
                { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.7, lineWidth: 1, radius: 2 }
            ]
        }
    ];   

    colorsSchemesList: string[] = ["scheme01", "scheme02", "scheme03", "scheme04", "scheme05", "scheme06", "scheme07", "scheme08"];

    seriesList: string[] = ["splinearea", "spline", "column", "scatter", "stackedcolumn", "stackedsplinearea", "stackedspline"];
}
