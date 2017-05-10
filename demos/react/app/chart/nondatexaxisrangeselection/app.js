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

        var toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
            return 'Index: ' + itemIndex + ", Value: " + value;
        };

        let padding = { left: 5, top: 5, right: 20, bottom: 5 };


        let xAxis =
            {
                minValue: 175,
                maxValue: 550,
                flip: false,
                valuesOnTicks: true,
                rangeSelector: {
                    serieType: 'area',
                    padding: { /*left: 0, right: 0,*/ top: 20, bottom: 0 },
                    backgroundColor: 'white',
                    size: 110,
                    gridLines: { visible: false },
                }
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    valueAxis:
                    {
                        flip: false,
                        title: { text: 'Value<br><br>' }
                    },
                    series: [
                        { dataField: 'Close', lineWidth: 1, lineWidthSelected: 1 }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Range selector with regular x-axis'} description={'In this example the range selector works with (non-date) axis'}
                showLegend={false} enableAnimations={true} padding={padding} animationDuration={1500}
                source={dataAdapter} xAxis={xAxis} enableCrosshairs={true}
                colorScheme={'scheme02'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
