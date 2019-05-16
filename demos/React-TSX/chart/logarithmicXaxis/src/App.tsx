import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            description: 'Horizontal axis with base 2 logarithmic scale',
            padding: { left: 15, top: 5, right: 15, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'a', displayText: 'A', symbolType: 'square', symbolSize: 6, dashStyle: '4,4', lineWidth: 1 },
                        { dataField: 'b', displayText: 'B', symbolType: 'circle', symbolSize: 6, lineWidth: 1 }
                    ],
                    type: 'line'
                }
            ],
            source: [
                { a: 0.1535, b: 0.5 },
                { a: 0.48, b: 20.5 },
                { a: 10, b: 60 },
                { a: 100, b: 80 },
                { a: 200, b: 90 },
                { a: 245.11, b: 100.13 },
                { a: 300.13, b: 150.13 },
                { a: 340, b: 200 }
            ],
            title: 'Logarithmic Scale x-Axis Example',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: {
                    horizontalAlignment: 'right'
                },
                logarithmicScale: false,
                title: { text: 'Value' }
            },
            xAxis: {
                dataField: 'a',
                logarithmicScale: true,
                logarithmicScaleBase: 2
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} />
        );
    }
}

export default App;