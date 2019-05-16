import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const data: any[] = [
            { 'month': 'Jan', 'min': -1.9, 'max': 3.7, 'avg': 0.2 },
            { 'month': 'Feb', 'min': -0.9, 'max': 5.9, 'avg': 1.1 },
            { 'month': 'Mar', 'min': 0.8, 'max': 9.8, 'avg': 4.9 },
            { 'month': 'Apr', 'min': 4.1, 'max': 13.9, 'avg': 8.7 },
            { 'month': 'May', 'min': 8.0, 'max': 18.4, 'avg': 13.1 },
            { 'month': 'Jun', 'min': 11.3, 'max': 22.2, 'avg': 16.6 },
            { 'month': 'Jul', 'min': 13.3, 'max': 25.3, 'avg': 18.4 },
            { 'month': 'Aug', 'min': 13.0, 'max': 24.4, 'avg': 17.6 },
            { 'month': 'Sep', 'min': 10.3, 'max': 20.8, 'avg': 14.3 },
            { 'month': 'Oct', 'min': 6.6, 'max': 14.9, 'avg': 9.2 },
            { 'month': 'Nov', 'min': 2.1, 'max': 8.4, 'avg': 4.2 },
            { 'month': 'Dec', 'min': -0.5, 'max': 4.5, 'avg': 1.5 }
        ];

        const toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
            const dataItem = data[itemIndex];
            return '<DIV style="text-align:left"><b>Month: ' +
                categoryValue + '</b><br />Min: ' +
                dataItem.min + '&deg;<br />Max: ' +
                dataItem.max + '&deg;<br />Average: ' +
                dataItem.avg + '&deg;</DIV>';
        };

        this.state = {
            description: 'Climatological Information about Geneva',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 50,
                    series: [
                        { dataFieldTo: 'max', displayText: 'Temperature Range', dataFieldFrom: 'min', opacity: 1 }
                    ],
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    type: 'rangecolumn'
                },
                {
                    series: [
                        { dataField: 'avg', displayText: 'Average Temperature', opacity: 1, lineWidth: 2 }
                    ],
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    type: 'spline'
                }
            ],
            source: data,
            title: 'Weather in Geneva, Switzerland',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: {
                    formatSettings: { sufix: '°' },
                    horizontalAlignment: 'right'
                },
                maxValue: 30,
                minValue: -5,
                title: { text: 'Temperature [C]<br>' },
                unitInterval: 5
            },
            xAxis: {
                dataField: 'month',
                gridLines: {
                    step: 3
                },
                unitInterval: 1
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                enableCrosshairs={true} titlePadding={this.state.titlePadding} source={this.state.source}
                xAxis={this.state.xAxis} valueAxis={this.state.valueAxis}
                seriesGroups={this.state.seriesGroups} colorScheme={'scheme05'} />
        );
    }
}

export default App; 