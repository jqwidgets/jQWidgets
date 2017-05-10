import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let sampleData = [
            { Hour: 1, Sales: 135 },
            { Hour: 3, Sales: 145 },
            { Hour: 5, Sales: 90 },
            { Hour: 15, Sales: 66 },
            { Hour: 17, Sales: 43 },
            { Hour: 18, Sales: 122 },
            { Hour: 22, Sales: 59 },
            { Hour: 23, Sales: 70 }
        ];

        let padding = { left: 5, top: 5, right: 10, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Hour',
                minValue: 0,
                maxValue: 23,
                unitInterval: 1,
                valuesOnTicks: false,
                labels: {
                    angle: 0,
                    formatFunction: (value) => {
                        return value.toString();
                    }
                },
                tickMarks: {
                    visible: true,
                    interval: 1
                },
                gridLines: {
                    visible: true,
                    interval: 3
                }
            };

        let valueAxis =
            {
                visible: true,
                minValue: 0,
                maxValue: 200,
                unitInterval: 50,
                title: { text: 'Sales ($)<br>' },
                labels: { horizontalAlignment: 'right' }
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    series: [
                        { dataField: 'Sales', displayText: 'Sales', showLabels: true }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Average store sales per hour'} description={''}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme02'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
