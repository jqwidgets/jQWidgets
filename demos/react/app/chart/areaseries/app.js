import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Date' },
                    { name: 'S&P 500' },
                    { name: 'NASDAQ' }
                ],
                url: '../sampledata/nasdaq_vs_sp500.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let padding = { left: 10, top: 5, right: 10, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Date',
                type: 'date',
                baseUnit: 'month',
                minValue: new Date(2014, 0, 1),
                maxValue: new Date(2014, 11, 1),
                valuesOnTicks: true,
                labels: {
                    angle: -45,
                    rotationPoint: 'topright',
                    offset: { x: 0, y: -15 },
                    formatFunction: (value) => {
                        return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                    },
                },
                toolTipFormatFunction: (value) => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                }
            };

        let valueAxis =
            {
                title: { text: 'Daily Closing Price<br>' }
            };

        let seriesGroups =
            [
                {
                    type: 'area',
                    alignEndPointsWithIntervals: true,
                    series: [
                        { dataField: 'NASDAQ', displayText: 'NASDAQ', opacity: 0.7 },
                        { dataField: 'S&P 500', displayText: 'S&P 500', opacity: 0.8 }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'U.S. Stock Market Index Performance'} description={'NASDAQ Composite compared to S&P 500'}
                showLegend={true} enableAnimations={true} padding={padding} enableCrosshairs={true}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme05'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
