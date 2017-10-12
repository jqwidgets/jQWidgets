import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from '../../../jqwidgets-ts/angular_jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myChart') myChart: jqxChartComponent;

    source: any =
    {
        datatype: 'csv',
        datafields: [
            { name: 'Country' },
            { name: 'GDP' },
            { name: 'DebtPercent' },
            { name: 'Debt' }
        ],
        url: '../sampledata/gdp_dept_2010.txt'
    };
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'Country'
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            valueAxis:
            {
                unitInterval: 5000,
                title: { text: 'GDP & Debt per Capita($)<br>' }
            },
            series: [
                { dataField: 'GDP', displayText: 'GDP per Capita' },
                { dataField: 'Debt', displayText: 'Debt per Capita' }
            ]
        },
        {
            type: 'line',
            valueAxis:
            {
                unitInterval: 10,
                title: { text: 'Debt (% of GDP)<br>' },
                position: 'right',
                gridLines: { visible: false }
            },
            series: [
                { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
            ]
        }
    ];

    jpegButtonOnClick() {
        this.myChart.saveAsJPEG('myChart.jpeg', 'https://www.jqwidgets.com/export_server/export.php');
    };
    pngButtonOnClick() {
        this.myChart.saveAsPNG('myChart.png', 'https://www.jqwidgets.com/export_server/export.php');
    };
    pdfButtonOnClick() {
        this.myChart.saveAsPDF('myChart.pdf', 'https://www.jqwidgets.com/export_server/export.php');
    };
}