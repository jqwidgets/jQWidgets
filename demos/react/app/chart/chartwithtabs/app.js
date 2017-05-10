import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'tsv',
                datafields: [
                    { name: 'Date' },
                    { name: 'SPOpen' },
                    { name: 'SPHigh' },
                    { name: 'SPLow' },
                    { name: 'SPClose' },
                    { name: 'SPVolume' },
                    { name: 'SPAdjClose' }
                ],
                url: '../sampledata/nasdaq_vs_sp500_detailed.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let source2 =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Date' },
                    { name: 'S&P 500' },
                    { name: 'NASDAQ' }
                ],
                url: '../sampledata/nasdaq_vs_sp500.txt'
            };
        let dataAdapter2 = new $.jqx.dataAdapter(source2, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source2.url + '" : ' + error); } });

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
            let dataItem = dataAdapter.records[itemIndex];
            let volume = dataItem.SPVolume;
            return '<DIV style="text-align:left"><b>Date: ' +
                categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
                '</b><br />Open price: $' + value.open +
                '</b><br />Close price: $' + value.close +
                '</b><br />Low price: $' + value.low +
                '</b><br />High price: $' + value.high +
                '</b><br />Daily volume: ' + volume +
            '</DIV>';
        };

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 50, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Date',
                formatFunction: (value) => {
                    return value.getDate() + '-' + months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                },
                type: 'date',
                valuesOnTicks: true,
                minValue: new Date(2014, 0, 1),
                maxValue: new Date(2014, 11, 1)
            };

        let seriesGroups =
            [
                {
                    type: 'candlestick',
                    columnsMinWidth: 4,
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    valueAxis:
                    {
                        title: { text: 'S&P 500<br>' },
                        minValue: 1500
                    },
                    series: [
                        {
                            dataFieldClose: 'SPClose',
                            displayTextClose: 'S&P Close price',
                            dataFieldOpen: 'SPOpen',
                            displayTextOpen: 'S&P Open price',
                            dataFieldHigh: 'SPHigh',
                            displayTextHigh: 'S&P High price',
                            dataFieldLow: 'SPLow',
                            displayTextLow: 'S&P Low price',
                            displayText: 'S&P 500',
                            lineWidth: 1
                        }
                    ]
                },
                {
                    type: 'line',
                    valueAxis:
                    {
                        position: 'right',
                        title: { text: '<br>Daily Volume' },
                        gridLines: { visible: false },
                        tickMarks: { visible: false },
                        labels: {
                            formatFunction: function (value) {
                                return value / 1000000 + 'M';
                            }
                        }
                    },
                    series: [
                        {
                            dataField: 'SPVolume',
                            displayText: 'Volume',
                            lineWidth: 1
                        }
                    ]
                }
            ];

        let xAxis2 =
            {
                dataField: 'Date',
                type: 'date',
                baseUnit: 'month',
                unitInterval: 1,
                valuesOnTicks: true,
                labels: {
                    formatFunction: (value) => {
                        return months[value.getMonth()];
                    }
                },
                toolTipFormatFunction: (value) => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                },
                tickMarks: { visible: true, unitInterval: 1 },
                gridLines: { visible: true, unitInterval: 3 }
            };

        let seriesGroups2 =
            [
                {
                    type: 'line',
                    valueAxis:
                    {
                        unitInterval: 500,
                        visible: true,
                        title: { text: 'Daily Closing Price' }
                    },
                    series: [
                        { dataField: 'S&P 500', displayText: 'S&P 500' },
                        { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                    ]
                }
            ];
        return (
          <JqxTabs width={750} height={560}>
                <ul>
                    <li style={{ marginLeft: 30 }}>
                        <div style={{ height: 20, marginTop: 5 }}>
                            <div style={{ marginLeft: 4, verticalAlign: 'middle', textAlign: 'center', float: 'left' }}>
                                Candlestick Chart
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style={{ height: 20, marginTop: 5 }}>
                            <div style={{ marginLeft: 4, verticalAlign: 'middle', textAlign: 'center', float: 'left' }}>
                                Line Chart
                            </div>
                        </div>
                    </li>
                </ul>
                <div style={{ overflow: 'hidden' }}>
                    <JqxChart style={{ width: '100%', height: '100%' }}
                        title={'S&P 500 Candlestick Chart'} description={'(January 2014 - November 2014)'}
                        enableCrosshairs={true} enableAnimations={true} animationDuration={1500}
                        source={dataAdapter} xAxis={xAxis} padding={padding}
                        colorScheme={'scheme17'} seriesGroups={seriesGroups}
                    />
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <JqxChart style={{ width: '100%', height: '100%' }}
                        title={'U.S. Stock Market Index Performance (2014)'}
                        description={'(NASDAQ Composite compared to S&P 500'}
                        showLegend={true} enableAnimations={true} animationDuration={1500}
                        source={dataAdapter2} xAxis={xAxis2} padding={padding}
                        colorScheme={'scheme04'} seriesGroups={seriesGroups2}
                    />
                </div>
            </JqxTabs>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
