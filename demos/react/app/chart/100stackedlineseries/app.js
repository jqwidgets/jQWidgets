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

        let padding = { left: 5, top: 5, right: 15, bottom: 5 };

        let titlePadding = { left: 10, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                type: 'date',
                baseUnit: 'day',
                textRotationAngle: 0,
                dataField: 'Date',
                labels:
                {
                    formatFunction: (value) => {
                        return value.getDate();
                    }
                },
                toolTipFormatFunction: (value) => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                },
                valuesOnTicks: false,
                gridLines: { interval: 31 }
            };

        let valueAxis =
            {
                title: { text: 'Daily Visits<br>' },
                labels: { horizontalAlignment: 'right' }
            };

        let seriesGroups =
            [
                {
                    type: 'stackedline100',
                    series: [
                        { dataField: 'Referral', displayText: 'Referral Traffic' },
                        { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                        { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Web Site Traffic Analysis'} description={'Monthly unique visitors (percentage stacked)'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme04'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
