import * as React from 'react';
 


import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
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

        const source: any = {
            datafields: [
                { name: 'Year' },
                { name: 'HPI' },
                { name: 'BuildCost' },
                { name: 'Population' },
                { name: 'Rate' }
            ],
            datatype: 'tab',
            url: 'homeprices.txt'
        };

        this.state = {
            colorScheme: 'scheme01',
            colorsSchemesList: ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'],
            description: 'Source: http://www.econ.yale.edu/~shiller/data.htm',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            schemeSelectedIndex: 0,
            seriesGroups: [
                {
                    polar: true,
                    radius: 120,
                    series: [
                        { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7, lineWidth: 1, radius: 2 },
                        { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.7, lineWidth: 1, radius: 2 }
                    ],
                    type: 'splinearea',
                    valueAxis:
                    {
                        labels: {
                            autoRotate: true,
                            formatSettings: { decimalPlaces: 0 }
                        }
                    }                   
                }
            ],
            seriesList: ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'],
            seriesSelectedIndex: 0,
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'U.S. Real Home Price vs Building Cost Indeces (1950-2019)',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
            xAxis: {
                dataField: 'Year',
                labels: { autoRotate: true },
                maxValue: 2010,
                unitInterval: 10,
                valuesOnTicks: true
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description}
                    showLegend={true} enableAnimations={true} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    seriesGroups={this.state.seriesGroups} colorScheme={this.state.colorScheme} />

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
                        </tr >
                    </tbody >
                </table >
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
}

export default App;