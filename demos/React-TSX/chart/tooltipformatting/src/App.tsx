import * as React from 'react';
import { useMemo } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const months = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], []);
    const source = useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        datatype: 'csv',
        url: 'nasdaq_vs_sp500.txt'
    }), []);
    const dataAdapter = useMemo(() => new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }), [source]);
    const toolTipCustomFormatFn = useMemo(() => (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
        const dataItem = dataAdapter.records[itemIndex];
        return '<DIV style="text-align:left"><b>Date: </b>' +
            categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() + '<br /><br /><b>NASDAQ: </b>' +
            dataAdapter.formatNumber(dataItem.NASDAQ, 'f') + '<br /><b>S&P 500: </b>' +
            dataAdapter.formatNumber(dataItem['S&P 500'], 'f') + '</DIV>';
    }, [dataAdapter, months]);
    const chartProps: IChartProps = useMemo(() => ({
        description: 'NASDAQ Composite compared to S&P 500',
        padding: { left: 10, top: 5, right: 30, bottom: 5 },
        seriesGroups: [
            {
                series: [
                    { dataField: 'S&P 500', displayText: 'S&P 500' },
                    { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                ],
                toolTipFormatFunction: toolTipCustomFormatFn,
                type: 'spline',
                valueAxis: {
                    title: { text: 'Daily Closing Price<br>' }
                }
            }
        ],
        source: dataAdapter,
        title: 'U.S. Stock Market Index Performance (2014)',
        titlePadding: { left: 10, top: 0, right: 30, bottom: 10 },
        xAxis: {
            baseUnit: 'month',
            dataField: 'Date',
            formatFunction: (value: any): string => {
                return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
            },
            gridLines: {
                interval: 3,
                visible: true
            },
            labels: {
                angle: -45,
                offset: { x: -20, y: 0 }
            },
            maxValue: '01-01-2015',
            minValue: '01-01-2014',
            type: 'date',
            valuesOnTicks: true
        }
    }), [toolTipCustomFormatFn, dataAdapter, months]);

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
            colorScheme={'scheme05'}
            enableCrosshairs={true}
        />
    );
}

export default App;