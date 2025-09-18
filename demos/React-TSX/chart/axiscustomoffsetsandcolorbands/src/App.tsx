import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const sampleData = [
        { a: 0.1535, b: 0.5 },
        { a: 0.48, b: 20.5 },
        { a: 10, b: 60 },
        { a: 100, b: 80 },
        { a: 200, b: 90 },
        { a: 245.11, b: 100.13 },
        { a: 300.13, b: 150.13 },
        { a: 340, b: 200 }
    ];

    const [chartProps] = React.useState<IChartProps>({
        description: 'This example demonstrates how to use labels, tick marks and grid lines at custom offsets',
        padding: { left: 5, top: 5, right: 15, bottom: 5 },
        seriesGroups: [
            {
                series: [
                    { dataField: 'a', displayText: 'A', symbolType: 'diamond', symbolSize: 10 },
                    { dataField: 'b', displayText: 'B', symbolType: 'triangle_up', symbolSize: 10 }
                ],
                type: 'scatter'
            }
        ],
        source: sampleData,
        title: 'Custom labels, grid lines and tick marks offsets',
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            bands: [{ minValue: 64, maxValue: 256, fillColor: 'red', opacity: 0.2 }],
            flip: false,
            gridLines: {
                custom: [{ value: 10 }, { value: 20 }, { offset: 90 }]
            },
            labels: {
                custom: [{ value: 10 }, { value: 20 }, { offset: 90, value: 'custom' }],
                horizontalAlignment: 'right',
                visible: true
            },
            logarithmicScale: true,
            logarithmicScaleBase: 2,
            tickMarks: {
                custom: [{ value: 10 }, { value: 20 }, { offset: 90 }]
            },
            title: { text: "Value" }
        },
        xAxis: {
            dataField: "a",
            flip: true,
            gridLines: {
                custom: [{ value: 10 }, { value: 20 }, { offset: 100 }],
                visible: 'custom'
            },
            labels: {
                custom: [{ value: 10 }, { value: 20 }, { value: 'custom label at offset 100', offset: 100 }],
                formatFunction: (value: any) => {
                    return "{" + value + "}";
                },
                visible: 'custom'
            },
            logarithmicScale: true,
            logarithmicScaleBase: 2,
            tickMarks: {
                custom: [{ value: 10 }, { value: 20 }, { offset: 100 }],
                visible: 'custom'
            }
        }
    });

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            enableAnimations={false}
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