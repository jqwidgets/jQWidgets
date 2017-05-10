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

        let fnLabelsClass = (value, itemIndex, serie, group) => {
            if (value > 100)
                return 'redLabel';
            return 'greenLabel';
        };

        let fnLabelsBorderColor = (value, itemIndex, serie, group) => {
            if (value > 100)
                return '#FF0000';
            return '#89A54E';
        };

        let fnFormatLabel = (value, itemIndex, serie, group) => {
            return value;
        };

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Country',
                flip: false,
                gridLines: { visible: false }
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    columnsGapPercent: 50,
                    toolTipFormatSettings: { sufix: ' USD', thousandsSeparator: ',' },
                    valueAxis:
                    {
                        title: {
                            text: 'GDP & Debt per Capita (USD)<br>'
                        },
                        gridLines: { visible: false }
                    },
                    series:
                    [
                        { dataField: 'GDP', displayText: 'GDP per Capita' },
                        { dataField: 'Debt', displayText: 'Debt per Capita' }
                    ]
                },
                {
                    type: 'line',
                    valueAxis:
                    {
                        unitInterval: 10,
                        visible: true,
                        position: 'right',
                        title: { text: 'Debt (% of GDP)' },
                        gridLines: { visible: false },
                        labels: {
                            horizontalAlignment: 'left',
                            formatSettings: { sufix: '%' }
                        }
                    },
                    series:
                    [
                        {
                            linesUnselectMode: 'click',
                            dataField: 'DebtPercent',
                            displayText: 'Debt (% of GDP)',
                            labels:
                            {
                                visible: true,
                                'class': fnLabelsClass,
                                backgroundColor: 'white',
                                padding: { left: 5, right: 5, top: 1, bottom: 1 },
                                borderColor: fnLabelsBorderColor,
                                backgroundOpacity: 0.7,
                                borderOpacity: 0.7
                            }
                        }
                    ],
                    bands: [
                        {
                            minValue: 90, maxValue: 90, fillColor: 'red', lineWidth: 2, dashStyle: '2,2'
                        }
                    ],
                    annotations: [
                        {
                            type: 'rect',
                            yValue: 90,
                            xValue: 6,
                            offset: { x: -45, y: -25 },
                            width: 90,
                            height: 20,
                            fillColor: '#EFEFEF',
                            lineColor: 'red',
                            text: {
                                value: 'Debt threshold',
                                offset: {
                                    x: 2,
                                    y: 2
                                },
                                'class': 'redLabel',
                                angle: 0
                            }
                        }
                    ],
                }

            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Country economic comparison'} description={'Per capita GDP and Debt in 2010'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
