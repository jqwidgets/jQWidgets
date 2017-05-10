import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    componentDidMount() {
        this.setState({
            chartInstance: this.refs.myChart.getInstance()
        });

        this.refs.btnEnableSeriesGroup1.on('change', (event) => {
            this.updateSeriesGroupsVisibility();
        });
        this.refs.btnEnableSeriesGroup2.on('change', (event) => {
            this.updateSeriesGroupsVisibility();
        });

        this.refs.btnStackedSeriesGroup1.on('change', (event) => {
            this.updateSeriesGroupsStacking();
        });
        this.refs.btnStackedSeriesGroup2.on('change', (event) => {
            this.updateSeriesGroupsStacking();
        });

        this.refs.sliderColumnsGapPercentGroup1.on('change', (event) => {
            this.state.chartInstance.seriesGroups[0].columnsGapPercent = event.args.value;
            this.refs.myChart.refresh();
        });
        this.refs.sliderColumnsGapPercentGroup2.on('change', (event) => {
            this.state.chartInstance.seriesGroups[1].columnsGapPercent = event.args.value;
            this.refs.myChart.refresh();
        });

        this.refs.sliderSeriesGapGroup1.on('change', (event) => {
            this.state.chartInstance.seriesGroups[0].seriesGapPercent = event.args.value;
            this.refs.myChart.refresh();
        });
        this.refs.sliderSeriesGapGroup2.on('change', (event) => {
            this.state.chartInstance.seriesGroups[1].seriesGapPercent = event.args.value;
            this.refs.myChart.refresh();
        });
        
        this.refs.sliderMinWidthGroup1.on('change', (event) => {
            this.state.chartInstance.seriesGroups[0].columnsMinWidth = event.args.value;
            this.refs.myChart.refresh();
        });
        this.refs.sliderMinWidthGroup2.on('change', (event) => {
            this.state.chartInstance.seriesGroups[1].columnsMinWidth = event.args.value;
            this.refs.myChart.refresh();
        });
        
        this.refs.sliderMaxWidthGroup1.on('change', (event) => {
            this.state.chartInstance.seriesGroups[0].columnsMaxWidth = event.args.value;
            this.refs.myChart.refresh();
        });
        this.refs.sliderMaxWidthGroup2.on('change', (event) => {
            this.state.chartInstance.seriesGroups[1].columnsMaxWidth = event.args.value;
            this.refs.myChart.refresh();
        });
    }
    updateSeriesGroupsVisibility() {
        this.state.chartInstance.seriesGroups = [];
        if (this.refs.btnEnableSeriesGroup1.checked()) {
            this.state.chartInstance.seriesGroups.push(
                {
                    type: 'column',
                    columnsGapPercent: 25,
                    seriesGapPercent: 10,
                    columnsMaxWidth: 40,
                    columnsMinWidth: 1,
                    series: [
                        { dataField: 'Serie1', displayText: 'Serie1' },
                        { dataField: 'Serie2', displayText: 'Serie2' },
                        { dataField: 'Serie3', displayText: 'Serie3' }
                    ]
                });
        }
        if (this.refs.btnEnableSeriesGroup2.checked()) {
            this.state.chartInstance.seriesGroups.push(
                {
                    type: 'column',
                    greyScale: true,
                    columnsGapPercent: 25,
                    seriesGapPercent: 10,
                    columnsMaxWidth: 40,
                    columnsMinWidth: 1,
                    series: [
                        { dataField: 'Serie4', displayText: 'Serie4' },
                        { dataField: 'Serie5', displayText: 'Serie5' },
                        { dataField: 'Serie6', displayText: 'Serie6' }
                    ]
                });
        }
        this.updateSeriesGroupsStacking();
    }
    updateSeriesGroupsStacking() {
        if (this.refs.btnEnableSeriesGroup1.checked()) {
            if (this.refs.btnStackedSeriesGroup1.checked()) {
                this.state.chartInstance.seriesGroups[0].type = 'stackedcolumn';
            }
            else {
                this.state.chartInstance.seriesGroups[0].type = 'column';
            }
        }
        if (this.refs.btnEnableSeriesGroup2.checked()) {
            if (this.refs.btnStackedSeriesGroup2.checked()) {
                this.state.chartInstance.seriesGroups[this.state.chartInstance.seriesGroups.length - 1].type = 'stackedcolumn';
            }
            else {
                this.state.chartInstance.seriesGroups[this.state.chartInstance.seriesGroups.length - 1].type = 'column';
            }
        }
        this.refs.myChart.refresh();
    }
    render() {
        let sampleData = [
            { Position: 0, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 30, Serie5: 10, Serie6: 5 },
            { Position: 1, Serie1: 25, Serie2: 25, Serie3: 5, Serie4: 20, Serie5: 20, Serie6: 10 },
            { Position: 3, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 10, Serie5: 20, Serie6: 15 },
            { Position: 6, Serie1: 35, Serie2: 25, Serie3: 45, Serie4: 5, Serie5: 30, Serie6: 20 },
            { Position: 7, Serie1: 5, Serie2: 20, Serie3: 25, Serie4: 20, Serie5: 40, Serie6: 15 },
            { Position: 9, Serie1: 30, Serie2: 10, Serie3: 30, Serie4: 10, Serie5: 5, Serie6: 20 },
            { Position: 10, Serie1: 60, Serie2: 45, Serie3: 10, Serie4: 20, Serie5: 10, Serie6: 15 }
        ];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Position',
                tickMarks: {
                    visible: true,
                    interval: 1,
                    color: '#BCBCBC'
                },
                gridLines: {
                    visible: true,
                    interval: 1,
                    color: '#BCBCBC'
                },
                flip: false,
                valuesOnTicks: false
            };

        let valueAxis =
            {
                unitInterval: 10,
                title: { text: 'Value' },
                tickMarks: { color: '#BCBCBC' },
                gridLines: { color: '#BCBCBC' },
                labels: {
                    horizontalAlignment: 'right'
                },
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    columnsGapPercent: 25,
                    seriesGapPercent: 10,
                    columnsMaxWidth: 40,
                    columnsMinWidth: 1,
                    series: [
                        { dataField: 'Serie1', displayText: 'Serie1' },
                        { dataField: 'Serie2', displayText: 'Serie2' },
                        { dataField: 'Serie3', displayText: 'Serie3' }
                    ]
                }      
            ];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Columns spacing and padding'} description={'Example with two series groups and three series in each group'}
                    showLegend={true} enableAnimations={false} padding={padding} columnSeriesOverlap={true}
                    titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                    valueAxis={valueAxis} colorScheme={'scheme04'} seriesGroups={seriesGroups}
                />
                <table style={{ paddingLeft: 30, paddingTop: 10 }}>
                    <tr style={{ height: 50 }}>
                        <td style={{ width: 300 }}>
                            <b>Series group 1:</b>
                        </td>
                        <td>
                            <b>Series group 2:</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <JqxCheckBox ref='btnEnableSeriesGroup1' value='Visible'
                                width={120} height={25} hasThreeStates={false} checked={true}
                            />
                        </td>
                        <td>
                            <JqxCheckBox ref='btnEnableSeriesGroup2' value='Visible'
                                width={120} height={25} hasThreeStates={false} checked={false}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <JqxCheckBox ref='btnStackedSeriesGroup1' value='Stacked'
                                width={120} height={25} hasThreeStates={false} checked={false}
                            />
                        </td>
                        <td>
                            <JqxCheckBox ref='btnStackedSeriesGroup2' value='Stacked'
                                width={120} height={25} hasThreeStates={false} checked={false}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Space between columns / padding:
                            <JqxSlider ref='sliderColumnsGapPercentGroup1'
                                width={250} min={0} max={99} value={25}
                                ticksFrequency={5} step={1} mode={'fixed'}
                            />
                        </td>
                        <td>Space between columns / padding:
                            <JqxSlider ref='sliderColumnsGapPercentGroup2'
                                width={250} min={0} max={99} value={25}
                                ticksFrequency={5} step={1} mode={'fixed'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Space between series:
                            <JqxSlider ref='sliderSeriesGapGroup1'
                                width={250} min={0} max={100} value={10}
                                ticksFrequency={5} step={1} mode={'fixed'}
                            />
                        </td>
                        <td>Space between series:
                            <JqxSlider ref='sliderSeriesGapGroup2'
                                width={250} min={0} max={100} value={25}
                                ticksFrequency={5} step={1} mode={'fixed'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Minimum column width:
                            <JqxSlider ref='sliderMinWidthGroup1'
                                width={250} min={0} max={50} value={0}
                                ticksFrequency={5} step={1} mode={'fixed'}
                            />
                        </td>
                        <td>Minimum column width:
                            <JqxSlider ref='sliderMinWidthGroup2'
                                width={250} min={0} max={50} value={0}
                                ticksFrequency={5} step={1} mode={'fixed'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Maximum column width:
                            <JqxSlider ref='sliderMaxWidthGroup1'
                                width={250} min={1} max={120} value={40}
                                ticksFrequency={20} step={1} mode={'fixed'}
                            />
                        </td>
                        <td>Maximum column width:
                            <JqxSlider ref='sliderMaxWidthGroup2'
                                width={250} min={1} max={120} value={40}
                                ticksFrequency={20} step={1} mode={'fixed'}
                            />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
