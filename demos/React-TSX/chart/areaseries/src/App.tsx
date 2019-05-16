import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props); 

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const source = {
            datafields: [
                { name: 'Date' },
                { name: 'S&P 500' },
                { name: 'NASDAQ' }
            ],
            datatype: 'csv',
            url: 'nasdaq_vs_sp500.txt'
        }; 
          
        this.state = {
            description: 'NASDAQ Composite compared to S&P 500',
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            seriesGroups: [
                {
                    alignEndPointsWithIntervals: true,
                    series: [
                        { dataField: 'NASDAQ', displayText: 'NASDAQ', opacity: 0.7 },
                        { dataField: 'S&P 500', displayText: 'S&P 500', opacity: 0.8 }
                    ],
                    type: 'area'
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'U.S. Stock Market Index Performance',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                title: { text: 'Daily Closing Price<br>' }
            },
            xAxis: {
                baseUnit: 'month',
                dataField: 'Date',
                labels: {
                    angle: -45,
                    formatFunction: (value: any) => {
                        return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                    },
                    offset: { x: 0, y: -15 },
                    rotationPoint: 'topright'
                },
                maxValue: new Date(2014, 11, 1),
                minValue: new Date(2014, 0, 1),
                toolTipFormatFunction: (value: any) => {
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
                title={this.state.title} description={this.state.description} titlePadding={this.state.titlePadding}
                showLegend={true} enableAnimations={true} enableCrosshairs={true} padding={this.state.padding}
                source={this.state.source} xAxis={this.state.xAxis} valueAxis={this.state.valueAxis}
                colorScheme={'scheme05'} seriesGroups={this.state.seriesGroups} />
        );
    }
}

export default App; 