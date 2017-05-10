import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'month' },
                    { name: 'min' },
                    { name: 'max' },
                ],
                url: '../sampledata/weather_geneva.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'month',
                displayText: 'Month',
                unitInterval: 1,
                gridLines: { interval: 3 }
            };

        let valueAxis =
            {
                unitInterval: 5,
                title: {
                    visible: true,
                    text: 'Temperature [C]<br>'
                },
                labels: {
                    formatSettings: {
                        decimalPlaces: 1,
                        negativeWithBrackets: false
                    },
                    horizontalAlignment: 'right'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    series: [
                        { dataField: 'max', displayText: 'Max Temperature' },
                        { dataField: 'min', displayText: 'Min Temperature' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Weather in Geneva, Switzerland'} description={'Climatological Information about Geneva'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme05'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
