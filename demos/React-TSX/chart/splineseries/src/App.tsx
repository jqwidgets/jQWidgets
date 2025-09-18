import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        datatype: 'tab',
        url: 'homeprices.txt'
    }), []);

    const dataAdapter = React.useMemo(() => (
        new jqx.dataAdapter(source, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + source.url + '" : ' + error);
            }
        })
    ), [source]);

    const chartProps: IChartProps = React.useMemo(() => ({
        title: 'U.S. Historical Home Prices (1950-2019)',
        description: 'Source: http://www.econ.yale.edu/~shiller/data.htm',
        padding: { left: 5, top: 5, right: 25, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        source: dataAdapter,
        xAxis: {
            dataField: 'Year',
            gridLines: {
                interval: 5,
                visible: true
            },
            maxValue: 2012,
            minValue: 1947,
            tickMarks: {
                interval: 1,
                visible: true
            },
            unitInterval: 5
        },
        seriesGroups: [
            {
                series: [
                    { dataField: 'Population', displayText: 'Population' }
                ],
                type: 'line',
                valueAxis:
                {
                    gridLines: { visible: false },
                    padding: { left: 10 },
                    title: { text: 'U.S. Population (millions)<br>' },
                    unitInterval: 10
                }
            },
            {
                series: [
                    { dataField: 'Rate', displayText: 'Interest Rate' }
                ],
                type: 'spline',
                valueAxis:
                {
                    unitInterval: 1,
                    visible: false
                }
            },
            {
                series: [
                    { dataField: 'HPI', displayText: 'Real Home Price Index' },
                    { dataField: 'BuildCost', displayText: 'Building Cost Index' }
                ],
                type: 'spline',
                valueAxis:
                {
                    labels: {
                        formatSettings: { decimalPlaces: 0 },
                        horizontalAlignment: 'right',
                    },
                    title: { text: 'Index Value<br>' },
                    unitInterval: 20
                }
            }
        ]
    }), [dataAdapter]);

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
            colorScheme="scheme04"
        />
    );
}

export default App;