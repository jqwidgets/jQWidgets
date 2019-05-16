import * as React from 'react';
 


import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IChartProps {
    colorsSchemesList: IDropDownListProps['source'];
    schemeSelectedIndex: IDropDownListProps['selectedIndex'];
    seriesList: IDropDownListProps['source'];
    seriesTypeSelectedIndex: IDropDownListProps['selectedIndex'];
}

class App extends React.PureComponent<{}, IState> {

    private myChart = React.createRef<JqxChart>();
    private data: any[] = [];

    constructor(props: {}) {
        super(props);
        this.colorsOnChange = this.colorsOnChange.bind(this);
        this.seriesOnChange = this.seriesOnChange.bind(this);
        this.generateChartData = this.generateChartData.bind(this);     

        this.generateChartData();
        
        this.state = {
            colorScheme: 'scheme03',
            colorsSchemesList: ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'],
            description: '',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            schemeSelectedIndex: 2,
            seriesGroups: [
                {
                    alignEndPointsWithIntervals: true,
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'value', displayText: 'value', opacity: 1, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 }
                    ],
                    type: 'line',
                    valueAxis:
                    {
                        maxValue: 1000,
                        minValue: 0,
                        title: { text: 'Index Value' }
                    }
                }
            ],
            seriesList: ['line', 'area', 'stepline', 'steparea', 'splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'],
            seriesTypeSelectedIndex: 0,
            source: this.data,
            title: 'Live updates demo',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: { horizontalAlignment: 'right' },
                maxValue: 1000,
                minValue: 0,
                title: { text: 'Index Value' }
            },
            xAxis: {
                baseUnit: 'second',
                dataField: 'timestamp',
                formatFunction: (value: any) => {
                    return jqx.dataFormat.formatdate(value, 'hh:mm:ss', 'en-us');
                },
                gridLines: { step: 2 },
                labels: { angle: -45, offset: { x: -17, y: 0 } },
                type: 'date',
                unitInterval: 5,               
                valuesOnTicks: true                
            }
        };
    }

    public componentDidMount() {
        const newSource = this.state.source;
        const max = 800;
        setInterval(() => {
            if (newSource.length >= 60) {
                newSource.splice(0, 1);
                const timestamp = new Date();
                timestamp.setSeconds(timestamp.getSeconds());
                timestamp.setMilliseconds(0);
                newSource.push({ timestamp, value: Math.max(100, (Math.random() * 1000) % max) });
                this.setState({
                    source: newSource
                }, () => {
                    this.myChart.current!.update();
                });
            }
        }, 1000);
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description} enableAxisTextAnimation={true}
                    showLegend={true} enableAnimations={false} animationDuration={1000} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={this.state.colorScheme} />
                <table style={{ width: '680px' }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: '50px' }}>
                                <p>Select the series type:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.seriesOnChange}
                                    width={200} height={25} selectedIndex={this.state.seriesTypeSelectedIndex}
                                    dropDownHeight={100} source={this.state.seriesList} />
                            </td>
                            <td>
                                <p>Select color scheme:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.colorsOnChange}
                                    width={200} height={25} selectedIndex={this.state.schemeSelectedIndex}
                                    dropDownHeight={100} source={this.state.colorsSchemesList} />
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div>
        );
    }

    private colorsOnChange(event: any): void {
        const value = event.args.item.value;
        const index = event.args.index;
        this.setState({
            colorScheme: value,
            schemeSelectedIndex: index
        }, () => {
            this.myChart.current!.update();
        });
    }

    private seriesOnChange(event: any): void {
        const args = event.args;
        if (args) {
            const index = event.args.index;
            const value = args.item.value;
            const newSeriesGroups = this.state.seriesGroups;
            newSeriesGroups![0].type = value;
            this.setState({
                seriesGroups: newSeriesGroups,
                seriesTypeSelectedIndex: index
            }, () => {
                this.myChart.current!.update();
            });
        }
    }

    private generateChartData(): void {
        const max = 800;
        const timestamp = new Date();
        for (let i = 0; i < 60; i++) {
            timestamp.setMilliseconds(0);
            timestamp.setSeconds(timestamp.getSeconds() - 1);
            this.data.push({ timestamp: new Date(timestamp.valueOf()), value: Math.max(100, (Math.random() * 1000) % max) });
        }
        this.data = this.data.reverse();
    }
}

export default App; 