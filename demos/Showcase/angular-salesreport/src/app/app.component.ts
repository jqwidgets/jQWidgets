import { Component, ViewChild, EventEmitter } from '@angular/core';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable';
import { jqxLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlayout';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('dropDownOne') dropDownOne: jqxDropDownListComponent;
    @ViewChild('dropDownTwo') dropDownTwo: jqxDropDownListComponent;
    @ViewChild('myLayout') myLayout: jqxLayoutComponent;
    @ViewChild('window') window: jqxWindowComponent;

    salesPerMonthTabs: any;
    salesPerMonthDataTable: any;
    expensesPerMonthChart: any;
    expensesPerMonthDataTable: any;
    employeeSalaryChart: any;
    employeeSalaryDataTable: any;
    leftBarGauge: any;
    rightBarGauge: any;
    yearSalesChart: any;

    leftSalesChart: jqxChartComponent;
    rightSalesChart: jqxChartComponent;
    spriderChart: jqxChartComponent;

    selectedReportIndex: number;
    selectedEmployeeOne: number = 1
    selectedEmployeeTwo: number = 2;
    barGaugesCreated: boolean;

    ngAfterViewInit(): void {
        this.myLayout.refresh();
    }

    dropDownListSource: any = {
        datatype: 'json',
        datafields: [
            { name: 'fullname', type: 'string', map: 'employeeName' },
            { name: 'picture', type: 'string', map: 'employeePhoto' },
            { name: 'employeeId' }
        ],
        async: false,
        url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=employeedropdown'
    };

    dropDownListDataAdapter = new jqx.dataAdapter(this.dropDownListSource, { async: true, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.dropDownListSource.url + '" : ' + error); } });

    dropDownRenderer = (index: number, label: string, value: any): string => {
        let data = this.dropDownListDataAdapter.getrecords();
        let datarecord = data[index];
        let imgUrl = '../assets/images/' + datarecord.picture;
        let img = `<img height="50" width"45" src="${imgUrl}"/>`;
        let table = `<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">${img}</td><td>${datarecord.fullname} - ID: ${value}</td></tr></table>`;
        return table;
    };

    salesData: any = [
        { sales: 'Sales Comparision' },
        { sales: 'Expenses Comparison' },
        { sales: 'Employee Salary Comparison' },
        { sales: 'Year Sales Comparison' }
    ];

    dataTableSource: any = {
        dataType: 'json',
        dataFields: [{
            name: 'sales',
            type: 'string'
        }],
        localdata: this.salesData
    };

    dataTableColumns: jqwidgets.DataTableColumns[] = [{
        text: '',
        dataField: 'sales',
        width: '100%'
    }];

    layout: jqwidgets.LayoutLayout[] = [{
        type: 'layoutGroup',
        orientation: 'horizontal',
        items: [
            {
                type: 'layoutGroup',
                orientation: 'vertical',
                width: '15%',
                items: [{
                    type: 'tabbedGroup',
                    height: '100%',
                    items: [{
                        type: 'layoutPanel',
                        title: 'Report Filter',
                        contentContainer: 'LeftPannel',
                        initContent: () => {
                            const dataTable = jqwidgets.createInstance('#dataTable', 'jqxDataTable', {
                                source: this.dataTableSource, width: '100%', height: '100%', showHeader: false,
                                theme: 'metro', columns: this.dataTableColumns
                            });
                            this.selectedReportIndex = 0;
                            dataTable.selectRow(0);
                            dataTable.addEventHandler('rowSelect', event => this.changeReport(event));
                        }
                    }]
                }]
            }, {
                type: 'layoutGroup',
                orientation: 'vertical',
                width: '85%',
                items: [{
                    type: 'tabbedGroup',
                    height: '100%',
                    items: [{
                        type: 'layoutPanel',
                        title: '',
                        contentContainer: 'RightPannel',
                        initContent: () => {
                            setTimeout(() => {
                                this.initSalesTabs();
                                this.initSalesPerMonthDataTable();
                                this.initExpensesChart();
                                this.initExpensesPerMonthDataTable();
                                this.initEmployeeSalaryChart();
                                this.initEmployeeSalaryDataTable();
                                //this.initYearSalesGauges();
                                this.initYearSalesChart();
                            }, 1);
                        }
                    }]
                }]
            }]
    }];

    initSalesTabs = () => {
        let tabsOptions = {
            width: '100%',
            height: '50%',
            theme: 'metro',
            initTabContent: () => {
                this.initSalesTabOne();
                this.initSalesTabTwo();
            }
        };

        this.salesPerMonthTabs = jqwidgets.createInstance('#salesPerMonthTabs', 'jqxTabs', tabsOptions);
    }

    initSalesTabOne = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();

        let leftChartSource =
            {
                datafields: [
                    { name: 'OrderDate' },
                    { name: 'Subtotal' }
                ],
                url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salespermonthchart&employeeid=1',
                datatype: 'json'
            };

        let rightChartSource =
            {
                datafields: [
                    { name: 'OrderDate' },
                    { name: 'Subtotal' }
                ],
                url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salespermonthchart&employeeid=2',
                datatype: 'json'
            };

        let leftChartDataAdapter = new jqx.dataAdapter(leftChartSource, { loadError: function (xhr, status, error) { alert('Error loading "' + leftChartSource.url + '" : ' + error); } });

        let rightChartDataAdapter = new jqx.dataAdapter(rightChartSource, { loadError: function (xhr, status, error) { alert('Error loading "' + rightChartSource.url + '" : ' + error); } });

        let toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue) => {
            let newValue = value.toString().replace(/[.].*/, '');
            if (newValue.length > 3) {
                newValue = newValue.substr(0, newValue.length - 3) + ',' + newValue.substr(newValue.length - 3);
            }
            let month = months[categoryValue.getMonth()];
            return '<DIV style="text-align:left"><b>Sales: $' + newValue +
                '</b><br />Month: ' + month;
        };

        let leftChartOptions = {

            title: dropDownItemOne.label,
            description: '',
            enableAnimations: false,
            showLegend: false,
            showBorderLine: false,
            toolTipFormatFunction: toolTipCustomFormatFn,
            padding: { left: 15, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            source: leftChartDataAdapter,
            xAxis:
                {
                    dataField: 'OrderDate',
                    formatFunction: function (value) {
                        return months[value.getMonth()];
                    },
                    labels: { class: 'bold' },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-1997',
                    maxValue: '31-12-1997'
                },
            colorScheme: 'scheme25',
            seriesGroups:
                [
                    {
                        type: 'column',
                        columnsGapPercent: 50,
                        seriesGapPercent: 0,
                        valueAxis:
                            {
                                maxValue: 20000,
                                labels: {
                                    formatFunction: function (value) {
                                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                                    }
                                },
                                displayValueAxis: true,
                                description: '',
                                axisSize: 'auto',
                                tickMarksColor: '#888888'
                            },
                        series: [
                            { dataField: 'Subtotal', displayText: '' }
                        ]
                    }
                ]
        }

        let rightChartOptions = {
            title: dropDownItemTwo.label,
            description: '',
            enableAnimations: false,
            showLegend: false,
            showBorderLine: false,
            toolTipFormatFunction: toolTipCustomFormatFn,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            source: rightChartDataAdapter,
            xAxis:
                {
                    dataField: 'OrderDate',
                    formatFunction: function (value) {
                        return months[value.getMonth()];
                    },
                    labels: { class: 'bold' },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-1997',
                    maxValue: '31-12-1997'
                },
            colorScheme: 'scheme03',
            seriesGroups:
                [
                    {
                        type: 'column',
                        columnsGapPercent: 50,
                        seriesGapPercent: 0,
                        valueAxis:
                            {
                                maxValue: 20000,
                                labels: {
                                    formatFunction: function (value) {
                                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                                    }
                                },
                                displayValueAxis: true,
                                description: '',
                                axisSize: 'auto',
                                tickMarksColor: '#888888'
                            },
                        series: [
                            { dataField: 'Subtotal', displayText: '' }
                        ]
                    }
                ]
        }

        this.leftSalesChart = jqwidgets.createInstance('#salesPerMonthLeftChart', 'jqxChart', leftChartOptions);
        this.rightSalesChart = jqwidgets.createInstance('#salesPerMonthRightChart', 'jqxChart', rightChartOptions);
    }

    initSalesTabTwo = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();

        let source = {
            datafields: [
                { name: 'OrderDate', type: 'date' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salespermonthgrid&employeeid1=1&employeeid2=2',
            datatype: 'json'
        };

        let dataAdapter = new jqx.dataAdapter(source, { loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });

        let toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue) => {
            var newValue = value.toString().replace(/[.].*/, '');
            if (newValue.length > 3) {
                newValue = newValue.substr(0, newValue.length - 3) + ',' + newValue.substr(newValue.length - 3);
            }
            var month = months[categoryValue.getMonth()];
            return '<DIV style="text-align:left"><b>Sales: $' + newValue +
                '</b><br />Month: ' + month;
        };

        let chartOptions = {
            title: '',
            description: '',
            enableAnimations: false,
            showLegend: true,
            showBorderLine: false,
            toolTipFormatFunction: toolTipCustomFormatFn,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
            source: dataAdapter,
            colorScheme: 'scheme05',
            xAxis:
                {
                    dataField: 'OrderDate',
                    formatFunction: function (value) {
                        return months[value.getMonth()];
                    },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-1997',
                    maxValue: '31-12-1997',
                    labels: { autoRotate: false }
                },
            valueAxis:
                {

                    labels: {
                        formatSettings: { decimalPlaces: 0 },
                        formatFunction: function (value) {
                            return Math.round(value / 1000) + ' K';
                        }
                    }
                },
            seriesGroups:
                [
                    {
                        spider: true,
                        startAngle: 0,
                        endAngle: 360,
                        radius: 140,
                        type: 'splinearea',
                        series: [
                            { dataField: 'Subtotal1', displayText: dropDownItemOne.label, opacity: 0.6, radius: 2, lineWidth: 2, symbolType: 'circle' },
                            { dataField: 'Subtotal2', displayText: dropDownItemTwo.label, opacity: 0.6, radius: 2, lineWidth: 2, symbolType: 'square' }
                        ]
                    }
                ]
        }

        this.spriderChart = jqwidgets.createInstance('#salesPerMonthSpiderChart', 'jqxChart', chartOptions);
    }

    initSalesPerMonthDataTable = () => {
        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();

        let tableSource = {
            datafields: [
                { name: 'OrderDate', type: 'date' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salespermonthgrid&employeeid1=1&employeeid2=2',
            datatype: 'json'
        };

        let tableDataAdapter = new jqx.dataAdapter(tableSource, { loadError: function (xhr, status, error) { alert('Error loading "' + tableSource.url + '" : ' + error); } });

        let tableOptions = {
            width: '100%',
            height: '50%',
            columnsHeight: 50,
            theme: 'metro',
            source: tableDataAdapter,
            columnsResize: true,
            columns: [
                {
                    text: '<p class="dataTableHeader">Month</p>', dataField: 'OrderDate', cellsFormat: 'MMMM', width: '25%', cellsRenderer: function (row, column, value) {
                        return '<b>' + value + '</b>';
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemOne.label + '</p>',
                    renderer: function () {
                        return '<p style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemOne.label + '</p>';
                    },
                    dataField: 'Subtotal1', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemTwo.label + '</p>',
                    renderer: function () {
                        return '<p  style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemTwo.label + '</p>';
                    },
                    dataField: 'Subtotal2', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">Total</p>', editable: false, datafield: 'total',
                    cellsRenderer: function (row, column, value, rowdata) {
                        var total = parseFloat(rowdata.Subtotal1) + parseFloat(rowdata.Subtotal2);
                        return '<div style="margin: 4px;" class="jqx-right-align">' + tableDataAdapter.formatNumber(total, 'c0').replace(/[.]/g, ',') + '</div>';
                    }
                }

            ]
        }

        this.salesPerMonthDataTable = jqwidgets.createInstance('#salesPerMonthDataTable', 'jqxDataTable', tableOptions);
    }

    initExpensesChart = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();

        let chartSource = {
            datafields: [
                { name: 'OrderDate' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=expensespermonthgridchart&employeeid1=1&employeeid2=2',
            datatype: 'json'
        }

        let chartDataAdapter = new jqx.dataAdapter(chartSource, { loadError: function (xhr, status, error) { alert('Error loading "' + chartSource.url + '" : ' + error); } });

        let toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue) => {
            var newValue = value.toString().replace(/[.].*/, '');
            if (newValue.length > 3) {
                newValue = newValue.substr(0, newValue.length - 3) + ',' + newValue.substr(newValue.length - 3);
            }
            var month = months[categoryValue.getMonth()];
            return '<DIV style="text-align:left"><b>Sales: $' + newValue +
                '</b><br />Month: ' + month;
        };

        let chartOptions = {
            title: 'Expenses Per Month Comparison',
            description: '',
            enableAnimations: false,
            showBorderLine: false,
            showLegend: true,
            toolTipFormatFunction: toolTipCustomFormatFn,
            padding: { left: 15, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            source: chartDataAdapter,
            colorScheme: 'scheme26',
            xAxis:
                {
                    dataField: 'OrderDate',
                    formatFunction: function (value) {
                        return months[value.getMonth()];
                    },
                    labels: { class: 'bold' },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-1997',
                    maxValue: '31-12-1997'
                },
            seriesGroups:
                [
                    {
                        type: 'column',
                        valueAxis:
                            {
                                labels: {
                                    formatFunction: function (value) {
                                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                                    }
                                },
                                displayValueAxis: true,
                                description: '',
                                axisSize: 'auto',
                                tickMarksColor: '#888888'
                            },
                        columnsGapPercent: 50,
                        seriesGapPercent: 5,
                        series: [
                            { dataField: 'Subtotal1', displayText: dropDownItemOne.label },
                            { dataField: 'Subtotal2', displayText: dropDownItemTwo.label }
                        ]
                    }

                ]
        }

        this.expensesPerMonthChart = jqwidgets.createInstance('#expensesPerMonthChart', 'jqxChart', chartOptions);
    }

    initExpensesPerMonthDataTable = () => {
        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();

        let tableSource = {
            datafields: [
                { name: 'OrderDate', type: 'date' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=expensespermonthgridchart&employeeid1=1&employeeid2=2',
            datatype: 'json'
        };

        let tableDataAdapter = new jqx.dataAdapter(tableSource, { loadError: function (xhr, status, error) { alert('Error loading "' + tableSource.url + '" : ' + error); } });

        let tableOptions = {
            width: '100%',
            height: '50%',
            columnsHeight: 50,
            theme: 'metro',
            source: tableDataAdapter,
            columnsResize: true,
            columns: [
                {
                    text: '<p class="dataTableHeader">Month</p>', dataField: 'OrderDate', cellsFormat: 'MMMM', width: '25%', cellsRenderer: function (row, column, value) {
                        return '<b>' + value + '</b>';
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemOne.label + '</p>',
                    renderer: function () {
                        return '<p style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemOne.label + '</p>';
                    },
                    dataField: 'Subtotal1', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemTwo.label + '</p>',
                    renderer: function () {
                        return '<p  style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemTwo.label + '</p>';
                    },
                    dataField: 'Subtotal2', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">Total</p>', editable: false, datafield: 'total',
                    cellsRenderer: function (row, column, value, rowdata) {
                        var total = parseFloat(rowdata.Subtotal1) + parseFloat(rowdata.Subtotal2);
                        return '<div style="margin: 4px;" class="jqx-right-align">' + tableDataAdapter.formatNumber(total, 'c0').replace(/[.]/g, ',') + '</div>';
                    }
                }

            ]
        }

        this.expensesPerMonthDataTable = jqwidgets.createInstance('#expensesPerMonthDataTable', 'jqxDataTable', tableOptions);
    }

    initEmployeeSalaryChart = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();

        let chartSource = {
            datafields: [
                { name: 'OrderDate' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salarygridchart&employeeid1=1&employeeid2=2',
            datatype: 'json'
        }

        let chartDataAdapter = new jqx.dataAdapter(chartSource, { loadError: function (xhr, status, error) { alert('Error loading "' + chartSource.url + '" : ' + error); } });

        let toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue) => {
            var newValue = value.toString().replace(/[.].*/, '');
            if (newValue.length > 3) {
                newValue = newValue.substr(0, newValue.length - 3) + ',' + newValue.substr(newValue.length - 3);
            }
            var month = months[categoryValue.getMonth()];
            return '<DIV style="text-align:left"><b>Sales: $' + newValue +
                '</b><br />Month: ' + month;
        };

        let chartOptions = {
            title: 'Salary Per Month Comparison',
            description: '',
            enableAnimations: false,
            showBorderLine: false,
            showLegend: true,
            toolTipFormatFunction: toolTipCustomFormatFn,
            padding: { left: 15, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            source: chartDataAdapter,
            colorScheme: 'scheme01',
            xAxis:
                {
                    dataField: 'OrderDate',
                    formatFunction: function (value) {
                        return months[value.getMonth()];
                    },
                    labels: { class: 'bold' },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-1997',
                    maxValue: '31-12-1997'
                },
            seriesGroups:
                [{
                    type: 'line',
                    valueAxis:
                        {
                            labels: {
                                formatFunction: function (value) {
                                    return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                                }
                            },
                            displayValueAxis: true,
                            description: '',
                            axisSize: 'auto',
                            tickMarksColor: '#888888'
                        },
                    series:
                        [
                            {
                                dataField: 'Subtotal1',
                                displayText: dropDownItemOne.label,
                                symbolType: 'square',
                                formatFunction: function (value) {
                                    return '$' + value.toString().replace(/[.].*/, '');
                                },
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
                                dataField: 'Subtotal2',
                                displayText: dropDownItemTwo.label,
                                symbolType: 'square',
                                formatFunction: function (value) {
                                    return '$' + value.toString().replace(/[.].*/, '');
                                },
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
                }]
        };
        this.employeeSalaryChart = jqwidgets.createInstance('#avarageEmployeeSalaryChart', 'jqxChart', chartOptions);
        this.employeeSalaryChart.addColorScheme('myScheme', ['#008ae6', '#E35912']);
        this.employeeSalaryChart.setOptions({ colorScheme: 'myScheme' });
    }

    initEmployeeSalaryDataTable = () => {
        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();

        let tableSource = {
            datafields: [
                { name: 'OrderDate', type: 'date' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salarygridchart&employeeid1=1&employeeid2=2',
            datatype: 'json'
        };

        let tableDataAdapter = new jqx.dataAdapter(tableSource, { loadError: function (xhr, status, error) { alert('Error loading "' + tableSource.url + '" : ' + error); } });

        let tableOptions = {
            width: '100%',
            height: '50%',
            columnsHeight: 50,
            theme: 'metro',
            source: tableDataAdapter,
            columnsResize: true,
            columns: [
                {
                    text: '<p class="dataTableHeader">Month</p>', dataField: 'OrderDate', cellsFormat: 'MMMM', width: '25%', cellsRenderer: function (row, column, value) {
                        return '<b>' + value + '</b>';
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemOne.label + '</p>',
                    renderer: function () {
                        return '<p style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemOne.label + '</p>';
                    },
                    dataField: 'Subtotal1', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemTwo.label + '</p>',
                    renderer: function () {
                        return '<p  style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemTwo.label + '</p>';
                    },
                    dataField: 'Subtotal2', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">Total</p>', editable: false, datafield: 'total',
                    cellsRenderer: function (row, column, value, rowdata) {
                        var total = parseFloat(rowdata.Subtotal1) + parseFloat(rowdata.Subtotal2);
                        return '<div style="margin: 4px;" class="jqx-right-align">' + tableDataAdapter.formatNumber(total, 'c0').replace(/[.]/g, ',') + '</div>';
                    }
                }

            ]
        }

        this.employeeSalaryDataTable = jqwidgets.createInstance('#avarageEmployeeSalaryDataTable', 'jqxDataTable', tableOptions);
    }

    initYearSalesGauges = () => {
        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();

        let gaugeSource = {
            datafields: [
                { name: 'OrderDate' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=yearcomparisonchart&employeeid1=1&employeeid2=2',
            datatype: 'json'
        }

        let gaugeDataAdapter = new jqx.dataAdapter(gaugeSource, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + gaugeSource.url + '" : ' + error); } });

        let TotalPersonOne = gaugeDataAdapter.records[0].Subtotal1 + gaugeDataAdapter.records[1].Subtotal1 + gaugeDataAdapter.records[2].Subtotal1;
        let TotalPersonTwo = gaugeDataAdapter.records[0].Subtotal2 + gaugeDataAdapter.records[1].Subtotal2 + gaugeDataAdapter.records[2].Subtotal2;

        let leftGaugeOptions = {
            title: {
                text: dropDownItemOne.label,
                font: {
                    color: 'black',
                    size: 25,
                    opacity: 0.7,
                    family: '"Helvetica Neue", "Arial"',
                    weight: 200
                },
                horizontalAlignment: 'center',
                margin: {
                    bottom: 30,
                    left: 0,
                    right: 0,
                    top: 50
                },
                verticalAlignment: 'top'
            },
            relativeInnerRadius: 0.5,
            colorScheme: 'customColors',
            customColorScheme: {
                name: 'customColors',
                colors: ['#80ccff', '#33adff', '#008ae6']
            },
            width: '48%',
            height: '49%',
            values: [gaugeDataAdapter.records[0].Subtotal1, gaugeDataAdapter.records[1].Subtotal1, gaugeDataAdapter.records[2].Subtotal1],
            max: TotalPersonTwo,
            labels: {

                indent: 1,
                formatFunction: function (value) {
                    return "$" + value;
                }
            },
            tooltip: {
                visible: true, formatFunction: function (value, index) {
                    var yearValue = gaugeDataAdapter.records[index].OrderDate.substr(0, 4);
                    return '<div style="text-align:left"><b>Sales: $' + value + '</b><br />Year: ' + yearValue;
                }
            }
        }

        let rightGaugeOptions = {
            title: {
                text: dropDownItemTwo.label,
                font: {
                    color: 'black',
                    size: 25,
                    opacity: 0.7,
                    family: '"Helvetica Neue", "Arial"',
                    weight: 200
                },
                horizontalAlignment: 'center',
                margin: {
                    bottom: 30,
                    left: 0,
                    right: 0,
                    top: 50
                },
                verticalAlignment: 'top'
            },
            relativeInnerRadius: 0.5,
            colorScheme: 'customColors',
            customColorScheme: {
                name: 'customColors',
                colors: ['#f5ad89', '#f07c42', '#e35912']
            },
            width: '48%',
            height: '49%',
            values: [gaugeDataAdapter.records[0].Subtotal2, gaugeDataAdapter.records[1].Subtotal2, gaugeDataAdapter.records[2].Subtotal2],
            max: TotalPersonTwo,
            labels: {

                indent: 1,
                formatFunction: function (value) {
                    return "$" + value;
                }
            },
            tooltip: {
                visible: true, formatFunction: function (value, index) {
                    var yearValue = gaugeDataAdapter.records[index].OrderDate.substr(0, 4);
                    return '<b>Sales: $' + value + '</b><br/>Year: ' + yearValue;
                }
            }
        }

        this.leftBarGauge = jqwidgets.createInstance('#yearComparisonLeftBarGauge', 'jqxBarGauge', leftGaugeOptions);
        this.rightBarGauge = jqwidgets.createInstance('#yearComparisonRightBarGauge', 'jqxBarGauge', rightGaugeOptions);

        this.barGaugesCreated = true;
    }

    initYearSalesChart = () => {
        const years = ['1996', '1997', '1998'];
        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();

        let chartSource = {
            datafields: [
                { name: 'OrderDate' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=yearcomparisonchart&employeeid1=1&employeeid2=2',
            datatype: 'json'
        }

        let chartDataAdapter = new jqx.dataAdapter(chartSource, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + chartSource.url + '" : ' + error); } });

        let toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue) => {
            var newValue = value.toString().replace(/[.].*/, '');
            if (newValue.length > 3) {
                newValue = newValue.substr(0, newValue.length - 3) + ',' + newValue.substr(newValue.length - 3);
            }
            var yearValue = years[years.indexOf('19' + categoryValue.getYear())];
            return '<DIV style="text-align:left"><b>Sales: $' + newValue +
                '</b><br />Year: ' + yearValue;
        };

        var chartOptions = {
            title: 'Year Sales Comparison',
            description: '',
            enableAnimations: false,
            showBorderLine: false,
            showLegend: true,
            toolTipFormatFunction: toolTipCustomFormatFn,
            padding: { left: 60, top: 5, right: 60, bottom: 5 },
            titlePadding: { left: 70, top: 0, right: 0, bottom: 10 },
            source: chartDataAdapter,
            colorScheme: 'scheme02',
            xAxis:
                {
                    dataField: 'OrderDate',
                    formatFunction: function (value) {
                        return years[value.getYear() - 96];
                    },
                    labels: { class: 'bold' },
                    type: 'date',
                    baseUnit: 'year',
                    valuesOnTicks: true,
                    minValue: '01-01-1996',
                    maxValue: '01-01-1998'
                },
            seriesGroups:
                [
                    {
                        type: 'spline',
                        alignEndPointsWithIntervals: false,
                        valueAxis:
                            {
                                labels: {
                                    formatFunction: function (value) {
                                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                                    }
                                },
                                displayValueAxis: true,
                                description: '',
                                axisSize: 'auto',
                                tickMarksColor: '#888888'
                            },
                        series: [
                            { dataField: 'Subtotal1', displayText: dropDownItemOne.label, opacity: 0.4 },
                            { dataField: 'Subtotal2', displayText: dropDownItemTwo.label, opacity: 0.5 }
                        ]
                    }

                ]
        };

        this.yearSalesChart = jqwidgets.createInstance('#yearComparisonChart', 'jqxChart', chartOptions);
        this.yearSalesChart.addColorScheme('myScheme', ['#008ae6', '#E35912']);
        this.yearSalesChart.setOptions({ colorScheme: 'myScheme' });
    }

    changeReport(event) {
        let reportIndex = event.args.boundIndex;
        if (reportIndex === this.selectedReportIndex) {
            return;
        }

        this.selectedReportIndex = reportIndex;
        
        switch (reportIndex) {
            case 0: {               
                this.salesPerMonthTabs.element.style.display = 'block';
                this.salesPerMonthDataTable.element.style.display = 'block';

                this.expensesPerMonthChart.element.style.display = 'none';
                this.expensesPerMonthDataTable.element.style.display = 'none';
                this.employeeSalaryChart.element.style.display = 'none';
                this.employeeSalaryDataTable.element.style.display = 'none';
                if (this.barGaugesCreated) {
                    this.leftBarGauge.element.style.display = 'none';
                    this.rightBarGauge.element.style.display = 'none';
                }  
                this.yearSalesChart.element.style.display = 'none';
            }
                break;
            case 1: {             
                this.expensesPerMonthChart.element.style.display = 'block';
                this.expensesPerMonthDataTable.element.style.display = 'block';             

                this.salesPerMonthTabs.element.style.display = 'none';
                this.salesPerMonthDataTable.element.style.display = 'none';
                this.employeeSalaryChart.element.style.display = 'none';
                this.employeeSalaryDataTable.element.style.display = 'none';
                if (this.barGaugesCreated) {
                    this.leftBarGauge.element.style.display = 'none';
                    this.rightBarGauge.element.style.display = 'none';
                }        
                this.yearSalesChart.element.style.display = 'none';
            }
                break;
            case 2: {          
                this.employeeSalaryChart.element.style.display = 'block';
                this.employeeSalaryDataTable.element.style.display = 'block';
              
                this.salesPerMonthTabs.element.style.display = 'none';
                this.salesPerMonthDataTable.element.style.display = 'none';
                this.expensesPerMonthChart.element.style.display = 'none';
                this.expensesPerMonthDataTable.element.style.display = 'none';
                if (this.barGaugesCreated) {
                    this.leftBarGauge.element.style.display = 'none';
                    this.rightBarGauge.element.style.display = 'none';
                }  
                this.yearSalesChart.element.style.display = 'none';
            }
                break;
            case 3: {
                if (!this.barGaugesCreated) {
                    this.initYearSalesGauges();
                }

                this.leftBarGauge.element.style.display = 'block';               
                this.rightBarGauge.element.style.display = 'block';              
                this.yearSalesChart.element.style.display = 'block';
                
                this.leftBarGauge.refresh();
                this.rightBarGauge.refresh();

                this.salesPerMonthDataTable.element.style.display = 'none';
                this.expensesPerMonthChart.element.style.display = 'none';
                this.expensesPerMonthDataTable.element.style.display = 'none';
                this.salesPerMonthTabs.element.style.display = 'none';
                this.employeeSalaryChart.element.style.display = 'none';
                this.employeeSalaryDataTable.element.style.display = 'none';

            }
                break;
        }

        this.changeEmployees(true, true);
    }

    closeWindow() {
        this.window.close();
    }

    changeEmployees(dropDownOneChanged, dropDownTwoChanged) {

        if (this.dropDownTwo.getSelectedItem().value === this.dropDownOne.getSelectedItem().value) {
            this.window.open();
            if (dropDownOneChanged) {
                this.dropDownOne.selectedIndex(this.selectedEmployeeOne - 1);
            } else {
                this.dropDownTwo.selectedIndex(this.selectedEmployeeTwo - 1);
            }               
            return false;
        }

        let dropDownItemOne = this.dropDownOne.getSelectedItem();
        let dropDownItemTwo = this.dropDownTwo.getSelectedItem();
        let leftEmployeeId = this.dropDownOne.getSelectedItem().value;
        let rightEmployeeId = this.dropDownTwo.getSelectedItem().value;
        this.selectedEmployeeOne = leftEmployeeId;
        this.selectedEmployeeTwo = rightEmployeeId;

        switch (this.selectedReportIndex) {
            case 0: {
                this.updateSalesComparison(dropDownOneChanged, dropDownTwoChanged, dropDownItemOne, dropDownItemTwo, leftEmployeeId, rightEmployeeId);
            }
                break;
            case 1: {
                this.updateExpensesComparison(dropDownItemOne, dropDownItemTwo, leftEmployeeId, rightEmployeeId);
            }
                break;
            case 2: {
                this.updateSalaryComparison(dropDownItemOne, dropDownItemTwo, leftEmployeeId, rightEmployeeId);
            }
                break;
            case 3: {
                this.updateYearSalesComparison(dropDownOneChanged, dropDownTwoChanged, dropDownItemOne, dropDownItemTwo, leftEmployeeId, rightEmployeeId);
            }
                break;
        }
    }

    updateSalesComparison(dropDownOneChanged, dropDownTwoChanged, dropDownItemOne, dropDownItemTwo, leftEmployeeId, rightEmployeeId) {
        if (dropDownOneChanged) {
            let leftSalesChartSource = {
                datafields: [
                    { name: 'OrderDate' },
                    { name: 'Subtotal' }
                ],
                url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salespermonthchart&employeeid=' + leftEmployeeId,
                datatype: 'json'
            };

            let leftSalesChartDataAdapter = new jqx.dataAdapter(leftSalesChartSource, { loadError: function (xhr, status, error) { alert('Error loading "' + leftSalesChartSource.url + '" : ' + error); } });

            this.leftSalesChart.setOptions({ title: dropDownItemOne.label, source: leftSalesChartDataAdapter });
        }
        if(dropDownTwoChanged) {
            let rightSalesChartSource = {
                datafields: [
                    { name: 'OrderDate' },
                    { name: 'Subtotal' }
                ],
                url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salespermonthchart&employeeid=' + rightEmployeeId,
                datatype: 'json'
            };

            let rightSalesChartDataAdapter = new jqx.dataAdapter(rightSalesChartSource, { loadError: function (xhr, status, error) { alert('Error loading "' + rightSalesChartSource.url + '" : ' + error); } });

            this.rightSalesChart.setOptions({ title: dropDownItemTwo.label, source: rightSalesChartDataAdapter });
        }

        let dataTableSource = {
            datafields: [
                { name: 'OrderDate', type: 'date' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salespermonthgrid&employeeid1=' + leftEmployeeId + '&employeeid2=' + rightEmployeeId,
            datatype: 'json'
        };

        let dataTableDataAdapter = new jqx.dataAdapter(dataTableSource, { async: true, loadError: function (xhr, status, error) { alert('Error loading "' + dataTableSource.url + '" : ' + error); } });

        let dataTableOptions = {
            source: dataTableDataAdapter,
            columns: [
                {
                    text: '<p class="dataTableHeader">Month</p>', dataField: 'OrderDate', cellsFormat: 'MMMM', width: '25%', cellsRenderer: function (row, column, value) {
                        return '<b>' + value + '</b>';
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemOne.label + '</p>',
                    renderer: function () {
                        return '<p style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemOne.label + '</p>';
                    },
                    dataField: 'Subtotal1', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemTwo.label + '</p>',
                    renderer: function () {
                        return '<p  style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemTwo.label + '</p>';
                    },
                    dataField: 'Subtotal2', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">Total</p>', editable: false, datafield: 'total',
                    cellsRenderer: function (row, column, value, rowdata) {
                        var total = parseFloat(rowdata.Subtotal1) + parseFloat(rowdata.Subtotal2);
                        return '<div style="margin: 4px;" class="jqx-right-align">' + dataTableDataAdapter.formatNumber(total, 'c0').replace(/[.]/g, ',') + '</div>';
                    }
                }

            ]
        }

        this.salesPerMonthDataTable.setOptions(dataTableOptions);

        let spiderChartSource = {
            datafields: [
                { name: 'OrderDate', type: 'date' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salespermonthgrid&employeeid1=' + leftEmployeeId + '&employeeid2=' + rightEmployeeId,
            datatype: 'json'
        }

        let spiderChartDataAdapter = new jqx.dataAdapter(spiderChartSource, { loadError: function (xhr, status, error) { alert('Error loading "' + spiderChartSource.url + '" : ' + error); } });

        this.spriderChart.seriesGroups[0].series[0].displayText = dropDownItemOne.label;
        this.spriderChart.seriesGroups[0].series[1].displayText = dropDownItemTwo.label;

        let spiderChartOptions = {
            source: spiderChartDataAdapter,
        }

        this.spriderChart.setOptions(spiderChartOptions);
    }

    updateExpensesComparison(dropDownItemOne, dropDownItemTwo, leftEmployeeId, rightEmployeeId) {

        let chartSource =
            {
                datafields: [
                    { name: 'OrderDate' },
                    { name: 'Subtotal1' },
                    { name: 'Subtotal2' }
                ],
                url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=expensespermonthgridchart&employeeid1=' + leftEmployeeId + '&employeeid2=' + rightEmployeeId,
                datatype: 'json'
            };

        let chartDataAdapter = new jqx.dataAdapter(chartSource, { loadError: function (xhr, status, error) { alert('Error loading "' + chartSource.url + '" : ' + error); } });

        this.expensesPerMonthChart.seriesGroups[0].series[0].displayText = dropDownItemOne.label;
        this.expensesPerMonthChart.seriesGroups[0].series[1].displayText = dropDownItemTwo.label;

        let chartOptions = {
            source: chartDataAdapter
        }

        this.expensesPerMonthChart.setOptions(chartOptions);

        let dataTableSource =
            {
                datafields: [
                    { name: 'OrderDate', type: 'date' },
                    { name: 'Subtotal1' },
                    { name: 'Subtotal2' }
                ],
                url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=expensespermonthgridchart&employeeid1=' + leftEmployeeId + '&employeeid2=' + rightEmployeeId,
                datatype: 'json'
            };

        let dataTableDataAdapter = new jqx.dataAdapter(dataTableSource, { loadError: function (xhr, status, error) { alert('Error loading "' + dataTableSource.url + '" : ' + error); } });

        let dataTableOptions = {
            source: dataTableDataAdapter,
            columns: [
                {
                    text: '<p class="dataTableHeader">Month</p>', dataField: 'OrderDate', cellsFormat: 'MMMM', width: '25%', cellsRenderer: function (row, column, value) {
                        return '<b>' + value + '</b>';
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemOne.label + '</p>',
                    renderer: function () {
                        return '<p style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemOne.label + '</p>';
                    },
                    dataField: 'Subtotal1', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemTwo.label + '</p>',
                    renderer: function () {
                        return '<p  style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemTwo.label + '</p>';
                    },
                    dataField: 'Subtotal2', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">Total</p>', editable: false, datafield: 'total',
                    cellsRenderer: function (row, column, value, rowdata) {
                        var total = parseFloat(rowdata.Subtotal1) + parseFloat(rowdata.Subtotal2);
                        return '<div style="margin: 4px;" class="jqx-right-align">' + dataTableDataAdapter.formatNumber(total, 'c0').replace(/[.]/g, ',') + '</div>';
                    }
                }

            ]
        }

        this.expensesPerMonthDataTable.setOptions(dataTableOptions);
    }

    updateSalaryComparison(dropDownItemOne, dropDownItemTwo, leftEmployeeId, rightEmployeeId) {
        let chartSource =
            {
                datafields: [
                    { name: 'OrderDate' },
                    { name: 'Subtotal1' },
                    { name: 'Subtotal2' }
                ],
                url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salarygridchart&employeeid1=' + leftEmployeeId + '&employeeid2=' + rightEmployeeId,
                datatype: 'json'
            };

        let chartDataAdapter = new jqx.dataAdapter(chartSource, { loadError: function (xhr, status, error) { alert('Error loading "' + chartSource.url + '" : ' + error); } });

        this.employeeSalaryChart.seriesGroups[0].series[0].displayText = dropDownItemOne.label;
        this.employeeSalaryChart.seriesGroups[0].series[1].displayText = dropDownItemTwo.label;

        let chartOptions = {
            source: chartDataAdapter
        }

        this.employeeSalaryChart.setOptions(chartOptions);

        let dataTableSource =
            {
                datafields: [
                    { name: 'OrderDate', type: 'date' },
                    { name: 'Subtotal1' },
                    { name: 'Subtotal2' }
                ],
                url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=salarygridchart&employeeid1=' + leftEmployeeId + '&employeeid2=' + rightEmployeeId,
                datatype: 'json'
            };

        let dataTableDataAdapter = new jqx.dataAdapter(dataTableSource, { loadError: function (xhr, status, error) { alert('Error loading "' + dataTableSource.url + '" : ' + error); } });

        let dataTableOptions = {
            source: dataTableDataAdapter,
            columns: [
                {
                    text: '<p class="dataTableHeader">Month</p>', dataField: 'OrderDate', cellsFormat: 'MMMM', width: '25%', cellsRenderer: function (row, column, value) {
                        return '<b>' + value + '</b>';
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemOne.label + '</p>',
                    renderer: function () {
                        return '<p style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemOne.label + '</p>';
                    },
                    dataField: 'Subtotal1', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">' + dropDownItemTwo.label + '</p>',
                    renderer: function () {
                        return '<p  style="margin-top:17px; margin-left: 4px;" class="dataTableHeader">' + dropDownItemTwo.label + '</p>';
                    },
                    dataField: 'Subtotal2', width: '25%', cellsalign: 'right', cellsFormat: 'c0', cellsRenderer: function (row, column, value) {
                        var valueAsString = value.toString();
                        return valueAsString.replace(/[.]/g, ',');
                    }
                },
                {
                    text: '<p class="dataTableHeader">Total</p>', editable: false, datafield: 'total',
                    cellsRenderer: function (row, column, value, rowdata) {
                        var total = parseFloat(rowdata.Subtotal1) + parseFloat(rowdata.Subtotal2);
                        return '<div style="margin: 4px;" class="jqx-right-align">' + dataTableDataAdapter.formatNumber(total, 'c0').replace(/[.]/g, ',') + '</div>';
                    }
                }

            ]
        }

        this.employeeSalaryDataTable.setOptions(dataTableOptions);
    }

    updateYearSalesComparison(dropDownOneChanged, dropDownTwoChanged, dropDownItemOne, dropDownItemTwo, leftEmployeeId, rightEmployeeId) {
        let chartSource = {
            datafields: [
                { name: 'OrderDate' },
                { name: 'Subtotal1' },
                { name: 'Subtotal2' }
            ],
            url: 'https://www.jqwidgets.com/jquery-widgets-demo/demos/interactivedemos/salesreport/data.php?usedwidget=yearcomparisonchart&employeeid1=' + leftEmployeeId + '&employeeid2=' + rightEmployeeId,
            datatype: 'json'
        };

        let gaugeDataAdapter = new jqx.dataAdapter(chartSource, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + chartSource.url + '" : ' + error); } });

        let chartDataAdapter = new jqx.dataAdapter(chartSource, { async: false, loadError: function (xhr, status, error) { alert('Error loading "' + chartSource.url + '" : ' + error); } });

        this.yearSalesChart.seriesGroups[0].series[0].displayText = dropDownItemOne.label;
        this.yearSalesChart.seriesGroups[0].series[1].displayText = dropDownItemTwo.label;

        let chartOptions = {
            source: chartDataAdapter
        };

        this.yearSalesChart.setOptions(chartOptions);

        if (dropDownOneChanged) {
            const totalPersonOne = gaugeDataAdapter.records[0].Subtotal1 + gaugeDataAdapter.records[1].Subtotal1 + gaugeDataAdapter.records[2].Subtotal1;
            const gaugeOptions = {
                title: { text: dropDownItemOne.label },
                values: [gaugeDataAdapter.records[0].Subtotal1, gaugeDataAdapter.records[1].Subtotal1, gaugeDataAdapter.records[2].Subtotal1],
                max: totalPersonOne
            }
            this.leftBarGauge.setOptions(gaugeOptions);
            this.leftBarGauge.refresh();
        }
        if (dropDownTwoChanged) {
            const totalPersonTwo = gaugeDataAdapter.records[0].Subtotal2 + gaugeDataAdapter.records[1].Subtotal2 + gaugeDataAdapter.records[2].Subtotal2;
            const gaugeOptions = {
                title: { text: dropDownItemTwo.label },
                values: [gaugeDataAdapter.records[0].Subtotal2, gaugeDataAdapter.records[1].Subtotal2, gaugeDataAdapter.records[2].Subtotal2],
                max: totalPersonTwo
            }
            this.rightBarGauge.setOptions(gaugeOptions);
            this.rightBarGauge.refresh();
        }  
    }
}
