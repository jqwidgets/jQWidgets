import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const data = [
        { city: 'London', count: 24, monthlySales: 1128430, dailyTrend: [12, 8, 9, 3, 4, 5, 6, 2, 3, 4, 5, 6, 12, 4, 11, 4, 13, 9, 10, 12, 12, 8, 13, 7, 15, 9, 11, 12, 9, 8] },
        { city: 'New York', count: 35, monthlySales: 1434650, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
        { city: 'Berlin', count: 11, monthlySales: 498430, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
        { city: 'Madrid', count: 4, monthlySales: 181760, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] },
        { city: 'Paris', count: 9, monthlySales: 381760, dailyTrend: [11, 7, 3, 8, 6, 2, 2, 4, 3, 8, 5, 11, 7, 11, 11, 4, 5, 6, 5, 9, 9, 5, 11, 2, 8, 9, 14, 12, 9, 8] }
    ];

    const source = React.useMemo(() => ({
        dataType: 'array',
        localData: data
    }), []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    const createSparkline = React.useCallback((selector: string, dataParam: any, type: any) => {
        const padding = { left: 0, top: 0, right: 0, bottom: 0 };
        const titlePadding = { left: 0, top: 0, right: 0, bottom: 0 };
        const seriesGroups: IChartProps['seriesGroups'] = [
            {
                columnsGapPercent: 0,
                columnsMaxWidth: 2,
                series: [
                    {
                        colorFunction: (value: any) => {
                            return (value < 10) ? '#307DD7' : '#AA4643';
                        },
                        linesUnselectMode: 'click'
                    }
                ],
                type,
                valueAxis: {
                    minValue: 0,
                    visible: false
                }
            }
        ];
        const xAxis = {
            valuesOnTicks: false,
            visible: false
        };
        ReactDOM.render(
            <JqxChart style={{ width: '100%', height: '100%' }} backgroundColor={'transparent'} colorScheme={'scheme01'} description={''} enableAnimations={false}
                padding={padding} seriesGroups={seriesGroups} showBorderLine={false} showLegend={false} showToolTips={false}
                source={dataParam} title={''} titlePadding={titlePadding} xAxis={xAxis} />,
            document.querySelector(`#${selector}`)
        );
    }, []);

    const columns = React.useMemo(() => [
        { text: 'City', align: 'center', dataField: 'city', width: 250 },
        { text: 'Store locations', align: 'center', dataField: 'count', width: 200 },
        { text: 'Monthly sales', align: 'center', dataField: 'monthlySales' },
        {
            align: 'center',
            cellsRenderer: (row: any, column: any, value: any, rowData: any) => {
                const div = '<div id="sparklineContainer' + row + '" style="margin: 0; margin-bottom: 0; width: 100%; height: 40px;"></div>';
                return div;
            },
            dataField: 'dailyTrend',
            text: 'Daily sales trend'
        }
    ], []);

    const rendered = React.useCallback(() => {
        for (let i = 0; i < data.length; i++) {
            createSparkline('sparklineContainer' + i, data[i].dailyTrend, i % 2 === 0 ? 'column' : 'line');
        }
    }, [data, createSparkline]);

    return (
        // @ts-ignore
        <JqxDataTable
            theme={'material-purple'}
            width={'100%'}
            source={dataAdapter}
            enableHover={false}
            sortable={true}
            columns={columns}
            rendered={rendered}
        />
    );
};

export default App;