import * as React from 'react';
import { useState, useMemo } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const sourceConfig = useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'Open' },
            { name: 'High' },
            { name: 'Low' },
            { name: 'Close' },
            { name: 'Volume' },
            { name: 'AdjClose' }
        ],
        datatype: 'csv',
        url: 'TSLA_stockprice.csv'
    }), []);

    const chartSource = useMemo(() =>
        new jqx.dataAdapter(sourceConfig, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + sourceConfig.url + '" : ' + error);
            }
        }), [sourceConfig]
    );

    const xAxis = useMemo(() => ({
        baseUnit: 'month',
        dataField: 'Date',
        labels: {
            angle: 0,
            formatFunction: (value: any): string =>
                months[value.getUTCMonth()] + '-' + value.getFullYear(),
            horizontalAlignment: 'right'
        },
        maxValue: new Date(2014, 2, 1),
        minValue: new Date(2013, 5, 1),
        tickMarks: { visible: true },
        toolTipFormatFunction: (value: any): string =>
            value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear(),
        type: 'date',
        valuesOnTicks: true
    }), [months]);

    const [chartProps] = useState<IChartProps>({
        title: 'Tesla Motors Stock Price',
        description: 'Closing price (June 2013 - March 2018)',
        padding: { left: 15, top: 5, right: 30, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        source: chartSource,
        xAxis: xAxis,
        seriesGroups: [
            {
                series: [
                    { dataField: 'Close', displayText: 'Close Price', lineWidth: 1, symbolSize: 6 }
                ],
                type: 'stepline',
                valueAxis: {
                    flip: false,
                    labels: { horizontalAlignment: 'right' },
                    title: { text: 'Price per share [USD]<br>' }
                }
            }
        ]
    });

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={true}
            enableAnimations={true}
            padding={chartProps.padding}
            enableCrosshairs={true}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            crosshairsColor="#0000FF"
            crosshairsDashStyle="1,1"
            seriesGroups={chartProps.seriesGroups}
            colorScheme="scheme01"
        />
    );
};

export default App;