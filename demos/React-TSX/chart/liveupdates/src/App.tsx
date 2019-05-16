import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IChartProps {
    colorsSchemesList: IDropDownListProps['source'];
    schemeSelectedIndex: IDropDownListProps['selectedIndex'];
    seriesList: IDropDownListProps['source'];
    seriesTypeSelectedIndex: IDropDownListProps['selectedIndex'];
}

class App extends React.PureComponent<{}, IState> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.colorsOnChange = this.colorsOnChange.bind(this);
        this.seriesOnChange = this.seriesOnChange.bind(this);

        const data: any[] = [
            { a: 100, b: 200, c: 1 },
            { a: 120, b: 140, c: 2 },
            { a: 100, b: 110, c: 3 },
            { a: 90, b: 135, c: 4 },
            { a: 70, b: 210, c: 5 },
            { a: 170, b: 210, c: 5 },
            { a: 270, b: 350, c: 5 },
            { a: 710, b: 410, c: 5 },
            { a: 230, b: 305, c: 5 }
        ];

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
                        { dataField: 'a', displayText: 'a', opacity: 1, lineWidth: 1, symbolType: 'circle', fillColorSymbolSelected: 'white', radius: 15 },
                        { dataField: 'b', displayText: 'b', opacity: 1, lineWidth: 1, symbolType: 'circle', fillColorSymbolSelected: 'white', radius: 15 }
                    ],
                    type: 'column'
                }
            ],
            seriesList: ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'],
            seriesTypeSelectedIndex: 2,
            source: data,
            title: 'Live updates demo',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: { horizontalAlignment: 'right' },
                maxValue: 1000,
                minValue: 0,
                title: { text: 'Index Value' }
            },
            xAxis: {
                gridLines: { interval: 2 },
                unitInterval: 1,
                valuesOnTicks: false
            }
        };
    }

    public componentDidMount() {
        const newSource = this.state.source;
        const max = 800;
        setInterval(() => {
            for (const sourceItem of newSource) {
                sourceItem.a = Math.max(100, (Math.random() * 1000) % max);
                sourceItem.b = Math.max(100, (Math.random() * 1000) % max);
            }
            this.setState({
                source: newSource
            }, () => {
                this.myChart.current!.update();
            });
        }, 3000);
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description} enableAxisTextAnimation={true}
                    showLegend={true} enableAnimations={true} animationDuration={1000} padding={this.state.padding}
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
            const isLine = value.indexOf('line') !== -1;
            const isArea = value.indexOf('area') !== -1;
            const newSeriesGroups = this.state.seriesGroups;
            const group = newSeriesGroups![0];
            group!.series![0].opacity = group!.series![1].opacity = isArea ? 0.7 : 1;
            group!.series![0].lineWidth = group!.series![1].lineWidth = isLine ? 2 : 1;
            group.type = value;
            this.setState({
                seriesGroups: newSeriesGroups,
                seriesTypeSelectedIndex: index
            }, () => {
                this.myChart.current!.update();
            });
        }
    }
}

export default App; 