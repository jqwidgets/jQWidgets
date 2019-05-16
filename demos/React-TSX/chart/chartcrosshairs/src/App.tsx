import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const source: any = {
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
            padding: { left: 10, top: 5, right: 30, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'S&P 500', displayText: 'S&P 500' },
                        { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                    ],
                    type: 'line',
                    valueAxis: {
                        title: { text: 'Daily Closing Price<br><br>' }
                    }
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'U.S. Stock Market Index Performance',
            titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
            xAxis: {
                baseUnit: 'month',
                dataField: 'Date',
                formatFunction: (value: any): string => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                },
                gridLines: { interval: 3 },
                labels: {
                    angle: -45,
                    offset: { x: 0, y: -25 },
                    rotationPoint: 'topright'                    
                },
                maxValue: '01-01-2015',
                minValue: '01-01-2014',                            
                type: 'date',
                unitInterval: 1,
                valuesOnTicks: true
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} enableCrosshairs={true}
                crosshairsDashStyle={'2,2'} crosshairsLineWidth={1} crosshairsColor={'#888888'}
                padding={this.state.padding} titlePadding={this.state.titlePadding} source={this.state.source}
                xAxis={this.state.xAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
        );
    }
}

export default App; 