import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const chartProps: IChartProps = {
        title: 'Waterfall series with logarithmic axis',
        description: 'Logarithmic base 2',
        enableAnimations: true,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        source: [
            { a: 3, b: 9 },
            { a: 5, b: 7 },
            { a: 2, b: 9 },
            { a: 10, b: 15 },
            { a: 9, b: 7 },
            { a: 15, b: 10 },
            { a: 7, b: 5 },
            { total: true }
        ],
        xAxis: {
            gridLines: { visible: true },
            tickMarks: { visible: true }
        },
        valueAxis: {
            labels: {
                formatSettings: { decimalPlaces: 2 },
                horizontalAlignment: 'right'
            },
            logarithmicScale: true,
            logarithmicScaleBase: 2,
            title: { text: 'Value' }
        },
        seriesGroups: [
            {
                columnsMaxWidth: 50,
                series: [
                    { dataField: 'a', displayText: 'A' },
                    { dataField: 'b', displayText: 'B', summary: 'total' }
                ],
                type: 'waterfall'
            }
        ]
    };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            {...chartProps}
        />
    );
};

export default App;