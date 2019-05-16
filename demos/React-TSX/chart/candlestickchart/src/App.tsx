import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

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
                '</b><br />Open price: $' + value.open +
                '</b><br />Close price: $' + value.close +
                '</b><br />Low price: $' + value.low +
                '</b><br />High price: $' + value.high +
                '</b><br />Daily volume: ' + volume +
                '</DIV>';
        };

        this.state = {
            description: '(June 2010 - November 2014)',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsMaxWidth: 15,
                    columnsMinWidth: 5,                                     
                    series: [
                        {
                            dataFieldClose: 'SPClose',
                            dataFieldHigh: 'SPHigh',
                            dataFieldLow: 'SPLow',
                            dataFieldOpen: 'SPOpen',
                            displayText: 'S&P 500',
                            displayTextClose: 'S&P Close price',
                            displayTextHigh: 'S&P High price',
                            displayTextLow: 'S&P Low price',
                            displayTextOpen: 'S&P Open price',                                            
                            lineWidth: 1
                        }
                    ],
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    type: 'candlestick',
                    valueAxis: {
                        title: {
                            text: 'S&P 50000<br>'
                        }
                            
                    }
                },
                {
                    series: [
                        {
                            dataField: 'SPVolume',
                            displayText: 'Volume',
                            lineWidth: 1
                        }
                    ],
                    type: 'line',
                    valueAxis:
                    {
                        gridLines: { visible: false },
                        labels: {
                            formatFunction: (value: number) => {
                                return (value / 1000000) + 'M';
                            }
                        },
                        position: 'right',
                        title: { text: '<br>Daily Volume' }                       
                    }
                }
            ],
            source: dataAdapter,
            title: 'S&P 500 Candlestick Chart',
            xAxis: {
                dataField: 'Date',
                labels: {
                    formatFunction: (value) => {
                        return value.getDate() + '-' + months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                    }
                },
                maxValue: new Date(2014, 10, 1),
                minValue: new Date(2014, 1, 1),
                rangeSelector: {
                    backgroundColor: 'white',
                    baseUnit: 'month',
                    dataField: 'SPClose',
                    gridLines: { visible: false },
                    labels: {
                        formatFunction: (value: any) => {
                            return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                        }
                    },
                    padding: { left: 25, right: 10, top: 10, bottom: 10 },
                    serieType: 'area'
                },
                type: 'date',
                valuesOnTicks: true                            
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                enableAnimations={true} enableCrosshairs={true} animationDuration={1500}
                source={this.state.source} xAxis={this.state.xAxis} padding={this.state.padding}
                seriesGroups={this.state.seriesGroups} colorScheme={'scheme17'} />
        );
    }
}

export default App; 