import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let sampleData = [{ a: 0.35, b: 14.5 }, { a: 1, b: 2.5 }, { a: 10, b: 0.2 }, { a: 100, b: 205 }, { a: 1, b: 100 }, { a: 5.11, b: 10.13 }, { a: 20.13, b: 10.13 }, { a: 600, b: 300 }];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                valuesOnTicks: false,
                gridLines: { visible: false }
            };

        let valueAxis =
            {
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                unitInterval: 1,
                flip: false,
                title: { text: 'Value' },
                labels: {
                    formatSettings: { decimalPlaces: 3 },
                    horizontalAlignment: 'right'
                },
                gridLines: { visible: false }
            };

        let seriesGroups =
            [
                {
                    type: 'splinerangearea',
                    series: [
                        { dataFieldFrom: 'a', dataFieldTo: 'b', displayText: 'from A to B', opacity: 0.8, lineWidth: 1 }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Logarithmic Spline Area Range'} description={'logarithmic scale with base 2'}
                enableAnimations={true} padding={padding} xAxis={xAxis}
                titlePadding={titlePadding} source={sampleData}
                valueAxis={valueAxis} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
