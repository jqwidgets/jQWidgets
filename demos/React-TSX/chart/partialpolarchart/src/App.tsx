import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.sliderStartAngle = this.sliderStartAngle.bind(this);
        this.sliderEndAngle = this.sliderEndAngle.bind(this);
        this.sliderRotate = this.sliderRotate.bind(this);
        this.sliderRadius = this.sliderRadius.bind(this);
        this.checkBoxTicksBetween = this.checkBoxTicksBetween.bind(this);
        this.checkBoxAutoRotate = this.checkBoxAutoRotate.bind(this);

        const dataset: any[] = [
            { City: 'London', SalesCountJan: 210, SalesRevenueJan: 123 },
            { City: 'Madrid', SalesCountJan: 190, SalesRevenueJan: 114 },
            { City: 'Munich', SalesCountJan: 201, SalesRevenueJan: 112 },
            { City: 'Amsterdam', SalesCountJan: 110, SalesRevenueJan: 98 },
            { City: 'Paris', SalesCountJan: 105, SalesRevenueJan: 93 },
            { City: 'Prague', SalesCountJan: 54, SalesRevenueJan: 100 }
        ];

        this.state = {
            description: '(revenue in thousands)',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    endAngle: 270,
                    polar: true,
                    radius: 120,
                    series: [
                        { dataField: 'SalesCountJan', displayText: 'Sales count', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                        { dataField: 'SalesRevenueJan', displayText: 'Revenue', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
                    ],
                    type: 'line'
                }
            ],
            source: dataset,
            title: 'Sales volume and revenue by city',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
            valueAxis: {
                labels: {
                    autoRotate: true,
                    formatSettings: { decimalPlaces: 0 }
                }
            },
            xAxis: {
                dataField: 'City',
                labels: { autoRotate: true },
                valuesOnTicks: true
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description} showLegend={true}
                    enableAnimations={false} padding={this.state.padding} titlePadding={this.state.titlePadding}
                    source={this.state.source} xAxis={this.state.xAxis} valueAxis={this.state.valueAxis}
                    seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />

                <table style={{ width: '850px' }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: '50px' }}>
                                <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to change start angle:</p>
                                <JqxSlider theme={'material-purple'} onChange={this.sliderStartAngle}
                                    width={240} min={0} max={360} step={1}
                                    ticksFrequency={20} mode={'fixed'} />
                            </td>
                            <td>
                                <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to change end angle:</p>
                                <JqxSlider theme={'material-purple'} onChange={this.sliderEndAngle}
                                    width={240} min={0} max={360} step={1}
                                    ticksFrequency={20} mode={'fixed'} value={90} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '50px' }}>
                                <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to rotate:</p>
                                <JqxSlider theme={'material-purple'} onChange={this.sliderRotate}
                                    width={240} min={80} max={360} step={1}
                                    ticksFrequency={20} mode={'fixed'} />
                            </td>
                            <td>
                                <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to change the radius:</p>
                                <JqxSlider theme={'material-purple'} onChange={this.sliderRadius}
                                    width={240} min={80} max={140} step={1}
                                    ticksFrequency={20} mode={'fixed'} value={120} />
                            </td>
                        </tr >
                        <tr style={{ height: '15px' }} />
                        <tr>
                            <td style={{ paddingLeft: '50px' }}>
                                <JqxCheckBox theme={'material-purple'} onChange={this.checkBoxTicksBetween}
                                    width={220} height={25}>
                                    Tick marks between values
                                </JqxCheckBox>
                            </td>
                            <td>
                                <JqxCheckBox theme={'material-purple'} onChange={this.checkBoxAutoRotate}
                                    width={220} height={25} checked={true}>
                                    Auto rotate axis text
                                </JqxCheckBox>
                            </td >
                        </tr >
                    </tbody>
                </table>
            </div>
        );
    }

    private sliderStartAngle(event: any): void {
        const value = event.args.value;
        const newSeriesGroups = this.state.seriesGroups;
        newSeriesGroups![0].startAngle = value;
        this.setState({
            seriesGroups: newSeriesGroups
        }, () => {
            this.myChart.current!.update();
        });
    }

    private sliderEndAngle(event: any): void {
        const value = 360 - event.args.value;
        const newSeriesGroups = this.state.seriesGroups;
        newSeriesGroups![0].endAngle = value;
        this.setState({
            seriesGroups: newSeriesGroups
        }, () => {
            this.myChart.current!.update();
        });
    }

    private sliderRotate(event: any): void {
        const value = event.args.value;
        const newSeriesGroups = this.state.seriesGroups;
        let endAngle = newSeriesGroups![0].endAngle;
        if (isNaN(endAngle!)) {
            endAngle = 360;
        }
        let startAngle = newSeriesGroups![0].startAngle
        if (isNaN(startAngle!)) {
            startAngle = 0;
        }
        const diff = endAngle! - startAngle!;
        newSeriesGroups![0].startAngle = value;
        newSeriesGroups![0].endAngle = value + diff;
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