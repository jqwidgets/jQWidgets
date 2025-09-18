import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const sampleData: any[] = [
        { a: 0.35, b: 14.5 },
        { a: 1, b: 2.5 },
        { a: 10, b: 0.2 },
        { a: 100, b: 205 },
        { a: 1, b: 100 },
        { a: 5.11, b: 10.13 },
        { a: 20.13, b: 10.13 },
        { a: 600, b: 300 }
    ];

    const chartProps: IChartProps = {
        description: 'Sample logarithmic scale axis with base 10 and baseline at 1',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        seriesGroups: [
            {
                series: [
                    { dataField: 'a', displayText: 'A' },
                    { dataField: 'b', displayText: 'B' }
                ],
                type: 'column'
            }
        ],
        source: sampleData,
        title: 'Logarithmic Scale Axis Example',
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            baselineValue: 1,
            gridLines: { interval: 1 },
            labels: {
                formatSettings: { decimalPlaces: 1 },
                horizontalAlignment: 'right'
            },
            logarithmicScale: true,
            logarithmicScaleBase: 10,
            tickMarks: { interval: 1 },
            title: { text: 'Value' },
            unitInterval: 1
        },
        xAxis: {
            gridLines: { visible: true },
            tickMarks: { visible: true },
            title: { visible: false }
        }
    };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            enableAnimations={true}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            valueAxis={chartProps.valueAxis}
            seriesGroups={chartProps.seriesGroups}
        />
    );
};

export default App;