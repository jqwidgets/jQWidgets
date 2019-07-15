import * as React from 'react';

import JqxHeatMap, { IHeatMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxheatmap';

class App extends React.PureComponent<{}, IHeatMapProps> {

    constructor(props: {}) {
        super(props);

        this.state = {
            xAxis: {
                minimum: new Date(2018, 6, 23),
                maximum: new Date(2019, 7, 5),
                labelFormat: 'short',
            },
            yAxis: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            source: [
                [0, 48, 16, null, null, null, null],
                [1, 16, 32, 24, 0, 15, 0],
                [0, 50, 0, 0, 37, 18, 0],
                [0, 5, 44, 0, 0, 10, 0],
                [0, 18, 20, 45, 0, 36, 22],
                [0, 10, 0, 42, 1, 28, 0],
                [0, 25, 1, 0, 32, 16, 0],
                [0, 0, 24, 9, 2, 31, 0],
                [0, 35, 0, 0, 47, 8, 0],
                [0, 40, 0, 0, 0, 31, 1],
                [0, 35, 0, 27, 0, 8, 0],
                [0, 8, 0, 45, 9, 12, 0],
                [0, 10, 22, 0, 13, 0, 0],
                [0, 25, 1, 0, 32, 16, 0],
                [0, 0, 24, 9, 2, 31, 33],
                [0, 35, 0, 27, 47, 8, 0],
                [0, 0, 0, 10, 14, 28, 0],
                [0, 18, 20, 45, 0, 36, 0],
                [0, 10, 0, 42, 1, 28, 100],
                [1, 40, 0, 24, 0, 31, 0],
                [0, 35, 0, 27, 47, 8, 0],
                [0, 18, 20, 45, 0, 36, 0],
                [0, 10, 0, 42, 1, 28, 0],
                [0, 40, 0, 24, 0, 31, 0],
                [0, 25, 1, 0, 32, 16, 0],
                [0, 0, 24, 9, 2, 31, 0],
                [0, 35, 0, 27, 47, 8, 0],
                [2, 19, 23, 36, 0, 10, 0],
                [0, 55, 0, 23, 37, 18, 0],
                [0, 0, 0, 10, 14, 28, 0],
                [0, 50, 0, 23, 37, 18, 0],
                [0, 100, 0, 23, 37, 18, 0],
                [0, 0, 0, 10, 14, 28, 0],
                [0, 0, 24, 9, 2, 31, 0],
                [0, 35, 0, 27, 47, 8, 0],
                [33, 5, 44, 0, 2, 10, 0],
                [0, 18, 20, 45, 0, 36, 0],
                [0, 10, 0, 42, 1, 28, 10],
                [1, 40, 0, 24, 0, 31, 0],
                [0, 25, 1, 0, 32, 16, 0],
                [0, 0, 24, 9, 2, 31, 20],
                [0, 35, 0, 27, 47, 8, 0],
                [0, 5, 44, 0, 2, 10, 0],
                [15, 8, 0, 45, 9, 12, 0],
                [0, 10, 22, 35, 13, 0, 0],
                [0, 0, 0, 10, 14, 28, 0],
                [2, 18, 20, 45, 0, 36, 0],
                [0, 10, 0, 42, 1, 28, 60],
                [1, 40, 0, 24, 0, 31, 0],
                [0, 35, 0, 27, 47, 8, 0],
                [0, 5, 44, 0, 2, 10, 0],
                [1, 0, 24, 9, 2, 31, 0],
                [40, 35, 0, 27, 47, 8, 0],
                [null, 5, 44, 0, 2, 10, 0]
            ],
            legendSettings: {
                position: 'Bottom',
            },
            paletteSettings: {
                palette: [
                    { value: 0, color: '#eee', label: 'No contributions' },
                    { value: 1, color: '#d6ebee' },
                    { value: 16, color: '#a2d0d8' },
                    { value: 32, color: '#4ca1af' },
                    { value: 50, color: '#254e77', label: '50+ contributions' },
                ],
                type: 'Fixed',
                emptyPointColor: 'white'
            }

        }
    }

    public render() {
        return (
            <JqxHeatMap
                xAxis={this.state.xAxis}
                yAxis={this.state.yAxis}
                source={this.state.source}
                title={'Example Summary of User Activities in Github'}
                legendSettings={this.state.legendSettings}
                paletteSettings={this.state.paletteSettings}
            />
        );
    }
}

export default App;