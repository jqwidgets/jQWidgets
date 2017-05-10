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
                    { name: 'SPAdjClose' },
                    { name: 'NQOpen' },
                    { name: 'NQHigh' },
                    { name: 'NQLow' },
                    { name: 'NQClose' },
                    { name: 'NQVolume' },
                    { name: 'NQAdjClose' }
                ],
                url: '../sampledata/nasdaq_vs_sp500_detailed.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
            var dataItem = dataAdapter.records[itemIndex];
            var volume = serie == 0 ? dataItem.SPVolume : dataItem.NQVolume;
            return '<DIV style="text-align:left"><b>Date: ' +
                categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
                '</b><br />Open price: $' + value.open +
                '</b><br />Close price: $' + value.close +
                '</b><br />Low price: $' + value.low +
                '</b><br />High price: $' + value.high +
                '</b><br />Daily volume: ' + volume
            '</DIV>';
        };

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let xAxis =
            {
                dataField: 'Date',
                labels:
                {
                    formatFunction: (value) => {
                        return value.getDate() + '-' + months[value.getMonth()] + '<br>' + value.getFullYear().toString();
                    }
                },
                type: 'date',
                valuesOnTicks: true,
                minValue: new Date(2014, 8, 20),
                maxValue: new Date(2014, 10, 1),
                rangeSelector: {
                    serieType: 'area',
                    padding: { left: 25, right: 10, top: 10, bottom: 10 },
                    backgroundColor: 'white',
                    dataField: 'SPClose',
                    baseUnit: 'month',
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
                    type: 'ohlc',
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
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    valueAxis:
                    {
                        position: 'right',
                        title: { text: '<br>NASDAQ' },
                        gridLines: { visible: false }
                    },
                    series: [
                        {
                            dataField: 'NQClose',
                            dataFieldClose: 'NQClose',
                            displayTextClose: 'Nasdaq Close price',
                            dataFieldOpen: 'NQOpen',
                            displayTextOpen: 'Nasdaq Open price',
                            dataFieldHigh: 'NQHigh',
                            displayTextHigh: 'Nasdaq High price',
                            dataFieldLow: 'NQLow',
                            displayTextLow: 'Nasdaq Low price',
                            displayText: 'NASDAQ',
                            lineWidth: 1
                        }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'NASDAQ and S&P 500 - OHLC Example'} description={'(June 2010 - November 2014)'}
                enableCrosshairs={true} enableAnimations={true} padding={padding}
                source={dataAdapter} xAxis={xAxis} animationDuration={1500}
                colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
