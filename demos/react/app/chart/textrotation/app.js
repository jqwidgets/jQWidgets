import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let sampleData = [
            { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
            { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
            { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
            { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
            { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
            { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
            { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
        ];

        let padding = { left: 5, top: 5, right: 20, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10  };

        let xAxis =
            {
                position: 'top',
                dataField: 'Day',
                labels:
                {
                    angle: 55,
                    horizontalAlignment: 'right',
                    verticalAlignment: 'center',
                    rotationPoint: 'right',
                    offset: { x: 0, y: -5 }
                }
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    seriesGapPercent: 15,
                    orientation: 'horizontal',
                    valueAxis:
                    {
                        minValue: 0,
                        maxValue: 100,
                        unitInterval: 10,
                        position: 'right'
                    },
                    series: [
                        { dataField: 'Keith', displayText: 'Keith' },
                        { dataField: 'Erica', displayText: 'Erica' },
                        { dataField: 'George', displayText: 'George' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Axis text rotation example'} description={''} 
                enableAnimations={true} padding={padding} showToolTips={true}
                titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                colorScheme={'scheme04'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
