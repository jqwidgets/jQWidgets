import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const sampleData: any[] = [
            { a: 0.35, b: 14.5, c: 0.35, d: 0.1 },
            { a: 1, b: 2.5, c: 1, d: 0.2 },
            { a: 10, b: 0.5, c: 10, d: 50 },
            { a: 100, b: 205, c: 100, d: 40 },
            { a: 1, b: 100, c: 1, d: 200 },
            { a: 5.11, b: 10.13, c: 5.11, d: 0.2 },
            { a: 20.13, b: 10.13, c: 20.13, d: 4 }
        ];

        this.state = {
            description: 'logarithmic scale with base 2',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataFieldFrom: 'a', dataFieldTo: 'b', displayText: 'from A to B' },
                        { dataFieldFrom: 'c', dataFieldTo: 'd', displayText: 'from C to D' }
                    ],
                    type: 'rangecolumn'
                }
            ],
            source: sampleData,
            title: 'Logarithmic Column Range',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                gridLines: { dashStyle: '2,2' },
                labels: {
                    formatSettings: { decimalPlaces: 3 },
                    horizontalAlignment: 'right'
                },
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                tickMarks: { dashStyle: '1,2' },
                title: { text: 'Value' },
                unitInterval: 1
            },
            xAxis: {
                gridLines: { dashStyle: '2,2' },
                tickMarks: { dashStyle: '1,2' }
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme07'} />
        );
    }
}

export default App; 