import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let days = [
            { Day: 'Monday' },
            { Day: 'Tuesday' },
            { Day: 'Wednesday' },
            { Day: 'Thursday' },
            { Day: 'Friday' },
            { Day: 'Saturday' },
            { Day: 'Sunday' }
        ];
        let Keith = [
            { Minutes: 30 },
            { Minutes: 25 },
            { Minutes: 30 },
            { Minutes: 35 },
            { Minutes: 20 },
            { Minutes: 30 },
            { Minutes: 60 }
        ];
        let Erica = [
            { Minutes: 15 },
            { Minutes: 25 },
            { Minutes: 20 },
            { Minutes: 25 },
            { Minutes: 20 },
            { Minutes: 20 },
            { Minutes: 45 }
        ];
        let George = [
            { Minutes: 25 },
            { Minutes: 30 },
            { Minutes: 25 },
            { Minutes: 45 },
            { Minutes: 25 },
            { Minutes: 30 },
            { Minutes: 90 }
        ];

        let padding = { left: 5, top: 5, right: 40, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Day',
                gridLines: { visible: true }
            };

        let valueAxis =
            {
                visible: true,
                title: { text: 'Time in minutes' }
            };

        let seriesGroups =
            [
                {
                    type: 'stackedline',
                    source: Keith,
                    series: [
                        { dataField: 'Minutes', displayText: 'Keith' }
                    ]
                },
                {
                    type: 'stackedline',
                    source: Erica,
                    series: [
                        { dataField: 'Minutes', displayText: 'Erica' }
                    ]
                },
                {
                    type: 'stackedline',
                    source: George,
                    series: [
                        { dataField: 'Minutes', displayText: 'George' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Fitness & exercise weekly scorecard'} description={'Time spent in vigorous exercise'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={days} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme02'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
