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
        colorScheme: 'scheme05',
        description: 'logarithmic scale with base 2',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        seriesGroups: [
            {
                series: [
                    { dataFieldFrom: 'a', dataFieldTo: 'b', displayText: 'from A to B', opacity: 0.8, lineWidth: 1 }
                ],
                type: 'splinerangearea'
            }
        ],
        source: sampleData,
        title: 'Logarithmic Spline Area Range',
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            flip: false,
            gridLines: { visible: false },
            labels: {
                formatSettings: { decimalPlaces: 3 },
                horizontalAlignment: 'right'
            },
            logarithmicScale: true,
            logarithmicScaleBase: 2,
            title: { text: 'Value' },
            unitInterval: 1
        },
        xAxis: {
            gridLines: { visible: false },
            valuesOnTicks: false
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
            colorScheme={chartProps.colorScheme}
        />
    );
};

export default App;