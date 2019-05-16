import * as React from 'react';
 


import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'month' },
                { name: 'min' },
                { name: 'max' }
            ],
            datatype: 'json',
            url: 'weather_geneva.txt'
        };

        this.state = {
            description: 'Climatological Information about Geneva',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'max', displayText: 'Max Temperature' },
                        { dataField: 'min', displayText: 'Min Temperature' }
                    ],
                    type: 'column'
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Weather in Geneva, Switzerland',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: {
                    formatSettings: {
                        decimalPlaces: 1,
                        negativeWithBrackets: false
                    },
                    horizontalAlignment: 'right'
                },
                title: {
                    text: 'Temperature [C]<br>',
                    visible: true
                },
                unitInterval: 5
            },
            xAxis: {
                dataField: 'month',
                displayText: 'Month',
                gridLines: { interval: 3 },
                unitInterval: 1
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme05'} />
        );
    }
}

export default App;