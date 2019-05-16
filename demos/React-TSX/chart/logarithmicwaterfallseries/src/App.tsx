import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            description: 'Logarithmic base 2',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsMaxWidth: 50,
                    series: [
                        { dataField: 'a', displayText: 'A' },
                        { dataField: 'b', displayText: 'B', summary: 'total' }
                    ],
                    type: 'waterfall'
                }
            ],
            source: [
                { a: 3, b: 9 },
                { a: 5, b: 7 },
                { a: 2, b: 9 },
                { a: 10, b: 15 },
                { a: 9, b: 7 },
                { a: 15, b: 10 },
                { a: 7, b: 5 },
                { total: true }
            ],
            title: 'Waterfall series with logarithmic axis',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: {
                    formatSettings: { decimalPlaces: 2 },
                    horizontalAlignment: 'right'
                },
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                title: { text: 'Value' }
            },
            xAxis: {
                gridLines: { visible: true },
                tickMarks: { visible: true }
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