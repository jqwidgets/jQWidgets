import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Quarter' },
                    { name: 'Change' }
                ],
                url: '../sampledata/us_gdp_2008-2013.csv'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let padding = { left: 5, top: 5, right: 10, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let categoryAxis =
            {
                dataField: 'Quarter',
                unitInterval: 1,
                textRotationAngle: -75,
                formatFunction: (value, itemIndex, serie, group) => {
                    return value;
                },
                valuesOnTicks: false
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    valueAxis:
                    {
                        description: 'Percentage Change',
                        formatFunction: (value) => {
                            return value + '%';
                        }
                    },
                    series:
                    [
                        {
                            dataField: 'Change',
                            displayText: 'Change',
                            // Modify this function to return desired colors.
                            // jqxChart will call the function for each data point.
                            // Sequential points that have the same color will be
                            // grouped automatically in a line segment
                            colorFunction: (value, itemIndex, serie, group) => {
                                return (value < 0) ? '#FF0000' : '#00FF00';
                            }
                        }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'U.S. GDP Percentage Change'} description={'(source: Bureau of Economic Analysis)'}
                showLegend={false} enableAnimations={true} padding={padding} borderLineWidth={1}
                titlePadding={titlePadding} source={dataAdapter} categoryAxis={categoryAxis} showBorderLine={true}
                colorScheme={'scheme05'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
