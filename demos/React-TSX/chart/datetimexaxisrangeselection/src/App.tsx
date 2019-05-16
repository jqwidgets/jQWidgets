import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const source: any = {
            datafields: [
                { name: 'Date' },
                { name: 'Open' },
                { name: 'High' },
                { name: 'Low' },
                { name: 'Close' },
                { name: 'Volume' },
                { name: 'AdjClose' }
            ],
            datatype: 'csv',
            url: 'TSLA_stockprice.csv'
        };
        const dataAdapter: any = new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } })

        this.state = {
            description: '(June 2010 - March 2018)',
            padding: { left: 5, top: 5, right: 30, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'Close', displayText: 'Close Price', lineWidth: 1 }
                    ],
                    toolTipFormatFunction: (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): any => {
                        const dataItem = dataAdapter.records[itemIndex];
                        return '<DIV style="text-align:left"><b>Date: ' +
                            categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
                            '</b><br />Open price: $' + dataItem.Open +
                            '</b><br />Close price: $' + dataItem.Close +
                            '</b><br />Daily volume: ' + dataItem.Volume +
                            '</DIV>';
                    },
                    type: 'line'
                }
            ],
            source: dataAdapter,
            title: 'Tesla Motors Stock Price',
            titlePadding: { left: 30, top: 5, right: 0, bottom: 10 },
            valueAxis: {
                labels: { horizontalAlignment: 'right' },
                title: { text: 'Price per share [USD]<br><br>' }
            },
            xAxis: {
                baseUnit: 'day',
                dataField: 'Date',
                labels: {
                    formatFunction: (value: any): any => {
                        return value.getDate() + '-' + months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                    }
                },
                maxValue: new Date(2013, 11, 31),
                minValue: new Date(2012, 0, 1),
                rangeSelector: {
                    backgroundColor: 'white',
                    baseUnit: 'month',
                    dataField: 'Close',
                    gridLines: { visible: false },
                    labels: {
                        formatFunction: (value: any): any => {
                            return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                        }
                    },
                    minValue: new Date(2010, 5, 1),
                    padding: { left: 0, right: 0, top: 0, bottom: 0 },
                    serieType: 'area',
                    size: 80
                },
                type: 'date'
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }} onRangeSelectionChanging={this.chartChange}
                title={this.state.title} description={this.state.description}
                enableCrosshairs={true} enableAnimations={true} padding={this.state.padding} xAxis={this.state.xAxis}
                titlePadding={this.state.titlePadding} source={this.state.source} animationDuration={1500}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
        );
    }

    private chartChange(event: any) {
        const args = event.args;
        args.instance.description = args.minValue.getFullYear() + " - " + args.maxValue.getFullYear();
    }
}

export default App; 