import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const [chartProps] = React.useState<IChartProps>({
        description: 'Sample logarithmic scale axis with base 2 and baseline 8',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        seriesGroups: [
            {
                series: [
                    { dataField: 'a', displayText: 'A' },
                    { dataField: 'b', displayText: 'B' }
                ],
                type: 'column'
            },
            {
                series: [
                    { dataField: 'a', displayText: 'A2' },
                    { dataField: 'b', displayText: 'B2' }
                ],
                type: 'line'
            }
        ],
        source: [{ a: 0.35, b: 14.5 }, { a: 1, b: 2.5 }, { a: 10, b: 0.2 }, { a: 100, b: 205 }, { a: 1, b: 100 }, { a: 5.11, b: 10.13 }, { a: 20.13, b: 10.13 }, { a: 600, b: 300 }],
        title: 'Logarithmic Scale Axis Example',
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            baselineValue: 8,
            gridLines: { interval: 1 },
            labels: {
                formatSettings: { decimalPlaces: 3 },
                horizontalAlignment: 'right'
            },
            logarithmicScale: true,
            logarithmicScaleBase: 2,
            tickMarks: { interval: 1 },
            title: { text: 'Value' },
            unitInterval: 1
        }
    });

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            enableAnimations={true}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            valueAxis={chartProps.valueAxis}
            seriesGroups={chartProps.seriesGroups}
        />
    );
};

export default App;