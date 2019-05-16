import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();
    private eventsText = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.dumpEventInfo = this.dumpEventInfo.bind(this);

        const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const source: any = {
            datafields: [
                { name: 'Date' },
                { name: 'SPOpen' },
                { name: 'SPHigh' },
                { name: 'SPLow' },
                { name: 'SPClose' },
                { name: 'SPVolume' },
                { name: 'SPAdjClose' }
            ],
            datatype: 'tsv',
            url: 'nasdaq_vs_sp500_detailed.txt'
        };
        const dataAdapter = new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } });

        const toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
            const dataItem = dataAdapter.records[itemIndex];
            const volume = dataItem.SPVolume;
            return '<DIV style="text-align:left"><b>Date: ' +
                categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
                '</b><br />Index value: ' + value +
                '</b><br />Daily volume: ' + volume +
                '</DIV>';
        };

        this.state = {
            description: '(June 2010 - November 2014)',
            padding: { left: 20, top: 5, right: 20, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        {
                            dataField: 'SPClose',
                            displayText: 'S&P Index Value',
                            lineWidth: 1,
                            linesUnselectMode: 'click'
                        }
                    ],
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    type: 'line',
                    valueAxis: {
                        gridLines: { visible: false },
                        title: { text: 'S&P 500<br>' }
                    }
                },
                {
                    series: [
                        {
                            dataField: 'SPVolume',
                            displayText: 'S&P Index Volume',
                            lineWidth: 1,
                            linesUnselectMode: 'click',
                            opacity: 0.2
                        }
                    ],
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    type: 'area',
                    valueAxis:
                    {
                        gridLines: { visible: false },
                        labels: {
                            formatFunction: (value) => {
                                return value / 1000000 + 'M';
                            }
                        },
                        position: 'right',
                        title: { text: '<br>Daily Volume' }
                    }
                }
            ],
            source: dataAdapter,
            title: 'S&P 500 Index value and daily volume',
            xAxis: {
                dataField: 'Date',
                gridLines: { visible: false },
                labels:
                {
                    formatFunction: (value: any) => {
                        return value.getDate() + '-' + months[value.getMonth()] + '<br>' + value.getFullYear().toString();
                    }
                },
                maxValue: new Date(2014, 10, 1),
                minValue: new Date(2014, 1, 1),
                rangeSelector: {
                    backgroundColor: 'white',
                    baseUnit: 'month',
                    dataField: 'SPClose',
                    formatFunction: (value: any) => {
                        return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                    },
                    padding: { top: 10, bottom: 0 },
                    showGridLines: false,
                    size: 100
                },
                type: 'date',
                valuesOnTicks: true
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    onClick={this.dumpEventInfo} onToggle={this.dumpEventInfo}
                    onRangeSelectionChanging={this.dumpEventInfo} onRangeSelectionChanged={this.dumpEventInfo}
                    onRefreshBegin={this.dumpEventInfo} onRefreshEnd={this.dumpEventInfo}
                    title={this.state.title} description={this.state.description}
                    enableCrosshairs={true} enableAnimations={true} padding={this.state.padding}
                    animationDuration={1500} source={this.state.source} xAxis={this.state.xAxis}
                    seriesGroups={this.state.seriesGroups} colorScheme={'scheme17'} />
                <br />
                <br />
                <div ref={this.eventsText} style={{ width: '847px', height: '200px', overflow: 'scroll', border: '1px solid lightgrey' }} />
            </div>
        );
    }

    private dumpEventInfo(event: any) {
        if (event.args) {
            const args = event.args;
            if (event.type.indexOf('refresh') !== -1) {
                if (this.myChart.current!.getInstance() !== args.instance) {
                    return;
                }
            }
            const date = new Date();
            let line = 'Time: ' + (date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()) + ', event: ' + event.type;
            if (args.elementIndex) {
                line += ', element index: ' + args.elementIndex;
            }
            if (args.elementValue) {
                line += ', value: ' + args.elementValue;
            }
            if (event.type === 'toggle') {
                line += ', series group index: ' + this.state.seriesGroups!.indexOf(args.seriesGroup);
                line += ', visible: ' + args.state;
            }
            if (event.type.indexOf('rangeSelection') !== -1) {
                line += ', minValue: ' + args.minValue.getFullYear() + '-' + (args.minValue.getMonth() + 1) + '-' + args.minValue.getDate();
                line += ', maxValue: ' + args.maxValue.getFullYear() + '-' + (args.maxValue.getMonth() + 1) + '-' + args.maxValue.getDate();
            }
            const textArea = this.eventsText;
            textArea.current!.innerHTML = line + '<br />' + textArea.current!.innerHTML;
        }
    }
}

export default App; 