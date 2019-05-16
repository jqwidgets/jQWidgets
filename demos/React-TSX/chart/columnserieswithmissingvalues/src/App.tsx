import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const sampleData: any[] = [
            { Hour: 1, Sales: 135 },
            { Hour: 3, Sales: 145 },
            { Hour: 5, Sales: 90 },
            { Hour: 15, Sales: 66 },
            { Hour: 17, Sales: 43 },
            { Hour: 18, Sales: 122 },
            { Hour: 22, Sales: 59 },
            { Hour: 23, Sales: 70 }
        ];

        this.state = {
            padding: { left: 5, top: 5, right: 10, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'Sales', displayText: 'Sales' }
                    ],
                    showLabels: true,
                    type: 'column'
                }
            ],
            source: sampleData,
            title: 'Average store sales per hour',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: { horizontalAlignment: 'right' },
                maxValue: 200,
                minValue: 0,
                title: { text: 'Sales ($)<br>' },
                unitInterval: 50,
                visible: true
            },
            xAxis: {
                dataField: 'Hour',
                gridLines: {
                    interval: 3,
                    visible: true
                },
                labels: {
                    angle: 0,
                    formatFunction: (value: any) => {
                        return value.toString();
                    }
                },
                maxValue: 23,
                minValue: 0,
                tickMarks: {
                    interval: 1,
                    visible: true
                },
                unitInterval: 1,
                valuesOnTicks: false
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme02'} />
        );
    }
}

export default App; 