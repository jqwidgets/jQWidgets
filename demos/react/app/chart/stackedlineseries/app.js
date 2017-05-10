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

        let titlePadding = { left: 50, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Date',
                type: 'date',
                baseUnit: 'day',
                valuesOnTicks: false,
                labels:
                {
                    formatFunction: (value) => {
                        return value.getDate();
                    }
                },
                toolTipFormatFunction: (value) => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                }
            };

        let valueAxis =
            {
                unitInterval: 500,
                minValue: 0,
                maxValue: 4500,
                labels: { horizontalAlignment: 'right' },
                title: { text: 'Daily Visits<br>' }
            };

        let seriesGroups =
            [
                {
                    type: 'stackedline',
                    series: [
                        { dataField: 'Referral', displayText: 'Referral Traffic' },
                        { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                        { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Web Site Traffic Analysis'} description={'Daily unique visitors (stacked)'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
