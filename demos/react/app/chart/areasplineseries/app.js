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

        let padding = { left: 15, top: 5, right: 20, bottom: 5 };

        let titlePadding = { left: 10, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Year',
                minValue: 1950,
                maxValue: 2010,
                unitInterval: 5,
                valuesOnTicks: true
            };

        let seriesGroups =
            [
                {
                    alignEndPointsWithIntervals: false,
                    type: 'splinearea',
                    valueAxis:
                    {
                        visible: true,
                        unitInterval: 20,
                        title: { text: 'Index Value' },
                        labels: {
                            horizontalAlignment: 'right',
                            formatSettings: { decimalPlaces: 0 }
                        }
                    },
                    series: [
                        { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7 },
                        { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.9 }
                    ]
                },
                {
                    type: 'spline',
                    alignEndPointsWithIntervals: false,
                    valueAxis:
                    {
                        title: { text: 'Interest Rate' },
                        position: 'right',
                        unitInterval: 0.01,
                        maxValue: 0.2,
                        labels: { formatSettings: { decimalPlaces: 2 } },
                        tickMarks: {
                            visible: true,
                            interval: 0.005,
                        },
                        gridLines: {
                            visible: false,
                            interval: 0.01
                        }
                    },
                    series: [
                        { dataField: 'Rate', displayText: 'Interest Rate', opacity: 1.0, lineWidth: 4, dashStyle: '4,4' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'U.S. History Home Prices (1950-2010)'} description={'Source: http://www.econ.yale.edu/~shiller/data.htm'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                colorScheme={'scheme05'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
