import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IChartProps {
    symbolsList: IDropDownListProps["source"]
}

class App extends React.PureComponent<{}, IState> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.dropDown1OnChange = this.dropDown1OnChange.bind(this);
        this.dropDown2OnChange = this.dropDown2OnChange.bind(this);

        const sampleData = [
            { City: 'New York', SalesQ1: 310500, SalesQ2: 210500, YoYGrowthQ1: 1.05, YoYGrowthQ2: 1.25 },
            { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowthQ1: 1.15, YoYGrowthQ2: 0.95 },
            { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowthQ1: 1.45, YoYGrowthQ2: 1.15 },
            { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowthQ1: 0.45, YoYGrowthQ2: 0.55 },
            { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowthQ1: 1.65, YoYGrowthQ2: 1.05 },
            { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.15 },
            { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.65 }
        ];

        this.state = {
            description: '(the size of the circles represents relative YoY growth)',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'SalesQ1', radiusDataField: 'YoYGrowthQ1', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q1' },
                        { dataField: 'SalesQ2', radiusDataField: 'YoYGrowthQ2', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q2' }
                    ],
                    type: 'bubble'
                }
            ],
            source: sampleData,
            symbolsList: ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right'],
            title: 'Sales by City in Q1 and Q2, and YoY sales growth',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: {
                    formatSettings: { prefix: '$', thousandsSeparator: ',' },
                    horizontalAlignment: 'right'
                },
                maxValue: 350000,
                minValue: 50000,
                title: { text: 'Sales ($)<br>' },              
                unitInterval: 50000
            },
            xAxis: {
                dataField: 'City',
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
                <table style={{ width: '550px' }}>
                    <tbody>
                        <tr>
                            <td>
                                <p>Select Serie 1 Symbol:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.dropDown1OnChange}
                                    width={200} height={25} selectedIndex={0}
                                    dropDownHeight={100} source={this.state.symbolsList} />
                            </td>
                            <td>
                                <p>Select Serie 2 Symbol:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.dropDown2OnChange}
                                    width={200} height={25} selectedIndex={0}
                                    dropDownHeight={100} source={this.state.symbolsList} />
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div>
        );
    }

    private dropDown1OnChange(event: any) {
        const value = event.args.item.value;
        const newSeriesGroups = this.state.seriesGroups;
        newSeriesGroups![0].series![0].symbolType = value;
        this.setState({
            seriesGroups: newSeriesGroups
        }, () => {
            this.myChart.current!.update();
        });
    }

    private dropDown2OnChange(event: any) {
        const value = event.args.item.value;
        const newSeriesGroups = this.state.seriesGroups;
        newSeriesGroups![0].series![1].symbolType = value;
        this.setState({
            seriesGroups: newSeriesGroups
        }, () => {
            this.myChart.current!.update();
        });
    }
}

export default App; 