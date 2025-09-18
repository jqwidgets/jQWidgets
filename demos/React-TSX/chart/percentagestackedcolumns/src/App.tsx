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

    const description = 'Percentage Stacked Columns with logarithmic scale axis (base 2)';
    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const seriesGroups = [
        {
            columnsGapPercent: 50,
            series: [
                { dataField: 'a', displayText: 'A' },
                { dataField: 'b', displayText: 'B' }
            ],
            type: 'stackedcolumn100'
        },
        {
            series: [
                { dataField: 'a', displayText: 'A' },
                { dataField: 'b', displayText: 'B' }
            ],
            type: 'stackedline100'
        }
    ];
    const title = 'Logarithmic Scale Axis Example';
    const titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    const valueAxis = {
        gridLines: { interval: 1 },
        labels: {
            formatSettings: { decimalPlaces: 3, sufix: '' },
            horizontalAlignment: 'right'
        },
        logarithmicScale: true,
        logarithmicScaleBase: 2,
        tickMarks: { interval: 1 },
        title: { text: 'Value' },
        unitInterval: 1
    };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={title}
            description={description}
            enableAnimations={false}
            padding={padding}
            titlePadding={titlePadding}
            source={sampleData}
            seriesGroups={seriesGroups}
            valueAxis={valueAxis}
        />
    );
}

export default App;