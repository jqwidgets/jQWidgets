import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

export interface IState extends IChartProps {
    colorsSchemesList: IDropDownListProps['source'];
    schemeSelectedIndex: IDropDownListProps['selectedIndex'];
    seriesList: IDropDownListProps['source'];
    seriesSelectedIndex: IDropDownListProps['selectedIndex']
}

class App extends React.PureComponent<{}, IState> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.sliderStartAngle = this.sliderStartAngle.bind(this);
        this.sliderRadius = this.sliderRadius.bind(this);
        this.dropDownListColor = this.dropDownListColor.bind(this);
        this.dropDownListSeries = this.dropDownListSeries.bind(this);
        this.checkBoxAutoRotate = this.checkBoxAutoRotate.bind(this);
        this.checkBoxTicksBetween = this.checkBoxTicksBetween.bind(this);

        const data: any[] = [
            { type: 'Organic Search', month1: 1725090, month2: 3136190 },
            { type: 'Paid Search', month1: 925090, month2: 2136190 },
            { type: 'Direct', month1: 425090, month2: 936190 },
            { type: 'Referral', month1: 1250900, month2: 2536190 },
            { type: 'Twitter', month1: 350900, month2: 681900 },
            { type: 'Facebook',  month1: 381900, month2: 831500 }
        ];

        this.state = {
            colorScheme: 'scheme05',
            colorsSchemesList: ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'],
            description: 'Month over month comparison',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            schemeSelectedIndex: 4,
            seriesGroups: [
                {
                    endAngle: 360,
                    radius: 120,
                    series: [
                        { dataField: 'month1', displayText: 'January 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                        { dataField: 'month2', displayText: 'February 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
                    ],
                    spider: true,
                    startAngle: 0,
                    type: 'spline'
                }
            ],
            seriesList: ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'],
            seriesSelectedIndex: 1,
            source: data,
            title: 'Website audience acquision by source',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
            valueAxis: {
                labels: {
                    formatFunction: (value: any, itemIndex: any, serieIndex: any, groupIndex: any): string => {
                        return Math.round(value / 1000) + ' K';
                    },
                    formatSettings: { decimalPlaces: 0 }
                },
                unitInterval: 1000000               
            },
            xAxis: {
                dataField: 'type',
                displayText: 'Traffic source',
                labels: { autoRotate: false },
                valuesOnTicks: true
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
                    valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={this.state.colorScheme} />

                <table style={{ width: '850px' }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: '50px' }}>
                                <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to rotate:</p>
                                <JqxSlider theme={'material-purple'} onChange={this.sliderStartAngle}
                                    width={240} min={0} max={360} step={1}
                                    ticksFrequency={20} mode={'fixed'} />

                            </td>
                            <td>
                                <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Select the series type:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.dropDownListSeries}
                                    width={200} height={25} source={this.state.seriesList}
                                    selectedIndex={this.state.seriesSelectedIndex} dropDownHeight={100} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '50px' }}>
                                <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to change the radius:</p>
                                <JqxSlider theme={'material-purple'} onChange={this.sliderRadius}
                                    width={240} min={80} max={140} step={1}
                                    ticksFrequency={20} mode={'fixed'} value={120} />

                            </td>
                            <td>
                                <p style={{ fontFamily: 'Verdana', fontSize: '12px' }} >Select color scheme:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.dropDownListColor}
                                    width={200} height={25} source={this.state.colorsSchemesList}
                                    selectedIndex={this.state.schemeSelectedIndex} dropDownHeight={100} />
                            </td>
                        </tr>
                        <tr style={{ height: '15px' }} />
                        <tr>
                            <td style={{ paddingLeft: '50px' }}>
                                <JqxCheckBox theme={'material-purple'} onChange={this.checkBoxAutoRotate}
                                    width={220} height={25}>
                                    Auto-rotate labels
                                </JqxCheckBox>
                            </td>
                            <td>
                                <JqxCheckBox theme={'material-purple'} onChange={this.checkBoxTicksBetween}
                                    width={220} height={25}>
                                    Ticks between values
                                </JqxCheckBox>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    private sliderStartAngle(event: any): void {
        const value = event.args.value;
        const newSeriesGroups = this.state.seriesGroups;
        newSeriesGroups![0].startAngle = value;
        newSeriesGroups![0].endAngle = value + 360;
        this.setState({
            seriesGroups: newSeriesGroups
        }, () => {
            this.myChart.current!.update();
        });
    }

    private sliderRadius(event: any): void {
        const value = event.args.value;
        const newSeriesGroups = this.state.seriesGroups;
        newSeriesGroups![0].radius = value;
        this.setState({
            seriesGroups: newSeriesGroups
        }, () => {
            this.myChart.current!.update();
        });
    }

    private dropDownListColor(event: any): void {
        const value = event.args.item.value;
        const index = event.args.index;
        this.setState({
            colorScheme: value,
            schemeSelectedIndex: index
        });
    }

    private dropDownListSeries(event: any): void {
        const value = event.args.item.value;
        const index = event.args.index;
        const newSeriesGroups = this.state.seriesGroups;
        newSeriesGroups![0].type = value;
        this.setState({
            seriesGroups: newSeriesGroups,
            seriesSelectedIndex: index
        }, () => {
            this.myChart.current!.update();
        });
    }

    private checkBoxTicksBetween(event: any): void {
        const newXAxis = this.state.xAxis;
        newXAxis!.valuesOnTicks = !event.args.checked;
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.update();
        });
    }

    private checkBoxAutoRotate(event: any): void {
        const newXAxis = this.state.xAxis;
        const newValueAxis = this.state.valueAxis;
        newXAxis!.labels!.autoRotate = event.args.checked;
        newValueAxis!.labels!.autoRotate = event.args.checked;
        this.setState({
            valueAxis: newValueAxis,
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.update();
        });
    }
}

export default App;