import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const source = React.useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'Referral' },
            { name: 'SearchPaid' },
            { name: 'SearchNonPaid' }
        ],
        datatype: 'tab',
        url: 'website_analytics.txt'
    }), []);

    const dataAdapter = React.useMemo(() =>
        new jqx.dataAdapter(source, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + source.url + '" : ' + error);
            }
        }), [source]
    );

    const chartProps: IChartProps = React.useMemo(() => ({
        description: 'Monthly unique visitors (percentage stacked)',
        padding: { bottom: 5, left: 5, right: 5, top: 5 },
        seriesGroups: [
            {
                series: [
                    { dataField: 'Referral', displayText: 'Referral Traffic' },
                    { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                    { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
                ],
                type: 'stackedline100'
            }
        ],
        source: dataAdapter,
        title: 'Web Site Traffic Analysis',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            labels: { horizontalAlignment: 'right' },
            title: { text: 'Daily Visits<br>' }
        },
        xAxis: {
            baseUnit: 'day',
            dataField: 'Date',
            gridLines: { interval: 31 },
            labels: {
                formatFunction: (value: any) => {
                    return value.getDate();
                }
            },
            textRotationAngle: 0,
            toolTipFormatFunction: (value: any) => {
                return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
            },
            type: 'date',
            valuesOnTicks: false
        }
    }), [dataAdapter, months]);

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            titlePadding={chartProps.titlePadding}
            showLegend={true}
            enableAnimations={true}
            padding={chartProps.padding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            valueAxis={chartProps.valueAxis}
            colorScheme="scheme04"
            seriesGroups={chartProps.seriesGroups}
        />
    );
};

export default App;