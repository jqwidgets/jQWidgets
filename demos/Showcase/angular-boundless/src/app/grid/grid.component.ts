import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GridComponent {

    data: any[] = 
    [
        { 'Campaign': 'Facebook', 'Client': 'Mintlime',  'Changes': '2.43',  'Budget': '5,489', 'Status': 'ACTIVE',  'Time': '02:00 - 03:00' },
        { 'Campaign': 'Youtube',  'Client': 'CDsoft',    'Changes': '5.17',  'Budget': '2,592', 'Status': 'CLOSED',  'Time': '13:00 - 14:00' },
        { 'Campaign': 'Spotify',  'Client': 'Diligence', 'Changes': '-7.96', 'Budget': '1,531', 'Status': 'HOLD',    'Time': '10:00 - 11:00' },
        { 'Campaign': 'Twitter',  'Client': 'Deluxe',    'Changes': '2.72',  'Budget': '8,745', 'Status': 'HOLD',    'Time': '04:00 - 05:00' },
        { 'Campaign': 'Bing',     'Client': 'Metrics',   'Changes': '-4.85', 'Budget': '4,489', 'Status': 'PENDING', 'Time': '15:00 - 16:00' },
        { 'Campaign': 'Amazon',   'Client': 'Blueish',   'Changes': '6.79',  'Budget': '1,626', 'Status': 'ACTIVE',  'Time': '18:00 - 19:00' },
        { 'Campaign': 'Dribbble', 'Client': 'Teamable',  'Changes': '-9.37', 'Budget': '8,462', 'Status': 'CLOSED',  'Time': '20:00 - 21:00' }
    ];

    source: any =
    {
        localdata: this.data,
        datatype: 'json',
        datafields: [
            { name: 'Campaign', type: 'string' },
            { name: 'Client', type: 'string' },
            { name: 'Changes', type: 'string' },
            { name: 'Budget', type: 'string' },
            { name: 'Status', type: 'string' }
        ],
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    campaignCellsRenderer = (row: number, column: string, value: string): string => {
        let className = this.data[row].Status.toLowerCase() + '-color';
        return `<div class='grid-campaign-container'>
                    <img class='grid-campaign-img' src='./assets/images/grid-icons/${value.toLowerCase()}.png'/>
                    <div>
                        <span class='grid-campaign-text-big'>${value}</span><br />
                        <i class="material-icons grid-campaign-status-icon ${className}">panorama_fish_eye</i>
                        <span class='grid-campaign-text-small'>${this.data[row].Time}</span>
                    </div>
                </div>`

    };

    clientCellsRenderer = (row: number, column: string, value: string): string => {
        return `<div class='grid-client-text'>${value}</div>`
    };

    changesCellsRenderer = (row: number, column: string, value: string): string => {
        let className = parseFloat(value) > 0 ? 'up' : 'down';      
        return `<div style='margin-top: 23px;'>
                    <i class="material-icons ${className} grid-changes-icon">trending_up</i>
                    <span class='${className} grid-changes-text'>${value}%</span>
                </div>`
    };

    budgetCellsRenderer = (row: number, column: string, value: string): string => {
        return `<div class='grid-budget-text'>$${value}</div>`
    };

    statusCellsRenderer = (row: number, column: string, value: string): string => {
        let className = value.toLowerCase();
        return `<div class='grid-status-text ${className}'>${value}</div>`
    };

    customColumnCellsRenderer = (row: number, column: string, value: string): string => {
        return `<i class="material-icons grid-custom-column">dehaze</i>`;
    };

    columns: any[] =
    [
        { text: '<div class="grid-header-text grid-header-text-first">Campaign</div>', datafield: 'Campaign', width: '32%', minwidth: '199px', cellsrenderer: this.campaignCellsRenderer },
        { text: '<div class="grid-header-text">Client</div>',   datafield: 'Client',   width: '16%',  minwidth: '99px',cellsrenderer: this.clientCellsRenderer },
        { text: '<div class="grid-header-text">Changes</div>',  datafield: 'Changes',  width: '16%',  minwidth: '99px',cellsrenderer: this.changesCellsRenderer },
        { text: '<div class="grid-header-text">Budget</div>',   datafield: 'Budget',   width: '16%',  minwidth: '99px',cellsrenderer: this.budgetCellsRenderer },
        { text: '<div class="grid-header-text">Status</div>',   datafield: 'Status',   width: '16%',  minwidth: '99px',cellsrenderer: this.statusCellsRenderer },
        { text: '<i class="material-icons">keyboard_arrow_down</i>', width: '4%', cellsrenderer: this.customColumnCellsRenderer }
    ];

    renderToolBar = (toolbar: any): void => {
        let topContainer = document.createElement('div');
        let bottomContainer = document.createElement('div');

        topContainer.className = 'grid-toolbar-top-container';
        bottomContainer.className = 'grid-toolbar-bottom-container';

        //Top Container
        let topContainerLeft = document.createElement('p');
        topContainerLeft.style.cssText = 'float: left; display: inline-block;';
        topContainerLeft.className = 'grid-toolbar-top-left';
        topContainerLeft.innerHTML = 'Marketing campaigns';

        let topContainerRight = document.createElement('div');
        topContainerRight.style.cssText = 'float: right;'

        let topContainerRightText = document.createElement('div');        
        topContainerRightText.className = 'grid-toolbar-top-right-text';
        topContainerRightText.innerHTML = '28 ACTIVE';

        let topContainerRightIcon = document.createElement('i');
        topContainerRightIcon.className = 'material-icons';
        topContainerRightIcon.style.cssText = 'cursor: pointer;'; 
        topContainerRightIcon.innerHTML = 'dehaze';

        topContainerRight.appendChild(topContainerRightText);
        topContainerRight.appendChild(topContainerRightIcon);

        topContainer.appendChild(topContainerLeft);
        topContainer.appendChild(topContainerRight);

        //Bottom Container
        let bottomRightContainer = document.createElement('div');
        bottomRightContainer.className = 'grid-toolbar-bottom-right';
        bottomRightContainer.innerHTML = '<i class="material-icons">gesture</i><p>View report</p>';

        bottomContainer.appendChild(bottomRightContainer);

        const donutChart1Source =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Company' },
                    { name: 'Share' }
                ],
                url: './assets/gridDonut1Data.txt'
            };
        const dataAdapter_donutChart1 = new jqx.dataAdapter(donutChart1Source, { async: true, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + donutChart1Source.url + '" : ' + error); } });

        const donutChart2Source =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Company' },
                    { name: 'Share' }
                ],
                url: './assets/gridDonut2Data.txt'
            };
        const dataAdapter_donutChart2 = new jqx.dataAdapter(donutChart2Source, { async: true, autoBind: true, loadError: function(xhr, status, error) { alert('Error loading "' + donutChart2Source.url + '" : ' + error); } });

        const toolTipCustomFormatFn1 = (value: number, itemIndex: number): string => {
            return `<div class='donutChartTooltip'>
                        ${dataAdapter_donutChart1.records[itemIndex].Company}: ${value}%
                    </div>`
        };

        const toolTipCustomFormatFn2 = (value: number, itemIndex: number): string => {
            return `<div class='donutChartTooltip'>
                        ${dataAdapter_donutChart2.records[itemIndex].Company}: ${value}%
                    </div>`
        };

        let chartSettings = {
            title: '',
            description: '',          
            enableAnimations: false,
            showLegend: false,
            showBorderLine: false,
            colorScheme: 'scheme02',
            source: dataAdapter_donutChart1,
            padding: { left: 0, top: 0, right: 0, bottom: 0 },
            seriesGroups:
            [
                {
                    type: 'donut',      
                    toolTipFormatFunction: toolTipCustomFormatFn1,
                    series:
                    [
                        {
                            dataField: 'Share',
                            displayText: 'Company',
                            radius: 20,
                            innerRadius: 12
                        }
                    ]
                }
            ]
        }

        const seriesGroups2 = [
            {
                type: 'donut',
                toolTipFormatFunction: toolTipCustomFormatFn2,
                series:
                [
                    {
                        dataField: 'Share',
                        displayText: 'Company',
                        radius: 20,
                        innerRadius: 12
                    }
                ]
            }
        ]

        let chart1OutContainer = document.createElement('div');
        chart1OutContainer.className = 'chart-out-container';
        let chart1Container = document.createElement('div');
        chart1Container.style.cssText = 'width: 130px; height: 80px;';
        chart1Container.id = 'jqxChart1';    

        let chart2OutContainer = document.createElement('div');
        chart2OutContainer.className = 'chart-out-container';
        let chart2Container = document.createElement('div');
        chart2Container.style.cssText = 'width: 130px; height: 80px;';
        chart2Container.id = 'jqxChart2';  

        chart1OutContainer.appendChild(chart1Container);
        chart2OutContainer.appendChild(chart2Container);
        bottomContainer.appendChild(chart1OutContainer);
        bottomContainer.appendChild(chart2OutContainer);

        toolbar[0].appendChild(topContainer);
        toolbar[0].appendChild(bottomContainer);

        jqwidgets.createInstance('#jqxChart1', 'jqxChart', chartSettings);
        chartSettings.source = dataAdapter_donutChart2;
        chartSettings.seriesGroups = seriesGroups2;
        jqwidgets.createInstance('#jqxChart2', 'jqxChart', chartSettings);
    }
}