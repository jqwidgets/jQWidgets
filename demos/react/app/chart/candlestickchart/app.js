import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

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

        let xAxis =
            {
                dataField: 'Date',
                labels: {
                    formatFunction: (value) => {
                        return value.getDate() + '-' + months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                    }
                },
                type: 'date',
                valuesOnTicks: true,
                minValue: new Date(2014, 1, 1),
                maxValue: new Date(2014, 10, 1),
                rangeSelector: {
                    padding: { left: 25, right: 10, top: 10, bottom: 10 },
                    backgroundColor: 'white',
                    dataField: 'SPClose',
                    baseUnit: 'month',
                    serieType: 'area',
                    gridLines: { visible: false },
                    labels:
                    {
                        formatFunction: (value) => {
                            return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                        }
                    }
                }
            };

        let seriesGroups =
            [
                {
                    type: 'candlestick',
                    columnsMaxWidth: 15,
                    columnsMinWidth: 5,
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    valueAxis:
                    {
                        description: 'S&P 500<br>'
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
                        labels: {
                            formatFunction: (value) => {
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
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'S&P 500 Candlestick Chart'} description={'(June 2010 - November 2014)'}
                animationDuration={1500} enableAnimations={true} padding={padding}
                source={dataAdapter} xAxis={xAxis} enableCrosshairs={true}
                colorScheme={'scheme17'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
