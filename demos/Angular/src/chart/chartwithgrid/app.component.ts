import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;
    @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

    sampleData: any[] = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];

    dataAdapter: any = new jqx.dataAdapter({
        datafields: [
            { name: 'Day', type: 'string' },
            { name: 'Keith', type: 'number' },
            { name: 'Erica', type: 'number' },
            { name: 'George', type: 'number' }
        ],
        localdata: this.sampleData,
        datatype: 'array'
    });

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'Day',
        gridLines: { visible: true }
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis:
            {
                visible: true,
                unitInterval: 10,
                minValue: 0,
                maxValue: 100,
                title: { text: 'Time in minutes' }
            },
            series: [
                { dataField: 'Keith', displayText: 'Keith' },
                { dataField: 'Erica', displayText: 'Erica' },
                { dataField: 'George', displayText: 'George' }
            ]
        }
    ];

    columns: any[] =
    [
        {
            text: 'Day', width: '40%', datafield: 'Day', filtertype: 'checkedlist',
            filteritems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
        { text: 'Keith', width: '20%', datafield: 'Keith' },
        { text: 'Erica', width: '20%', datafield: 'Erica' },
        { text: 'George', width: '20%', datafield: 'George' }
    ];

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    gridOnFilter(): void {
        const rows = this.myGrid.getrows();

        this.myChart.source(rows);
        this.myChart.refresh();
    }
}
