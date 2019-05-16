import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IChartProps {
    symbolsList: IDropDownListProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.dropDownSerie1SymbolOnChange = this.dropDownSerie1SymbolOnChange.bind(this);
        this.dropDownSerie2SymbolOnChange = this.dropDownSerie2SymbolOnChange.bind(this);

        const sampleData: any[] = [
            { City: 'New York', SalesQ1: 330500, SalesQ2: 210500, YoYGrowth: 1.05 },
            { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowth: 1.15 },
            { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowth: 1.45 },
            { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowth: 0.45 },
            { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowth: 1.65 },
            { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowth: 1.25 },
            { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowth: 0.75 }
        ];

        this.state = {
            description: '',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'SalesQ1', symbolSize: 20, symbolType: 'circle', displayText: 'Sales in Q1' },
                        { dataField: 'SalesQ2', symbolSize: 20, symbolType: 'diamond', displayText: 'Sales in Q2' }
                    ],
                    type: 'scatter'
                }
            ],
            source: sampleData,
            symbolsList: ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right'],
            title: 'Sales by City in Q1 & Q2',
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
                    title={this.state.title} description={this.state.description} rtl={true}
                    showLegend={true} enableAnimations={true} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
                <table style={{ width: '550px' }}>
                    <tbody>
                        <tr>
                            <td>
                                <p>Select Serie 1 Symbol:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.dropDownSerie1SymbolOnChange}
                                    width={200} height={25} selectedIndex={2}
                                    dropDownHeight={100} source={this.state.symbolsList} />
                            </td>
                            <td>
                                <p>Select Serie 2 Symbol:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.dropDownSerie2SymbolOnChange}
                                    width={200} height={25} selectedIndex={1}
                                    dropDownHeight={100} source={this.state.symbolsList} />
                            </td>
                        </tr>
                    </tbody>
                </table>           
            </div>
        );
    }

    private dropDownSerie1SymbolOnChange(event: any): void {
        const value = event.args.item.value;
        const newSeriesGroups = this.state.seriesGroups;
        newSeriesGroups![0].series![0].symbolType = value;
        this.setState({
            seriesGroups: newSeriesGroups
        }, () => {
            this.myChart.current!.update();
        });
    }

    private dropDownSerie2SymbolOnChange(event: any): void {
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