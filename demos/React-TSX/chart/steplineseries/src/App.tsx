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

        this.state = {
            description: 'Closing price (June 2013 - March 2018)',
            padding: { left: 15, top: 5, right: 30, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'Close', displayText: 'Close Price', lineWidth: 1, symbolSize: 6 }
                    ],
                    type: 'stepline',
                    valueAxis:
                    {
                        flip: false,
                        labels: { horizontalAlignment: 'right' },
                        title: { text: 'Price per share [USD]<br>' }
                    }
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Tesla Motors Stock Price',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                baseUnit: 'month',
                dataField: 'Date',
                labels: {
                    angle: 0,
                    formatFunction: (value: any): string => {
                        return months[value.getUTCMonth()] + '-' + value.getFullYear();
                    },
                    horizontalAlignment: 'right'
                },
                maxValue: new Date(2014, 2, 1),
                minValue: new Date(2013, 5, 1),
                tickMarks: { visible: true },
                toolTipFormatFunction: (value: any): string => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
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
                showLegend={true} enableAnimations={true} padding={this.state.padding} enableCrosshairs={true}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis} crosshairsColor={'#0000FF'}
                crosshairsDashStyle={'1,1'} seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
        );
    }
}

export default App;