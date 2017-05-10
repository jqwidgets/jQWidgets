import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount() {
        let groups = this.refs.myChart.seriesGroups();

        this.refs.Running.on('change', (event) => {
            groups[1].series[0].greyScale = !event.args.checked;
            this.refs.myChart.refresh();
        });

        this.refs.Cycling.on('change', (event) => {
            groups[1].series[2].greyScale = !event.args.checked;
            this.refs.myChart.refresh();
        });

        this.refs.Swimming.on('change', (event) => {
            groups[1].series[1].greyScale = !event.args.checked;
            this.refs.myChart.refresh();
        });
        this.refs.Goal.on('change', (event) => {
            groups[0].series[0].greyScale = !event.args.checked;
            this.refs.myChart.refresh();
        });
    }

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

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Day',
                unitInterval: 1,
                tickMarks: {
                    visible: true,
                    interval: 1,
                    color: '#CACACA'
                },
                gridLines: {
                    visible: false,
                    interval: 1,
                    color: '#CACACA'
                }
            };

        let valueAxis =
            {
                minValue: 0,
                maxValue: 100,
                unitInterval: 10,
                title: { text: 'Time in minutes' },
                tickMarks: { color: '#CACACA' },
                gridLines: { color: '#CACACA' }
            };

        let seriesGroups =
            [
                {
                    type: 'splinearea',
                    series: [
                        { greyScale: true, dataField: 'Goal', displayText: 'Personal Goal', opacity: 0.7 }
                    ]
                },
                {
                    type: 'stackedcolumn',
                    columnsGapPercent: 50,
                    seriesGapPercent: 5,
                    series: [
                        { greyScale: true, dataField: 'Running', displayText: 'Running' },
                        { greyScale: true, dataField: 'Swimming', displayText: 'Swimming' },
                        { greyScale: false, dataField: 'Cycling', displayText: 'Cycling' }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Fitness & exercise weekly scorecard'} description={'Time spent in vigorous exercise by activity'}
                    showLegend={true} enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                    valueAxis={valueAxis} colorScheme={'scheme05'} seriesGroups={seriesGroups}
                />
                <div style={{ marginTop: 10 }}>
                    <div style={{ float: 'left' }}>
                        <JqxCheckBox ref='Running' value='Running'
                            width={120} checked={false}
                        />
                        <JqxCheckBox style={{ marginTop: 5 }} ref='Swimming' value='Swimming'
                            width={120} checked={false}
                        />
                    </div>
                    <div style={{ float: 'left' }}>
                        <JqxCheckBox ref='Cycling' value='Cycling'
                            width={120} checked={true}
                        />
                        <JqxCheckBox style={{ marginTop: 5 }} ref='Goal' value='Personal Goal'
                            width={120} checked={false}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
