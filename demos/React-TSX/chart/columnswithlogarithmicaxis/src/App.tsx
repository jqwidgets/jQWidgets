import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
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

    const description = 'Sample logarithmic scale axis with base 2';
    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const seriesGroups = [
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
    ];
    const title = 'Logarithmic Scale Axis Example';
    const titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    const valueAxis = {
        labels: {
            formatSettings: { decimalPlaces: 3 },
            horizontalAlignment: 'right'
        },
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        title: { text: 'Value' },
        unitInterval: 1
    };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={title}
            description={description}
            enableAnimations={true}
            padding={padding}
            titlePadding={titlePadding}
            source={sampleData}
            valueAxis={valueAxis}
            seriesGroups={seriesGroups}
        />
    );
}

export default App;