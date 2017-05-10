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

        let padding = { left: 10, top: 5, right: 10, bottom: 5 };

        let titlePadding = { left: 10, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Date',
                type: 'date',
                baseUnit: 'day',
                valuesOnTicks: true,
                labels:
                {
                    formatFunction: (value) => {
                        return value.getDate();
                    }
                },
                toolTipFormatFunction: (value) => {
                    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                }
            };

        let valueAxis =
            {
                unitInterval: 500,
                minValue: 0,
                maxValue: 4500,
                title: { text: 'Daily visitors by source<br>' }
            };

        let seriesGroups =
            [
                {
                    type: 'stackedarea',
                    series: [
                        { dataField: 'SearchNonPaid', displayText: 'Desktop Search' },
                        { dataField: 'SearchPaid', displayText: 'Mobile Search' },
                        { dataField: 'Referral', displayText: 'Social media' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Website traffic analysis'} description={'Unique daily visitors (stacked)'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme03'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
