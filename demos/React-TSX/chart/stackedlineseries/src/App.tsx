import * as React from 'react';
import { useMemo } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const months = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], []);
    const source = useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'Referral' },
            { name: 'SearchPaid' },
            { name: 'SearchNonPaid' }
        ],
        datatype: 'tab',
        url: 'website_analytics.txt'
    }), []);
    const dataAdapter = useMemo(() =>
        new jqx.dataAdapter(source, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + source.url + '" : ' + error);
            }
        }), [source]);
    const chartProps: IChartProps = useMemo(() => ({
        title: 'Web Site Traffic Analysis',
        description: 'Daily unique visitors (stacked)',
        showLegend: true,
        enableAnimations: true,
        padding: { left: 10, top: 5, right: 10, bottom: 5 },
        titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
        source: dataAdapter,
        xAxis: {
            baseUnit: 'day',
            dataField: 'Date',
            labels: {
                formatFunction: (value: any): string => {
                    return value.getDate();
                }
            },
            toolTipFormatFunction: (value: any): string => {
                return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
            },
            type: 'date',
            valuesOnTicks: false
        },
        valueAxis: {
            labels: { horizontalAlignment: 'right' },
            maxValue: 4500,
            minValue: 0,
            title: { text: 'Daily Visits<br>' },
            unitInterval: 500
        },
        seriesGroups: [
            {
                series: [
                    { dataField: 'Referral', displayText: 'Referral Traffic' },
                    { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                    { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
                ],
                type: 'stackedline'
            }
        ],
        colorScheme: 'scheme01'
    }), [dataAdapter, months]);
    return (
        <JqxChart style={{ width: '850px', height: '500px' }} {...chartProps} />
    );
};

export default App;