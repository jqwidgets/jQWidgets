import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.FlipValueAxis.on('change', (event) => {
            this.refs.myChart.valueAxis().flip = event.args.checked;
            this.refs.myChart.refresh();
        });
        this.refs.FlipXAxis.on('change', (event) => {
            this.refs.myChart.xAxis().flip = event.args.checked;
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
                unitInterval: 1
                
            };

        let valueAxis =
            {
                minValue: 0,
                maxValue: 100,
                unitInterval: 10,
                title: { text: 'Time in minutes' },
                labels: {
                    horizontalAlignment: 'right'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'stackedcolumn',
                    columnsGapPercent: 50,
                    seriesGapPercent: 5,
                    series: [
                        { dataField: 'Running', displayText: 'Running' },
                        { dataField: 'Swimming', displayText: 'Swimming' },
                        { dataField: 'Cycling', displayText: 'Cycling' }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Fitness & exercise weekly scorecard'} description={'Time spent in vigorous exercise by activity'}
                    enableAxisTextAnimation={true} enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} source={sampleData} xAxis={xAxis} animationDuration={1000}
                    valueAxis={valueAxis} colorScheme={'scheme01'} seriesGroups={seriesGroups} showLegend={true}
                />
                <div style={{ marginTop: 10 }}>
                    <div style={{ float: 'left' }}>
                        <JqxCheckBox ref='FlipValueAxis' value='Invert value axis' checked={false} />
                        <JqxCheckBox ref='FlipXAxis' value='Invert x-axis' checked={false} style={{ marginTop: 5 }}  />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
