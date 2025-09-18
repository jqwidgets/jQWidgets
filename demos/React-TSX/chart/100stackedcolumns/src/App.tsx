import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const sampleData = [
        { Day: 'Monday', Running: 30, Swimming: 5, Cycling: 25, Riding: 10 },
        { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Riding: 15 },
        { Day: 'Wednesday', Running: 30, Swimming: 5, Cycling: 25, Riding: 25 },
        { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45, Riding: 15 },
        { Day: 'Friday', Running: 5, Swimming: 20, Cycling: 25, Riding: 5 },
        { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Riding: 30 },
        { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 5, Riding: 20 }
    ];

    const chartProps: IChartProps = {
        description: 'Time spent in vigorous exercise by activity',
        padding: { bottom: 5, left: 5, right: 5, top: 5 },
        seriesGroups: [
            {
                columnsGapPercent: 100,
                series: [
                    { dataField: 'Running', displayText: 'Running' },
                    { dataField: 'Swimming', displayText: 'Swimming' },
                    { dataField: 'Cycling', displayText: 'Cycling' }
                ],
                seriesGapPercent: 5,
                type: 'stackedcolumn100'
            }
        ],
        source: sampleData,
        title: 'Fitness & exercise weekly scorecard',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            gridLines: { color: '#BCBCBC' },
            labels: {
                formatSettings: { sufix: '%' },
                horizontalAlignment: 'right'
            },
            tickMarks: { color: '#BCBCBC' },
            title: { text: 'Time in minutes' },
            unitInterval: 10
        },
        xAxis: {
            axisSize: 'auto',
            dataField: 'Day',
            gridLines: {
                color: '#BCBCBC',
                interval: 1,
                visible: true
            },
            tickMarks: {
                color: '#BCBCBC',
                interval: 1,
                visible: true
            }
        }
    };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            titlePadding={chartProps.titlePadding}
            showLegend={true}
            enableAnimations={true}
            padding={chartProps.padding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            valueAxis={chartProps.valueAxis}
            colorScheme={'scheme04'}
            seriesGroups={chartProps.seriesGroups}
        />
    );
}

export default App;