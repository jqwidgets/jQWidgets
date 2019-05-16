import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IChartProps {
    colorsSchemesList: IDropDownListProps['source'];
    schemeSelectedIndex: IDropDownListProps['selectedIndex'];
} 

class App extends React.PureComponent<{}, IState> {
    private myBtn = React.createRef<JqxButton>();
    private myChart = React.createRef<JqxChart>();
    private data: any[] = [];
    private timer: any;

    constructor(props: {}) {
        super(props);
        this.colorsOnChange = this.colorsOnChange.bind(this);
        this.generateChartData = this.generateChartData.bind(this);     
        this.timerFunction = this.timerFunction.bind(this);
        this.btnOnClick = this.btnOnClick.bind(this);

        this.generateChartData();
        
        this.state = {
            colorScheme: 'scheme01',
            colorsSchemesList: ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'],
            description: 'Data changes every 100 milliseconds',
            padding: { left: 10, top: 10, right: 10, bottom: 10 },
            schemeSelectedIndex: 0,
            seriesGroups: [
                {
                    series: [
                        { dataField: 'value1', displayText: 'value1', lineWidth: 2, symbolType: 'circle', useGradientColors: false }
                    ],
                    type: 'line'
                },
                {
                    alignEndPointsWithIntervals: true,
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'value2', displayText: 'value2', useGradientColors: false }
                    ],
                    type: 'spline'
                },
                {
                    alignEndPointsWithIntervals: true,
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'value3', displayText: 'value3', useGradientColors: false }
                    ],
                    type: 'column'
                }
            ],
            source: this.data,
            title: 'Live updates performance',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                maxValue: 750,
                minValue: 0,
                title: { text: 'Index Value' }
            },
            xAxis: {
                dataField: 'key',
                gridLines: { visible: false },
                unitInterval: 1,
                valuesOnTicks: true 
            }
        };
    }

    public componentDidMount() {
        this.timer = setInterval(this.timerFunction, 100);
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description}
                    showLegend={true} enableAnimations={false} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={this.state.colorScheme} />
                <table style={{ width: '680px' }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: '50px' }}>
                                <p>Pause / Resume updates:</p>
                                <JqxButton theme={'material-purple'} ref={this.myBtn} onClick={this.btnOnClick} width={160}>
                                    Pause
                                </JqxButton>
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

    private btnOnClick(event: any): void {
        if (this.timer) {
            clearInterval(this.timer);
            this.myBtn.current!.val('Resume');
            this.timer = undefined;
        }
        else {
            this.timer = setInterval(this.timerFunction, 100);
            this.myBtn.current!.val('Pause');
        }
    }

    private timerFunction(): void {
        const newSource = this.state.source;
        newSource.splice(0, 1);
        newSource.push({
            key: newSource[newSource.length - 1].key + 1,
            value1: (Math.random() * 200) % 200 + 200,
            value2: (Math.random() * 200) % 200 + 500,
            value3: (Math.random() * 200) % 200,
        });
        this.setState({
            source: newSource
        }, () => {
            this.myChart.current!.update();
        });
    }

    private generateChartData(): void {
        for (let i = 0; i < 20; i++) {
            this.data.push({
                key: i,
                value1: (Math.random() * 200) % 200 + 200,
                value2: (Math.random() * 200) % 200 + 500,
                value3: (Math.random() * 200) % 200
            });
        }
    }
}

export default App;