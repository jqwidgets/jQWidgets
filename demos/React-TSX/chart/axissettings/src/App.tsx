import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.sliderValueAxisLeftPaddingOnChange = this.sliderValueAxisLeftPaddingOnChange.bind(this);
        this.sliderValueAxisRightPaddingOnChange = this.sliderValueAxisRightPaddingOnChange.bind(this);
        this.sliderValueAxisAngleOnChange = this.sliderValueAxisAngleOnChange.bind(this);
        this.sliderXAxisTopPaddingOnChange = this.sliderXAxisTopPaddingOnChange.bind(this);
        this.sliderXAxisBottomPaddingOnChange = this.sliderXAxisBottomPaddingOnChange.bind(this);
        this.sliderXAxisAngleOnChange = this.sliderXAxisAngleOnChange.bind(this);
        this.btnLeftOnChange = this.btnLeftOnChange.bind(this);
        this.btnRightOnChange = this.btnRightOnChange.bind(this);
        this.btnTopOnChange = this.btnTopOnChange.bind(this);
        this.btnBottomOnChange = this.btnBottomOnChange.bind(this);
        this.btnValueAxisFlipOnChange = this.btnValueAxisFlipOnChange.bind(this);
        this.btnXAxisFlipOnChange = this.btnXAxisFlipOnChange.bind(this);

        const data = [
            { year: 2004, price: 0.1437 },
            { year: 2005, price: 0.1470 },
            { year: 2006, price: 0.1510 },
            { year: 2007, price: 0.1605 },
            { year: 2008, price: 0.1647 },
            { year: 2009, price: 0.1736 },
            { year: 2010, price: 0.1766 },
            { year: 2011, price: 0.1902 },
            { year: 2012, price: 0.1978 },
            { year: 2013, price: 0.2113 },
            { year: 2014, price: 0.2178 }
        ];

        this.state = {
            description: 'Source: Eurostat',
            padding: { left: 5, top: 5, right: 15, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { formatSettings: { decimalPlaces: 4 }, dataField: 'price', displayText: 'Price per kWh', symbolType: 'circle' }
                    ],
                    showLabels: true,
                    type: 'stepline'
                }
            ],
            source: data,
            title: 'Electricity prices in Europe between 2004 and 2019',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                alternatingBackgroundColor: '#EFEFEF',
                alternatingBackgroundColor2: '#CECECE',
                alternatingBackgroundOpacity: 0.2,
                gridLines: {
                    color: '#CDCDCD',
                    visible: true,
                },
                labels: {
                    angle: 0,
                    formatSettings: {
                        decimalPlaces: 4, sufix: ' �'
                    },
                    visible: true,
                },
                padding: { left: 0, right: 0 },
                position: 'right',
                tickMarks: {
                    color: '#CDCDCD',
                    size: 5,
                    visible: true,
                },
                title: { text: '<br><br>Price EUR / kWh' }
            },
            xAxis: {
                dataField: 'year',
                displayText: 'Year',
                gridLines: { color: '#CDCDCD' },
                labels: { angle: 0 },
                padding: { top: 0, bottom: 0 },
                tickMarks: { color: '#CDCDCD' },
                valuesOnTicks: false
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description}
                    enableAnimations={true} showLegend={true} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme04'} />

                <table style={{ paddingLeft: '30px', paddingTop: '10px' }}>
                    <tbody>
                        <tr style={{ height: '50px' }}>
                            <td style={{ width: '300px' }}><strong>[value] axis properties:</strong></td>
                            <td><strong>xAxis properties:</strong></td>
                        </tr>
                        <tr>
                            <td>
                                Left padding:
                            <JqxSlider theme={'material-purple'} onChange={this.sliderValueAxisLeftPaddingOnChange}
                                    width={250} min={0} max={50} step={1}
                                    value={0} ticksFrequency={5} mode={'fixed'} />
                            </td>
                            <td>
                                Top padding:
                            <JqxSlider theme={'material-purple'} onChange={this.sliderXAxisTopPaddingOnChange}
                                    width={250} min={0} max={50} step={1}
                                    value={0} ticksFrequency={5} mode={'fixed'} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Right padding:
                            <JqxSlider theme={'material-purple'} onChange={this.sliderValueAxisRightPaddingOnChange}
                                    width={250} min={0} max={50} step={1}
                                    value={0} ticksFrequency={5} mode={'fixed'} />
                            </td>
                            <td>
                                Bottom padding:
                            <JqxSlider theme={'material-purple'} onChange={this.sliderXAxisBottomPaddingOnChange}
                                    width={250} min={0} max={50} step={1}
                                    value={0} ticksFrequency={5} mode={'fixed'} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Labels angle:
                            <JqxSlider theme={'material-purple'} onChange={this.sliderValueAxisAngleOnChange}
                                    width={250} min={0} max={360} step={1}
                                    value={0} ticksFrequency={30} mode={'fixed'} />
                            </td>
                            <td>
                                Labels angle:
                            <JqxSlider theme={'material-purple'} onChange={this.sliderXAxisAngleOnChange}
                                    width={250} min={0} max={360} step={1}
                                    value={0} ticksFrequency={30} mode={'fixed'} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Position:
                            <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} onChange={this.btnLeftOnChange}
                                                    width={60} height={25} groupName={'valueAxis'}>
                                                    Left
                                        </JqxRadioButton>
                                            </td>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} onChange={this.btnRightOnChange}
                                                    width={60} height={25} checked={true} groupName={'valueAxis'}>
                                                    Right
                                        </JqxRadioButton>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                Position:
                            <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} onChange={this.btnTopOnChange}
                                                    width={60} height={25} groupName={'xAxis'}>
                                                    Top
                                        </JqxRadioButton>
                                            </td>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} style={{ marginTop: '10px' }} onChange={this.btnBottomOnChange}
                                                    width={80} height={25} checked={true} groupName={'xAxis'}>
                                                    Bottom
                                         </JqxRadioButton>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <JqxCheckBox theme={'material-purple'} height={25} onChange={this.btnValueAxisFlipOnChange}>
                                    Flip valueAxis Positions
                            </JqxCheckBox>
                            </td>
                            <td>
                                <JqxCheckBox theme={'material-purple'} height={25} onChange={this.btnXAxisFlipOnChange}>
                                    Flip xAxis Positions
                            </JqxCheckBox>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    private sliderValueAxisLeftPaddingOnChange(event: any): void {
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.padding!.left = event.args.value;
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }

    private sliderValueAxisRightPaddingOnChange(event: any): void {
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.padding!.right = event.args.value;
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }

    private sliderValueAxisAngleOnChange(event: any): void {
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.labels!.angle = event.args.value;
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }

    private sliderXAxisTopPaddingOnChange(event: any): void {
        const newXAxis = this.state.xAxis;
        newXAxis!.padding!.top = event.args.value;
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }

    private sliderXAxisBottomPaddingOnChange(event: any): void {
        const newXAxis = this.state.xAxis;
        newXAxis!.padding!.bottom = event.args.value;
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }

    private sliderXAxisAngleOnChange(event: any): void {
        const newXAxis = this.state.xAxis;
        newXAxis!.labels!.angle = event.args.value;
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }

    private btnLeftOnChange(event: any): void {
        if (event.args.checked) {
            const newValueAxis = this.state.valueAxis;
            newValueAxis!.position = 'left';
            this.setState({
                valueAxis: newValueAxis
            }, () => {
                this.myChart.current!.refresh();

            });
        }
    }

    private btnRightOnChange(event: any): void {
        if (event.args.checked) {
            const newValueAxis = this.state.valueAxis;
            newValueAxis!.position = 'right';
            this.setState({
                valueAxis: newValueAxis
            }, () => {
                this.myChart.current!.refresh();

            });
        }
    }

    private btnTopOnChange(event: any): void {
        if (event.args.checked) {
            const newXAxis = this.state.xAxis;
            newXAxis!.position = 'top';
            this.setState({
                xAxis: newXAxis
            }, () => {
                this.myChart.current!.refresh();
            });
        }
    }

    private btnBottomOnChange(event: any): void {
        if (event.args.checked) {
            const newXAxis = this.state.xAxis;
            newXAxis!.position = 'bottom';
            this.setState({
                xAxis: newXAxis
            }, () => {
                this.myChart.current!.refresh();
            });
        }
    }

    private btnValueAxisFlipOnChange(event: any): void {
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.flip = event.args.checked;
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }

    private btnXAxisFlipOnChange(event: any): void {
        const newXAxis = this.state.xAxis;
        newXAxis!.flip = event.args.checked;
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }
}

export default App; 