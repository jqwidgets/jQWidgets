import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myChart.on('mouseleave mouseenter click toggle', (event) => {
            if (event.args) {
                let eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + event.args.serie.dataField + '<b>, Value: </b>' + event.args.elementValue + '</div>';

                if (event.type == 'toggle') {
                    eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + event.args.serie.dataField + '<b>, visible: </b>' + event.args.state + '</div>';
                }

                document.getElementById('eventText').innerHTML = eventData;
            }
        });
    }
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

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Day',
                type: 'basic'
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    valueAxis:
                    {
                        minValue: 0,
                        maxValue: 100,
                        unitInterval: 10,
                        title: { text: 'Time in minutes' }
                    },
                    series: [
                        { dataField: 'Keith', displayText: 'Keith' },
                        { dataField: 'Erica', displayText: 'Erica' },
                        { dataField: 'George', displayText: 'George' }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Fitness & exercise weekly scorecard'} description={'Time spent in vigorous exercise'}
                    showToolTips={false} enableAnimations={true} padding={padding} 
                    titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                    colorScheme={'scheme04'} seriesGroups={seriesGroups}
                />
                <div id='eventText' style={{ width: 600, height: 30 }} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
