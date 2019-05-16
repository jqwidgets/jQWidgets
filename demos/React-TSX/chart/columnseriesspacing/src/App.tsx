import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox, { ICheckBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

export interface IState extends IChartProps {
    enableSeriesGroup1Checked: ICheckBoxProps["checked"];
    enableSeriesGroup2Checked: ICheckBoxProps["checked"];
    stackedSeriesGroup1Checked: ICheckBoxProps["checked"];
    stackedSeriesGroup2Checked: ICheckBoxProps["checked"];
}

class App extends React.PureComponent<{}, IState> {

    private myChart = React.createRef<JqxChart>();
    private newSeriesGroups: any[] = [];

    constructor(props: {}) {
        super(props);
        this.eventHandler = this.eventHandler.bind(this);
        this.updateSeriesGroupsVisibility = this.updateSeriesGroupsVisibility.bind(this);
        this.updateSeriesGroupsStacking = this.updateSeriesGroupsStacking.bind(this);

        const sampleData: any[] = [
            { Position: 0, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 30, Serie5: 10, Serie6: 5 },
            { Position: 1, Serie1: 25, Serie2: 25, Serie3: 5, Serie4: 20, Serie5: 20, Serie6: 10 },
            { Position: 3, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 10, Serie5: 20, Serie6: 15 },
            { Position: 6, Serie1: 35, Serie2: 25, Serie3: 45, Serie4: 5, Serie5: 30, Serie6: 20 },
            { Position: 7, Serie1: 5, Serie2: 20, Serie3: 25, Serie4: 20, Serie5: 40, Serie6: 15 },
            { Position: 9, Serie1: 30, Serie2: 10, Serie3: 30, Serie4: 10, Serie5: 5, Serie6: 20 },
            { Position: 10, Serie1: 60, Serie2: 45, Serie3: 10, Serie4: 20, Serie5: 10, Serie6: 15 }
        ];

        this.state = {
            description: 'Example with two series groups and three series in each group',
            enableSeriesGroup1Checked: true,
            enableSeriesGroup2Checked: false,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 25,
                    columnsMaxWidth: 40,
                    columnsMinWidth: 1,
                    series: [
                        { dataField: 'Serie1', displayText: 'Serie1' },
                        { dataField: 'Serie2', displayText: 'Serie2' },
                        { dataField: 'Serie3', displayText: 'Serie3' }
                    ],
                    seriesGapPercent: 10,
                    type: 'column'
                }
            ],
            source: sampleData,
            stackedSeriesGroup1Checked: false,
            stackedSeriesGroup2Checked: false,
            title: 'Columns spacing and padding',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                gridLines: { color: '#BCBCBC' },
                labels: {
                    horizontalAlignment: 'right'
                },
                tickMarks: { color: '#BCBCBC' },
                title: { text: 'Value' },
                unitInterval: 10
            },
            xAxis: {
                dataField: 'Position',
                flip: false,
                gridLines: {
                    color: '#BCBCBC',
                    interval: 1,
                    visible: true
                },
                tickMarks: {
                    color: '#BCBCBC',
                    interval: 1,
                    visible: true
                },
                valuesOnTicks: false
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
                    columnSeriesOverlap={true} seriesGroups={this.state.seriesGroups} colorScheme={'scheme04'} />

                <table style={{ paddingLeft: '30px', paddingTop: '10px' }}>
                    <tbody>
                        <tr style={{ height: '50px' }}>
                            <td style={{ width: '300px' }}>
                                <strong>Series group 1:</strong>
                            </td>
                            <td>
                                <strong>Series group 2:</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <JqxCheckBox theme={'material-purple'} className={'visible1'} onChange={this.updateSeriesGroupsVisibility}
                                    width={120} height={25} checked={this.state.enableSeriesGroup1Checked}>
                                    Visible
                                </JqxCheckBox>
                            </td>
                            <td>
                                <JqxCheckBox theme={'material-purple'} className={'visible2'} onChange={this.updateSeriesGroupsVisibility}
                                    width={120} height={25} checked={this.state.enableSeriesGroup2Checked}>
                                    Visible
                                </JqxCheckBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <JqxCheckBox theme={'material-purple'} className={'stacked1'} onChange={this.updateSeriesGroupsStacking}
                                    width={120} height={25} checked={this.state.stackedSeriesGroup1Checked}>
                                    Stacked
                                </JqxCheckBox>
                            </td>
                            <td>
                                <JqxCheckBox theme={'material-purple'} className={'stacked2'} onChange={this.updateSeriesGroupsStacking}
                                    width={120} height={25} checked={this.state.stackedSeriesGroup2Checked}>
                                    Stacked
                                </JqxCheckBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Space between columns / padding:
                                <JqxSlider theme={'material-purple'} onChange={this.sliderColumnsGapPercent.bind(this, 0)}
                                    width={250} min={0} max={99} value={25}
                                    ticksFrequency={5} step={1} mode={'fixed'} />
                            </td>
                            <td>
                                Space between columns / padding:
                                <JqxSlider theme={'material-purple'} onChange={this.sliderColumnsGapPercent.bind(this, 1)}
                                    width={250} min={0} max={99} value={25}
                                    ticksFrequency={5} step={1} mode={'fixed'} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Space between series:
                                <JqxSlider theme={'material-purple'} onChange={this.sliderSeriesGap.bind(this, 0)}
                                    width={250} min={0} max={100} value={10}
                                    ticksFrequency={5} step={1} mode={'fixed'} />
                            </td>
                            <td>
                                Space between series:
                                <JqxSlider theme={'material-purple'} onChange={this.sliderSeriesGap.bind(this, 1)}
                                    width={250} min={0} max={100} value={25}
                                    ticksFrequency={5} step={1} mode={'fixed'} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Minimum column [width]:
                                <JqxSlider theme={'material-purple'} onChange={this.sliderMinWidth.bind(this, 0)}
                                    width={250} min={0} max={50} value={0}
                                    ticksFrequency={5} step={1} mode={'fixed'} />
                            </td>
                            <td>
                                Minimum column [width]:
                                <JqxSlider theme={'material-purple'} onChange={this.sliderMinWidth.bind(this, 1)}
                                    width={250} min={0} max={50} value={0}
                                    ticksFrequency={5} step={1} mode={'fixed'} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Maximum column [width]:
                                <JqxSlider theme={'material-purple'} onChange={this.sliderMaxWidth.bind(this, 0)}
                                    width={250} min={1} max={120} value={40}
                                    ticksFrequency={20} step={1} mode={'fixed'} />
                            </td>
                            <td>
                                Maximum column [width]:
                                <JqxSlider theme={'material-purple'} onChange={this.sliderMaxWidth.bind(this, 1)}
                                    width={250} min={1} max={120} value={40}
                                    ticksFrequency={20} step={1} mode={'fixed'} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    private updateSeriesGroupsVisibility(event: any): void {
        
        this.newSeriesGroups = [];

        const seriesGroup1VisibleClicked = event.target.classList.contains('visible1') ? true : false;
        const seriesGroup1Visible = seriesGroup1VisibleClicked ? !this.state.enableSeriesGroup1Checked : this.state.enableSeriesGroup1Checked;

        const seriesGroup2VisibleClicked = event.target.classList.contains('visible2') ? true : false;
        const seriesGroup2Visible = seriesGroup2VisibleClicked ? !this.state.enableSeriesGroup2Checked : this.state.enableSeriesGroup2Checked;

        if (seriesGroup1Visible) {
            this.newSeriesGroups[0] = {
                columnsGapPercent: 25,
                columnsMaxWidth: 40,
                columnsMinWidth: 1,
                series: [
                    { dataField: 'Serie1', displayText: 'Serie1' },
                    { dataField: 'Serie2', displayText: 'Serie2' },
                    { dataField: 'Serie3', displayText: 'Serie3' }
                ],
                seriesGapPercent: 10,
                type: 'column'
            };
        }

        if (seriesGroup2Visible) {
            const index = this.newSeriesGroups.length > 0 ? 1 : 0;

            this.newSeriesGroups[index] = {
                columnsGapPercent: 25,
                columnsMaxWidth: 40,
                columnsMinWidth: 1,
                greyScale: true,
                series: [
                    { dataField: 'Serie4', displayText: 'Serie4' },
                    { dataField: 'Serie5', displayText: 'Serie5' },
                    { dataField: 'Serie6', displayText: 'Serie6' }
                ],
                seriesGapPercent: 10,
                type: 'column'
            };
        }

        const newState: any = {};
        /* tslint:disable:no-string-literal */
        if (seriesGroup1VisibleClicked) {
            newState["enableSeriesGroup1Checked"] = !this.state.enableSeriesGroup1Checked;
        } else {     
            newState["enableSeriesGroup2Checked"] = !this.state.enableSeriesGroup2Checked;
        }

        this.setState(newState, () => {
            this.updateSeriesGroupsStacking();
        });
    }

    private updateSeriesGroupsStacking(event?: any): void {

        const seriesGroup1StackedClicked = event && event.target.classList.contains('stacked1') ? true : false;
        const seriesGroup1Stacked = seriesGroup1StackedClicked ? !this.state.stackedSeriesGroup1Checked : this.state.stackedSeriesGroup1Checked;

        const seriesGroup2StackedClicked = event && event.target.classList.contains('stacked2') ? true : false;
        const seriesGroup2Stacked = seriesGroup2StackedClicked ? !this.state.stackedSeriesGroup2Checked : this.state.stackedSeriesGroup2Checked;

        if (seriesGroup1StackedClicked || seriesGroup2StackedClicked) {
            this.newSeriesGroups = this.state.seriesGroups!;
        }

        if (this.state.enableSeriesGroup1Checked) {           
            if (seriesGroup1Stacked) {     
                this.newSeriesGroups[0].type = 'stackedcolumn';
            }
            else {
                this.newSeriesGroups[0].type = 'column';
            }
        }

        if (this.state.enableSeriesGroup2Checked) {
            if (seriesGroup2Stacked) {
                this.newSeriesGroups[this.newSeriesGroups.length - 1].type = 'stackedcolumn';
            }
            else {
                this.newSeriesGroups[this.newSeriesGroups.length - 1].type = 'column';
            }
        }
        
        const newState: any = {
            seriesGroups: this.newSeriesGroups
        };

        /* tslint:disable:no-string-literal */
        if (seriesGroup1StackedClicked) {
            newState["stackedSeriesGroup1Checked"] = !this.state.stackedSeriesGroup1Checked;
        }
        if (seriesGroup2StackedClicked) {
            newState["stackedSeriesGroup2Checked"] = !this.state.stackedSeriesGroup2Checked;
        }

        this.setState(newState, () => {
            this.myChart.current!.refresh();
        });
    }

    private sliderColumnsGapPercent(series: number, event: any): void {
        this.eventHandler(event, series, 'columnsGapPercent');
    };

    private sliderSeriesGap(series: number, event: any): void {
        this.eventHandler(event, series, 'seriesGapPercent');
    };

    private sliderMinWidth(series: number, event: any): void {
        this.eventHandler(event, series, 'columnsMinWidth');
    };

    private sliderMaxWidth(series: number, event: any): void {
        this.eventHandler(event, series, 'columnsMaxWidth');
    };

    private eventHandler(event: any, series: number, propName: string) {
        const seriesGroups: any = this.state.seriesGroups;
        if (seriesGroups!.length !== 0) {
            if (seriesGroups!.length < 2) {
                const serieDataField = seriesGroups![0].series![0].dataField;
                const serie = serieDataField === 'Serie1' ? 0 : 1;
                
                if (series !== serie) {
                    return;
                }
                seriesGroups![0][propName] = event.args.value;
            } else {
                seriesGroups![series][propName] = event.args.value;
            }
            this.setState({
                seriesGroups
            }, () => {
                this.myChart.current!.refresh();
            });
        }
    }
}

export default App; 