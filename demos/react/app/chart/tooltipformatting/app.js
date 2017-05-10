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

        var toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
            var dataItem = dataAdapter.records[itemIndex];
            return '<DIV style="text-align:left"><b>Date: </b>' +
                categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() + '<br /><br /><b>NASDAQ: </b>' +
                dataAdapter.formatNumber(dataItem['NASDAQ'], 'f') + '<br /><b>S&P 500: </b>' +
                dataAdapter.formatNumber(dataItem['S&P 500'], 'f') + '</DIV>';
        };

        let padding = { left: 10, top: 5, right: 30, bottom: 5 };

        let titlePadding = { left: 10, top: 0, right: 30, bottom: 10 };

        let xAxis =
            {
                type: 'date',
                baseUnit: 'month',
                minValue: '01-01-2014',
                maxValue: '01-01-2015',
                dataField: 'Date',
                valuesOnTicks: true,
                formatFunction: (value) => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                },
                gridLines: {
                    visible: true,
                    interval: 3,
                },
                labels:
                {
                    angle: -45,
                    offset: { x: -20, y: 0 }
                }
            };

        let seriesGroups =
            [
                {
                    type: 'spline',
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    valueAxis:
                    {
                        title: { text: 'Daily Closing Price<br>' }
                    },
                    series: [
                        { dataField: 'S&P 500', displayText: 'S&P 500' },
                        { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'U.S. Stock Market Index Performance (2014)'} description={"NASDAQ Composite compared to S&P 500"}
                showLegend={true} enableAnimations={true} padding={padding} enableCrosshairs={true}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                colorScheme={'scheme05'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
