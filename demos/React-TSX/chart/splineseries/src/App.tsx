import * as React from 'react';
 


import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'Year' },
                { name: 'HPI' },
                { name: 'BuildCost' },
                { name: 'Population' },
                { name: 'Rate' }
            ],
            datatype: 'tab',
            url: 'homeprices.txt'
        };

        this.state = {
            description: 'Source: http://www.econ.yale.edu/~shiller/data.htm',
            padding: { left: 5, top: 5, right: 25, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'Population', displayText: 'Population' }
                    ],
                    type: 'line',
                    valueAxis:
                    {
                        gridLines: { visible: false },
                        padding: { left: 10 },
                        title: { text: 'U.S. Population (millions)<br>' },
                        unitInterval: 10
                    }
                },
                {
                    series: [
                        { dataField: 'Rate', displayText: 'Interest Rate' }
                    ],
                    type: 'spline',
                    valueAxis:
                    {
                        unitInterval: 1,
                        visible: false
                    }
                },
                {
                    series: [
                        { dataField: 'HPI', displayText: 'Real Home Price Index' },
                        { dataField: 'BuildCost', displayText: 'Building Cost Index' }
                    ],
                    type: 'spline',
                    valueAxis:
                    {
                        labels: {
                            formatSettings: { decimalPlaces: 0 },
                            horizontalAlignment: 'right',
                        },
                        title: { text: 'Index Value<br>' },
                        unitInterval: 20
                    }
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'U.S. Historical Home Prices (1950-2019)',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Year',
                gridLines: {
                    interval: 5,
                    visible: true
                },
                maxValue: 2012,
                minValue: 1947,
                tickMarks: {
                    interval: 1,
                    visible: true
                },
                unitInterval: 5
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                seriesGroups={this.state.seriesGroups} colorScheme={'scheme04'} />
        );
    }
}

export default App;