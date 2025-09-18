import * as React from 'react';
import { useState } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const [chartProps] = useState<IChartProps>(() => {
        const sampleData = [
            { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25 },
            { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0 },
            { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25 },
            { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45 },
            { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25 },
            { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30 },
            { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 0 }
        ];
        return {
            description: 'Time spent in vigorous exercise by activity',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'Running', displayText: 'Running' },
                        { dataField: 'Swimming', displayText: 'Swimming' },
                        { dataField: 'Cycling', displayText: 'Cycling' }
                    ],
                    seriesGapPercent: 0,
                    type: 'stackedcolumn'
                }
            ],
            source: sampleData,
            title: 'Fitness & exercise weekly scorecard',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: { horizontalAlignment: 'right' },
                maxValue: 120,
                minValue: 0,
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
                },
                unitInterval: 1
            }
        };
    });

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={true}
            enableAnimations={true}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            valueAxis={chartProps.valueAxis}
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme06'}
        />
    );
}

export default App;