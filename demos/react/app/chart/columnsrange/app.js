import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let sampleData = [{ a: 0.35, b: 14.5, c: 0.35, d: 0.1 }, { a: 1, b: 2.5, c: 1, d: 0.2 }, { a: 10, b: 0.5, c: 10, d: 50 }, { a: 100, b: 205, c: 100, d: 40 }, { a: 1, b: 100, c: 1, d: 200 }, { a: 5.11, b: 10.13, c: 5.11, d: 0.2 }, { a: 20.13, b: 10.13, c: 20.13, d: 4 }];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                gridLines: { dashStyle: '2,2' },
                tickMarks: { dashStyle: '1,2' } 
            };

        let valueAxis =
            {
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                unitInterval: 1,
                title: { text: 'Value' },
                labels: {
                    formatSettings: { decimalPlaces: 3 },
                    horizontalAlignment: 'right'
                },
                gridLines: { dashStyle: '2,2' },
                tickMarks: { dashStyle: '1,2' }
            };

        let seriesGroups =
            [
                {
                    type: 'rangecolumn',
                    series: [
                        { dataFieldFrom: 'a', dataFieldTo: 'b', displayText: 'from A to B' },
                        { dataFieldFrom: 'c', dataFieldTo: 'd', displayText: 'from C to D' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Logarithmic Column Range'} description={'logarithmic scale with base 2'}
                enableAnimations={true} padding={padding} xAxis={xAxis}
                titlePadding={titlePadding} source={sampleData} 
                valueAxis={valueAxis} colorScheme={'scheme07'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
