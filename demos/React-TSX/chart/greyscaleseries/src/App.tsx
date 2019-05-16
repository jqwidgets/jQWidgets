import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.runningOnChange = this.runningOnChange.bind(this);
        this.cyclingOnChange = this.cyclingOnChange.bind(this);
        this.swimmingOnChange = this.swimmingOnChange.bind(this);
        this.goalOnChange = this.goalOnChange.bind(this);

        const sampleData: any[] = [
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
                    series: [
                        { greyScale: true, dataField: 'Goal', displayText: 'Personal Goal', opacity: 0.7 }
                    ],
                    type: 'splinearea'
                },
                {
                    columnsGapPercent: 50,
                    series: [
                        { greyScale: true, dataField: 'Running', displayText: 'Running' },
                        { greyScale: true, dataField: 'Swimming', displayText: 'Swimming' },
                        { greyScale: false, dataField: 'Cycling', displayText: 'Cycling' }
                    ],
                    seriesGapPercent: 5,
                    type: 'stackedcolumn'
                }
            ],
            source: sampleData,
            title: 'Fitness & exercise weekly scorecard',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                gridLines: { color: '#CACACA' },
                maxValue: 100,
                minValue: 0,
                tickMarks: { color: '#CACACA' },
                title: { text: 'Time in minutes' },
                unitInterval: 10
            },
            xAxis: {
                dataField: 'Day',
                gridLines: {
                    color: '#CACACA',
                    interval: 1,
                    visible: false,
                },
                tickMarks: {
                    color: '#CACACA',
                    interval: 1,
                    visible: true
                },
                unitInterval: 1
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description}
                    showLegend={true} enableAnimations={false} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme05'} />

                <div style={{ marginTop: '10px' }}>
                    <div style={{ float: 'left' }}>
                        <JqxCheckBox theme={'material-purple'} width={120} onChange={this.runningOnChange}>Running</JqxCheckBox>
                        <JqxCheckBox theme={'material-purple'} width={120} onChange={this.swimmingOnChange}>Swimming</JqxCheckBox>
                    </div>
                    <div style={{ float: 'left' }}>
                        <JqxCheckBox theme={'material-purple'} width={120} checked={true} onChange={this.cyclingOnChange}>Cycling</JqxCheckBox>
                        <JqxCheckBox theme={'material-purple'} width={120} onChange={this.goalOnChange}>Personal Goal</JqxCheckBox>
                    </div >
                </div >
            </div>
        );
    }

    private runningOnChange(event: any) {
        const newSeriesGroup = this.state.seriesGroups;
        newSeriesGroup![1].series![0].greyScale = !event.args.checked;
        this.setState({
            seriesGroups: newSeriesGroup
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private cyclingOnChange(event: any) {
        const newSeriesGroup = this.state.seriesGroups;
        newSeriesGroup![1].series![2].greyScale = !event.args.checked;
        this.setState({
            seriesGroups: newSeriesGroup
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private swimmingOnChange(event: any) {
        const newSeriesGroup = this.state.seriesGroups;
        newSeriesGroup![1].series![1].greyScale = !event.args.checked;
        this.setState({
            seriesGroups: newSeriesGroup
        }, () => {
            this.myChart.current!.refresh();
        });
    };
    private goalOnChange(event: any) {
        const newSeriesGroup = this.state.seriesGroups;
        newSeriesGroup![0].series![0].greyScale = !event.args.checked;
        this.setState({
            seriesGroups: newSeriesGroup
        }, () => {
            this.myChart.current!.refresh();
        });
    };
}

export default App; 