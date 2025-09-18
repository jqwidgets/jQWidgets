import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'Country' },
            { name: 'GDP' },
            { name: 'DebtPercent' },
            { name: 'Debt' }
        ],
        datatype: 'csv',
        url: 'gdp_dept_2010.txt'
    }), []);

    const legendFormatFunction = React.useCallback((value: string): string => {
        if (value === 'Debt per Capita') {
            return 'Debt per<br>Capita';
        }
        if (value === 'GDP per Capita') {
            return 'GDP per<br>Capita';
        }
        if (value === 'Debt (% of GDP)') {
            return 'Debt<br>(% of GDP)';
        }
        return value;
    }, []);

    const dataAdapter = React.useMemo(
        () =>
            new jqx.dataAdapter(source, {
                async: false,
                autoBind: true,
                loadError: (xhr: any, status: any, error: any) =>
                    alert('Error loading "' + source.url + '" : ' + error)
            }),
        [source]
    );

    const chartProps: IChartProps = React.useMemo(() => ({
        description: 'GDP and Debt in 2018',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        seriesGroups: [
            {
                columnsGapPercent: 50,
                series: [
                    { dataField: 'GDP', displayText: 'GDP per Capita', legendFormatFunction },
                    { dataField: 'Debt', displayText: 'Debt per Capita', legendFormatFunction }
                ],
                type: 'column',
                valueAxis: {
                    title: { text: 'GDP & Debt per Capita($)' },
                    unitInterval: 5000
                }
            },
            {
                series: [
                    { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)', legendFormatFunction }
                ],
                type: 'line',
                valueAxis:
                {
                    title: { text: 'Debt (% of GDP)' },
                    unitInterval: 10,
                    visible: false
                }
            }
        ],
        source: dataAdapter,
        title: 'Economic comparison',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 0 },
        xAxis: {
            dataField: 'Country',
            formatFunction: (value: any, dataIndex: any): string => {
                if (value === 'USA') {
                    return 'United<br>States';
                }
                return value;
            },
            title: { verticalAlignment: 'middle' }
        }
    }), [dataAdapter, legendFormatFunction]);

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={true}
            enableAnimations={true}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme01'}
        />
    );
}

export default App;