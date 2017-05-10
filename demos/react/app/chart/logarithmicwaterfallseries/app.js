import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let sampleData = [
            { a: 3, b: 9 },
            { a: 5, b: 7 },
            { a: 2, b: 9 },
            { a: 10, b: 15 },
            { a: 9, b: 7 },
            { a: 15, b: 10 },
            { a: 7, b: 5 },
            { total: true }
        ];

        let padding = { left: 5, top: 5, right: 5, bottom: 5  };

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
                    formatSettings: { decimalPlaces: 2 },
                    horizontalAlignment: 'right'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'waterfall',
                    columnsMaxWidth: 50,
                    series:
                    [
                        { dataField: 'a', displayText: 'A' },
                        { dataField: 'b', displayText: 'B', summary: 'total' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Waterfall series with logarithmic axis'} description={'Logarithmic base 2'}
                enableAnimations={true} padding={padding} xAxis={xAxis}
                titlePadding={titlePadding} source={sampleData} 
                valueAxis={valueAxis} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
