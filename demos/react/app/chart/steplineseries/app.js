import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: "csv",
                datafields: [
                    { name: 'Date' },
                    { name: 'Open' },
                    { name: 'High' },
                    { name: 'Low' },
                    { name: 'Close' },
                    { name: 'Volume' },
                    { name: 'AdjClose' }
                ],
                url: '../sampledata/TSLA_stockprice.csv'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let padding = { left: 15, top: 5, right: 30, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                type: 'date',
                baseUnit: 'month',
                minValue: new Date(2013, 5, 1),
                maxValue: new Date(2014, 2, 1),
                valuesOnTicks: true,
                dataField: 'Date',
                labels:
                {
                    formatFunction: (value) => {
                        return months[value.getUTCMonth()] + '-' + value.getFullYear();
                    },
                    angle: 0,
                    horizontalAlignment: 'right'
                },
                toolTipFormatFunction: (value) => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                },
                tickMarks: { visilbe: true }
            };

        let seriesGroups =
            [
                {
                    type: 'stepline',
                    valueAxis:
                    {
                        flip: false,
                        title: { text: 'Price per share [USD]<br>' },
                        labels: { horizontalAlignment: 'right' }
                    },
                    series: [
                        { dataField: 'Close', displayText: 'Close Price', lineWidth: 1, symbolSize: 6 }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Tesla Motors Stock Price'} description={'Closing price (June 2013 - March 2014)'}
                showLegend={true} enableAnimations={true} padding={padding} enableCrosshairs={true}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis} crosshairsColor={'#0000FF'}
                crosshairsDashStyle={'1,1'} colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
