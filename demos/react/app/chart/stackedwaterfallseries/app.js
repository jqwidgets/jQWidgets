import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let  sampleData = [
            { a: 35, b: 40 },
            { a: 10, b: 25 },
            { a: 20, b: 20 },
            { a: 30, b: 25 },
            { a: 40, b: 17 },
            { a: 45, b: 20 },
            { a: 20, b: 30 }
        ];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                gridLines: { visible: true },
                tickMarks: { visible: true }
            };

        let valueAxis =
            {
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                title: { text: 'Value<br>' },
                labels:
                {
                    formatSettings: { decimalPlaces: 0 },
                    horizontalAlignment: 'right'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'stackedwaterfall',
                    columnsMaxWidth: 50,
                    series: [
                        { dataField: 'a', displayText: 'A' },
                        { dataField: 'b', displayText: 'B', summary: 'c' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Stacked waterfall series with logarithmic axis'} description={'Logarithmic base 2'}
                padding={padding} titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                valueAxis={valueAxis} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
