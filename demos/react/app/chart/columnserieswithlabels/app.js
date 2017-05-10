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

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                position: 'top',
                dataField: 'Country',
                gridLines: { visible: true }
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    columnsGapPercent: 50,
                    valueAxis:
                    {
                        title: { text: 'GDP & Debt per Capita($)' }
                    },
                    series: [
                        {
                            dataField: 'GDP',
                            displayText: 'GDP per Capita',
                            labels: {
                                visible: true,
                                verticalAlignment: 'top',
                                offset: { x: 0, y: -20 }
                            },
                            formatFunction: (value) => {
                                return Math.round(value / 1000) + 'K';
                            }
                        },
                        {
                            dataField: 'Debt',
                            displayText: 'Debt per Capita',
                            labels: {
                                visible: true,
                                verticalAlignment: 'top',
                                offset: { x: 0, y: -20 }
                            },
                            formatFunction: (value) => {
                                return Math.round(value / 1000) + 'K';
                            }
                        }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Economic comparison'} description={'GDP and Debt in 2010'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                colorScheme={'scheme02'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
