import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'tab',
                datafields: [
                    { name: 'Year' },
                    { name: 'HPI' },
                    { name: 'BuildCost' },
                    { name: 'Population' },
                    { name: 'Rate' }
                ],
                url: '../sampledata/homeprices.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let padding = { left: 20, top: 5, right: 20, bottom: 5 };

        let titlePadding = { left: 10, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Year',
                minValue: 1947,
                maxValue: 2012,
                unitInterval: 5,
                tickMarks: {
                    visible: true,
                    interval: 1,
                    dashStyle: '1,2'
                },
                gridLines: {
                    visible: true,
                    interval: 5,
                    dashStyle: '1,3'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    valueAxis:
                    {
                        unitInterval: 20,
                        maxValue: 400,
                        title: { text: 'U.S. Population (millions)' },
                        gridLines: { visible: false }
                    },
                    series: [
                        { dataField: 'Population', displayText: 'Population' }
                    ]
                },
                {
                    type: 'spline',
                    valueAxis:
                    {
                        title: { text: 'Interest rate' },
                        position: 'right',
                        unitInterval: 0.01,
                        maxValue: 0.2,
                        visible: true,
                        gridLines: { visible: false },
                        labels: {
                            horizontalAlignment: 'left'
                        }
                    },
                    series: [
                        { dataField: 'Rate', displayText: 'Interest Rate' }
                    ]
                },
                {
                    type: 'spline',
                    valueAxis:
                    {
                        title: { text: 'Index Value' },
                        position: 'right',
                        unitInterval: 20,
                        maxValue: 200,
                        gridLines: { visible: false },
                        labels: {
                            formatSettings:
                            {
                                decimalPlaces: 0
                            },
                            horizontalAlignment: 'left'
                        }
                    },
                    series: [
                        { dataField: 'HPI', displayText: 'Real Home Price Index' },
                        { dataField: 'BuildCost', displayText: 'Building Cost Index' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'U.S. Historical Home Prices (1950-2011)'} description={'Source: http://www.econ.yale.edu/~shiller/data.htm'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                colorScheme={'scheme04'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
