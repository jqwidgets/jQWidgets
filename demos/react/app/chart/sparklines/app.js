import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    createSparkline(selector, data, type) {

        let padding = { left: 0, top: 0, right: 0, bottom: 0 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 0 };

        let xAxis =
            {
                visible: false,
                valuesOnTicks: false
            };

        let seriesGroups =
            [
                {
                    type: type,
                    columnsGapPercent: 0,
                    columnsMaxWidth: 2,
                    valueAxis:
                    {
                        minValue: 0,
                        visible: false
                    },
                    series: [
                        {
                            linesUnselectMode: 'click',
                            colorFunction: (value, itemIndex, serie, group) => {
                                return (value < 10) ? '#307DD7' : '#AA4643';
                            }
                        }
                    ]
                }
            ];


        ReactDOM.render(
            <JqxChart style={{ width: '100%', height: '100%' }}
                title={''} description={''} showBorderLine={false}
                showLegend={false} enableAnimations={false}
                padding={padding} titlePadding={titlePadding}
                source={data} xAxis={xAxis} showToolTips={false}
                colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />,
            document.getElementById(selector)
        );
    }

    render() {
        let data = [
            { city: 'London', count: 24, monthlySales: 1128430, dailyTrend: [12, 8, 9, 3, 4, 5, 6, 2, 3, 4, 5, 6, 12, 4, 11, 4, 13, 9, 10, 12, 12, 8, 13, 7, 15, 9, 11, 12, 9, 8] },
            { city: 'New York', count: 35, monthlySales: 1434650, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
            { city: 'Berlin', count: 11, monthlySales: 498430, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
            { city: 'Madrid', count: 4, monthlySales: 181760, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
            { city: 'Paris', count: 9, monthlySales: 381760, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
        ];

        let source =
            {
                localData: data,
                dataType: 'array'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let rendering = () => {
            if (document.getElementsByClassName('jqx-chart').length > 0) {
                //$('.jqx-chart').jqxChart('destroy');
            }
        };

        let rendered = () => {
            for (let i = 0; i < data.length; i++) {
                this.createSparkline('sparklineContainer' + i, data[i].dailyTrend, i % 2 == 0 ? 'column' : 'line');
            }
        };

        let columns =
            [
                {
                    text: 'City', align: 'center', dataField: 'city', width: 250,
                },
                {
                    text: 'Store locations', align: 'center', dataField: 'count', width: 200
                },
                {
                    text: 'Monthly sales', align: 'center', dataField: 'monthlySales'
                },
                {
                    text: 'Daily sales trend', align: 'center', dataField: 'dailyTrend',
                    cellsRenderer: (row, column, value, rowData) => {
                        let div = '<div id=sparklineContainer' + row + ' style="margin: 0; margin-bottom: 0; width: 100%; height: 40px;"></div>';
                        return div;
                    }
                }
            ];

        return (
            <JqxDataTable
                width={850} source={dataAdapter} selectionMode={'none'} enableHover={false}
                sortable={true} columns={columns} rendering={rendering} rendered={rendered}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
