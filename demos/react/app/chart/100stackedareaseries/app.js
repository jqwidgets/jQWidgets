import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'tab',
                datafields: [
                    { name: 'Date' },
                    { name: 'Referral' },
                    { name: 'SearchPaid' },
                    { name: 'SearchNonPaid' }
                ],
                url: '../sampledata/website_analytics.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let padding = { left: 10, top: 5, right: 10, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                type: 'date',
                baseUnit: 'day',
                dataField: 'Date',
                valuesOnTicks: true,
                labels: {
                    formatFunction: (value) => {
                        return value.getDate();
                    }
                },
                gridLines: { visible: false },
                toolTipFormatFunction: (value) => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                }
            };

        let valueAxis =
            {
                title: { text: 'Daily visitors' },
                labels: { horizontalAlignment: 'right' }
            };

        let seriesGroups =
            [
                {
                    type: 'stackedarea100',
                    series: [
                        { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' },
                        { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                        { dataField: 'Referral', displayText: 'Referral Traffic' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Web Traffic Analysis'} description={'Unique monthly site visitors (percentage stacked)'}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme06'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
