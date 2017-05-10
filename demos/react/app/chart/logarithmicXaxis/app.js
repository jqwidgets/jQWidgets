import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let sampleData = [
            { a: 0.1535, b: 0.5 },
            { a: 0.48, b: 20.5 },
            { a: 10, b: 60 },
            { a: 100, b: 80 },
            { a: 200, b: 90 },
            { a: 245.11, b: 100.13 },
            { a: 300.13, b: 150.13 },
            { a: 340, b: 200 }
        ];
        let padding = { left: 15, top: 5, right: 15, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'a',
                logarithmicScale: true,
                logarithmicScaleBase: 2
            };

        let valueAxis =
            {
                logarithmicScale: false,
                logarithmicScaleBase: 2,
                title: { text: 'Value' },
                labels: {
                    horizontalAlignment: 'right'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    series: [
                        { dataField: 'a', displayText: 'A', symbolType: 'square', symbolSize: 6, dashStyle: '4,4', lineWidth: 1 },
                        { dataField: 'b', displayText: 'B', symbolType: 'circle', symbolSize: 6, lineWidth: 1 }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Logarithmic Scale x-Axis Example'} description={'Horizontal axis with base 2 logarithmic scale'}
                enableAnimations={true} padding={padding} xAxis={xAxis}
                titlePadding={titlePadding} source={sampleData} 
                valueAxis={valueAxis} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
