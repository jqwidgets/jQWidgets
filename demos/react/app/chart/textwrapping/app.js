import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Country' },
                    { name: 'GDP' },
                    { name: 'DebtPercent' },
                    { name: 'Debt' }
                ],
                url: '../sampledata/gdp_dept_2010.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let legendFormatFunction = (value) => {
            if (value == 'Debt per Capita')
                return 'Debt per<br>Capita';
            if (value == 'GDP per Capita')
                return 'GDP per<br>Capita';
            if (value == 'Debt (% of GDP)')
                return 'Debt<br>(% of GDP)';
            return value;
        };

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 0  };

        let xAxis =
            {
                dataField: 'Country',
                title: { verticalAlignment: 'center' },
                formatFunction: (value, dataIndex) => {
                    if (value == 'USA')
                        return 'United<br>States';
                    return value;
                }
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    columnsGapPercent: 50,
                    valueAxis:
                    {
                        unitInterval: 5000,
                        title: { text: 'GDP & Debt per Capita($)' }
                    },
                    series: [
                        { dataField: 'GDP', displayText: 'GDP per Capita' },
                        { dataField: 'Debt', displayText: 'Debt per Capita' }
                    ],
                    legendFormatFunction: legendFormatFunction,
                    verticalTextAlignment: 'center'
                },
                {
                    type: 'line',
                    valueAxis:
                    {
                        unitInterval: 10,
                        visible: false,
                        title: { text: 'Debt (% of GDP)' }
                    },
                    legendFormatFunction: legendFormatFunction,
                    verticalTextAlignment: 'center',
                    series: [
                        { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Economic comparison'} description={'GDP and Debt in 2010'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
