import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let sampleData = [
            { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
            { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
            { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
            { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
            { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
            { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
            { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
        ];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 40, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Day',
                unitInterval: 1,
                tickMarks:
                {
                    visible: true,
                    interval: 1,
                    color: '#CACACA'
                },
                gridLines: {
                    visible: false,
                    interval: 1,
                    color: '#CACACA'
                },
                axisSize: 'auto'
            };

        let seriesGroups =
            [
                {
                    type: 'stackedcolumn',
                    columnsGapPercent: 100,
                    seriesGapPercent: 5,
                    valueAxis:
                    {
                        minValue: 0,
                        maxValue: 100,
                        unitInterval: 10,
                        visible: true,
                        title: { text: 'Time in minutes' },
                        tickMarks: { color: '#CACACA' },
                        gridLines: { color: '#CACACA' },
                        axisSize: 'auto',
                    },
                    series: [
                        { dataField: 'Running', displayText: 'Running' },
                        { dataField: 'Swimming', displayText: 'Swimming' },
                        { dataField: 'Cycling', displayText: 'Cycling' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Fitness & exercise weekly scorecard'} description={'Time spent in vigorous exercise by activity'}
                showLegend={true} enableAnimations={true} padding={padding} rtl={true}
                titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
