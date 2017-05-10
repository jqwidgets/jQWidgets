import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myChart.on('rangeSelectionChanging', (event) => {
            let args = event.args;
            args.instance.description = args.minValue.getFullYear() + " - " + args.maxValue.getFullYear();
        });
    }
    render() {
        let source =
            {
                datatype: 'csv',
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

        let toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
            let dataItem = dataAdapter.records[itemIndex];
            return '<DIV style="text-align:left"><b>Date: ' +
                categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
                '</b><br />Open price: $' + dataItem.Open +
                '</b><br />Close price: $' + dataItem.Close +
                '</b><br />Daily volume: ' + dataItem.Volume +
                '</DIV>';
        };

        let padding = { left: 5, top: 5, right: 30, bottom: 5 };

        let titlePadding = { left: 30, top: 5, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Date',
                minValue: new Date(2012, 0, 1),
                maxValue: new Date(2013, 11, 31),
                type: 'date',
                baseUnit: 'day',
                labels:
                {
                    formatFunction: (value) => {
                        return value.getDate() + '-' + months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                    }
                },
                rangeSelector: {
                    size: 80,
                    padding: { /*left: 0, right: 0,*/top: 0, bottom: 0 },
                    minValue: new Date(2010, 5, 1),
                    backgroundColor: 'white',
                    dataField: 'Close',
                    baseUnit: 'month',
                    gridLines: { visible: false },
                    serieType: 'area',
                    labels: {
                        formatFunction: (value) => {
                            return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                        }
                    }
                }
            };

        let valueAxis =
            {
                title: { text: 'Price per share [USD]<br><br>' },
                labels: { horizontalAlignment: 'right' }
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    series: [
                        { dataField: 'Close', displayText: 'Close Price', lineWidth: 1, lineWidthSelected: 1 }
                    ]
                }
            ];
        return (
            <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                title={'Tesla Motors Stock Price'} description={'(June 2010 - March 2014)'}
                enableCrosshairs={true} enableAnimations={true} padding={padding} animationDuration={1500}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
