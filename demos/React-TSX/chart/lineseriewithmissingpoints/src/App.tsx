import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.dropDownOnSelect = this.dropDownOnSelect.bind(this);

        const sampleData: any[] = [29, undefined, 10, 15, 10, undefined, NaN, 30, 25, undefined, 33, 19, 11];

        this.state = {
            description: 'Sample line serie with missing and invalid values',
            padding: { left: 5, top: 5, right: 15, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { emptyPointsDisplay: 'skip', displayText: 'Value', lineWidth: 2, symbolSize: 8, symbolType: 'circle' }
                    ],
                    source: sampleData,
                    toolTipFormatFunction: (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
                        return '<DIV style="text-align:left"><b>Index:</b> ' +
                            itemIndex + '<br /><b>Value:</b> ' +
                            value + '<br /></DIV>';
                    },
                    type: 'line',
                    valueAxis:
                    {
                        title: { text: 'Value<br>' }
                    }                   
                }
            ],
            source: sampleData,
            title: 'Line serie with missing points',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            xAxis: {
                valuesOnTicks: false
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description}
                    showLegend={true} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    seriesGroups={this.state.seriesGroups} colorScheme={'scheme05'} />

                <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Select missing points display mode:</p>

                <JqxDropDownList theme={'material-purple'} onSelect={this.dropDownOnSelect}
                    width={220} height={25} selectedIndex={0}
                    dropDownHeight={85} source={['skip', 'zero', 'connect']} />
            </div>
        );
    }

    private dropDownOnSelect(event: any): void {
        const args = event.args;

        if (args) {
            const value = args.item.value;
            const newSeriesGroups = this.state.seriesGroups;
            newSeriesGroups![0].series![0].emptyPointsDisplay = value;
            this.setState({
                seriesGroups: newSeriesGroups
            }, () => {
                this.myChart.current!.update();
            });
        }
    }
}

export default App; 