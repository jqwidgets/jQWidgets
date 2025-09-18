import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const months = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], []);
    const sourceConfig = useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        datatype: 'csv',
        url: 'nasdaq_vs_sp500.txt'
    }), []);

    const source = useMemo(() => new jqx.dataAdapter(sourceConfig, {
        async: false,
        autoBind: true,
        loadError: (xhr: any, status: any, error: any) => {
            alert('Error loading "' + sourceConfig.url + '" : ' + error);
        }
    }), [sourceConfig]);

    const title = 'U.S. Stock Market Index Performance';
    const description = 'NASDAQ Composite compared to S&P 500';
    const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    const padding = { left: 10, top: 5, right: 10, bottom: 5 };

    const seriesGroups = useMemo(() => [
        {
            alignEndPointsWithIntervals: true,
            series: [
                { dataField: 'NASDAQ', displayText: 'NASDAQ', opacity: 0.7 },
                { dataField: 'S&P 500', displayText: 'S&P 500', opacity: 0.8 }
            ],
            type: 'area'
        }
    ], []);

    const valueAxis = {
        title: { text: 'Daily Closing Price<br>' }
    };

    const xAxis = useMemo<IChartProps['xAxis']>(() => ({
        baseUnit: 'month',
        dataField: 'Date',
        labels: {
            angle: -45,
            formatFunction: (value: any) => {
                return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
            },
            offset: { x: 0, y: -15 },
            rotationPoint: 'topright'
        },
        maxValue: new Date(2014, 11, 1),
        minValue: new Date(2014, 0, 1),
        toolTipFormatFunction: (value: any) => {
            return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
        },
        type: 'date',
        valuesOnTicks: true
    }), [months]);

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={title}
            description={description}
            titlePadding={titlePadding}
            showLegend={true}
            enableAnimations={true}
            enableCrosshairs={true}
            padding={padding}
            source={source}
            xAxis={xAxis}
            valueAxis={valueAxis}
            colorScheme={'scheme05'}
            seriesGroups={seriesGroups}
        />
    );
};

export default App;