import * as React from 'react';
import './App.css';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        datatype: 'csv',
        url: 'nasdaq_vs_sp500.txt'
    }), []);
    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source, {
        async: false,
        autoBind: true,
        loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); }
    }), [source]);
    const toolTipCustomFormatFn = React.useCallback((
        value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any
    ) => {
        const dataItem = dataAdapter.records[itemIndex];
        return '<DIV style="background: #2e3338; text-align:left"><b>Date: </b>' +
            categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() + '<br /><br /><b>NASDAQ: </b>' +
            dataAdapter.formatNumber(dataItem['NASDAQ'], 'f') + '<br /><b>S&P 500: </b>' +
            dataAdapter.formatNumber(dataItem['S&P 500'], 'f') + '</DIV>';
    }, [dataAdapter, months]);
    const chartProps: IChartProps = React.useMemo(() => ({
        title: 'U.S. Stock Market Index Performance',
        description: 'NASDAQ Composite compared to S&P 500',
        padding: { left: 10, top: 5, right: 10, bottom: 5 },
        titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
        source: dataAdapter,
        colorScheme: 'scheme02',
        backgroundColor: '#2e3338',
        xAxis: {
            baseUnit: 'month',
            dataField: 'Date',
            formatFunction: (value: any) => {
                return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
            },
            gridLines: {
                color: '#BCBCBC',
                interval: 3,
                visible: true,
            },
            labels: {
                angle: -45,
                offset: { x: 0, y: -25 },
                rotationPoint: 'topright'
            },
            maxValue: '01-01-2015',
            minValue: '01-01-2014',
            tickMarks: {
                color: '#BCBCBC',
                interval: 1,
                visible: true
            },
            type: 'date',
            unitInterval: 1,
            valuesOnTicks: true
        },
        valueAxis: {
            tickMarks: {
                color: '#BCBCBC'
            },
            title: { text: 'Daily Closing Price<br>' },
            visible: true
        },
        seriesGroups: [
            {
                series: [
                    { dataField: 'S&P 500', displayText: 'S&P 500', toolTipBackground: '#2e3338' },
                    { dataField: 'NASDAQ', displayText: 'NASDAQ', toolTipBackground: '#2e3338' }
                ],
                toolTipFormatFunction: toolTipCustomFormatFn,
                type: 'spline'
            }
        ]
    }), [dataAdapter, months, toolTipCustomFormatFn]);
    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            {...chartProps}
            showLegend={true}
            enableAnimations={true}
        />
    );
}

export default App;