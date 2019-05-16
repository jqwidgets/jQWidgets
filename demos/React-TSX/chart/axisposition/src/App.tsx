import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const source = {
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
            padding: { left: 20, top: 5, right: 20, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'Population', displayText: 'Population' }
                    ],
                    type: 'line',
                    valueAxis:
                    {
                        gridLines: { visible: false },
                        maxValue: 400,
                        title: { text: 'U.S. Population (millions)' },
                        unitInterval: 20
                    }
                },
                {
                    series: [
                        { dataField: 'Rate', displayText: 'Interest Rate' }
                    ],
                    type: 'spline',
                    valueAxis:
                    {
                        gridLines: { visible: false },
                        labels: {
                            horizontalAlignment: 'left'
                        },
                        maxValue: 0.2,
                        position: 'right',
                        title: { text: 'Interest rate' },
                        unitInterval: 0.01,
                        visible: true
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
                        gridLines: { visible: false },
                        labels: {
                            formatSettings:
                            {
                                decimalPlaces: 0
                            },
                            horizontalAlignment: 'left'
                        },
                        maxValue: 200,
                        position: 'right',
                        title: { text: 'Index Value' },
                        unitInterval: 20,
                    }
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'U.S. Historical Home Prices (1950-2011)',
            titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Year',
                gridLines: {
                    dashStyle: '1,3',
                    interval: 5,
                    visible: true
                },
                maxValue: 2012,
                minValue: 1947,             
                tickMarks: {
                    dashStyle: '1,2',
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
                enableAnimations={true} showLegend={true} padding={this.state.padding} 
                titlePadding={this.state.titlePadding} source={this.state.source} 
                xAxis={this.state.xAxis} seriesGroups={this.state.seriesGroups}
                colorScheme={'scheme04'}  />
        );
    }
}

export default App; 