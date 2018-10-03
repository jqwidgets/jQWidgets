import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';

@Component({
    selector: 'app-workload-chart',
    templateUrl: './workload-chart.component.html',
    styleUrls: ['./workload-chart.component.css']
})
export class WorkloadChartComponent implements OnInit {

    @ViewChild('tree') tree: jqxTreeComponent;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.treeDataAdapter.dataBind();
    }

    private expanderHeight: number = window.innerHeight - 150;

    private treeSource: any = {
        datatype: "json",
        datafields: [
            { name: 'id' },
            { name: 'parentid' },
            { name: 'text' },
            { name: 'html' },
            { name: 'value' },
            { name: 'icon' }
        ],
        id: 'id',
        url: "https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/fitnessmanager/data.php?usedwidget=workloadtree"
    };


    private treeDataAdapter = new jqx.dataAdapter(this.treeSource, {
        loadComplete: () => {
            let records = this.treeDataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);
            for (let record of records) {
                record.icon = '../../assets/' + record.icon;
                for (let subRecord of record.items) {
                    subRecord.icon = '../../assets/' + subRecord.icon;
                }
            }
            this.tree.source(records);
        }
    });

    private tagCloudSource: any = {
        datatype: 'json',
        datafields: [
            { name: 'fitnessInstructorName' },
            { name: 'clientsPerWeek' }
        ],
        url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/fitnessmanager/data.php?usedwidget=workloadtaglloud'
    };

    private tagCloudDataAdapter = new jqx.dataAdapter(this.tagCloudSource);

    private chartPadding: jqwidgets.ChartPadding = {
        left: 10,
        top: 10,
        right: 15,
        bottom: 10
    };

    private chartTitlePadding: jqwidgets.ChartPadding = {
        left: 90,
        top: 0,
        right: 0,
        bottom: 10
    };

    private chartSource: any = {
        datatype: 'json',
        datafields: [
            { name: 'Day' },
            { name: 'Andrew' },
            { name: 'Nancy' },
            { name: 'Janet' },
            { name: 'Margaret' }
        ],
        url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/fitnessmanager/data.php?usedwidget=workloadchart'
    };

    private chartDataAdapter = new jqx.dataAdapter(this.chartSource);

    private chartXAxis: jqwidgets.ChartXAxis = {
        dataField: 'Day',
        unitInterval: 1,
        tickMarks: { visible: true, interval: 1 },
        valuesOnTicks: false,
        padding: { bottom: 10, left: 0, right: 0, top: 0 },
        gridLines: {
            visible: false
        }
    };

    private chartValueAxis: jqwidgets.ChartValueAxis = {
        unitInterval: 1,
        minValue: 0,
        maxValue: 5,
        title: { text: 'Clients per day<br><br>' },
        labels: { horizontalAlignment: 'right' },
        gridLines: {
            visible: false
        }
    };

    private chartSeriesGroups: jqwidgets.ChartSeriesGroup[] = [{
        type: 'line',
        series:
            [
                {
                    dataField: 'Andrew',
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
                    dataField: 'Nancy',
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
                    dataField: 'Janet',
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
                    dataField: 'Margaret',
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
    }];
}
