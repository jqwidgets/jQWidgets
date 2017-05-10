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


        let padding = { left: 10, top: 5, right: 30, bottom: 5 };

        let titlePadding = { left: 10, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Date',
                type: 'date',
                baseUnit: 'month',
                unitInterval: 1,
                minValue: '01-01-2014',
                maxValue: '01-01-2015',
                tickMarks: {
                    visible: true,
                    interval: 1,
                    color: '#FFFFFF',
                    dashStyle: '2,1'
                },
                gridLines: {
                    visible: true,
                    interval: 1,
                    color: '#FFFFFF',
                    dashStyle: '2,1'
                },
                labels:
                {
                    angle: -45,
                    rotationPoint: 'topright',
                    offset: { x: 0, y: -25 },
                    formatFunction: (value) => {
                        return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                    }
                }
            };

        let valueAxis =
            {
                displayValueAxis: true,
                title: { text: 'Daily Closing Price<br>' },
                gridLines: {
                    dashStyle: '2,1',
                    color: '#FFFFFF'
                },
                tickMarks: {
                    dashStyle: '2,1',
                    color: '#FFFFFF'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    series: [
                        { dataField: 'S&P 500', displayText: 'S&P 500', lineColor: '#FFFFFF', lineColorSelected: '#DDDDDD', fillColor: '#FFFFFF' },
                        { dataField: 'NASDAQ', displayText: 'NASDAQ', lineColor: '#0FF0FF', lineColorSelected: '#2EE2EE', fillColor: '#0FF0FF' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                title={'U.S. Stock Market Index Performance'} description={'NASDAQ Composite compared to S&P 500'}
                showLegend={true} enableAnimations={true} 
                padding={padding} backgroundImage={'../images/chart_background.jpg'}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme04'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
