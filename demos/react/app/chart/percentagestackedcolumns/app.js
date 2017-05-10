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
                dataField: ''
            };

        let valueAxis =
            {
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                unitInterval: 1,
                tickMarks: { interval: 1 },
                gridLines: { interval: 1 },
                title: { text: 'Value' },
                labels: {
                    formatSettings: { decimalPlaces: 3, sufix: '' },
                    horizontalAlignment: 'right'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'stackedcolumn100',
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'a', displayText: 'A' },
                        { dataField: 'b', displayText: 'B' }
                    ]
                },
                {
                    type: 'stackedline100',
                    series: [
                        { dataField: 'a', displayText: 'A' },
                        { dataField: 'b', displayText: 'B' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Logarithmic Scale Axis Example'} description={'Percentage Stacked Columns with logarithmic scale axis (base 2)'}
                enableAnimations={false} padding={padding} titlePadding={titlePadding} 
                xAxis={xAxis} valueAxis={valueAxis} seriesGroups={seriesGroups} source={sampleData}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
