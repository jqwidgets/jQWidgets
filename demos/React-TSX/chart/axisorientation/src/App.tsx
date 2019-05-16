import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.flipValueAxisOnChange = this.flipValueAxisOnChange.bind(this);
        this.flipXAxisOnChange = this.flipXAxisOnChange.bind(this);

        const sampleData = [
            { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
            { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
            { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
            { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
            { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
            { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
            { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
        ];

        this.state = {
            description: 'Time spent in vigorous exercise by activity',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'Running', displayText: 'Running' },
                        { dataField: 'Swimming', displayText: 'Swimming' },
                        { dataField: 'Cycling', displayText: 'Cycling' }
                    ],
                    seriesGapPercent: 5,
                    type: 'stackedcolumn'
                }
            ],
            source: sampleData,
            title: 'Fitness & exercise weekly scorecard',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: {
                    horizontalAlignment: 'right'
                },
                maxValue: 100,
                minValue: 0,
                title: { text: 'Time in minutes' },
                unitInterval: 10
            },
            xAxis: {
                dataField: 'Day',                
                unitInterval: 1
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description} enableAnimations={false}
                    enableAxisTextAnimation={true} padding={this.state.padding} titlePadding={this.state.titlePadding}
                    source={this.state.source} xAxis={this.state.xAxis} animationDuration={1000}
                    valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups}
                    colorScheme={'scheme01'} showLegend={true} />
                <div style={{ marginTop: '10px', float: 'left' }}>
                    <JqxCheckBox theme={'material-purple'} onChange={this.flipValueAxisOnChange}>Invert value axis</JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} style={{ marginTop: '5px' }} onChange={this.flipXAxisOnChange}>Invert x-axis</JqxCheckBox>
                </div>
            </div>
        );
    }

    private flipValueAxisOnChange(event: any): void {
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.flip = event.args.checked;
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private flipXAxisOnChange(event: any): void {
        const newXAxis = this.state.xAxis;
        newXAxis!.flip = event.args.checked;
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }; 
}

export default App; 