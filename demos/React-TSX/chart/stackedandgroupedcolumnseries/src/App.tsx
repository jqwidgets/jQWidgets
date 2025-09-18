import * as React from 'react';
import { useState } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const [chartProps] = useState<IChartProps>({
        description: 'Time spent in vigorous exercise by activity',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        seriesGroups: [
            {
                columnsGapPercent: 50,
                series: [
                    { dataField: 'Running', displayText: 'Running' },
                    { dataField: 'Swimming', displayText: 'Swimming' }
                ],
                seriesGapPercent: 5,
                type: 'stackedcolumn',
            },
            {
                columnsGapPercent: 50,
                series: [
                    { dataField: 'Riding', displayText: 'Riding' },
                    { dataField: 'Cycling', displayText: 'Cycling' }
                ],
                seriesGapPercent: 5,
                type: 'stackedcolumn'
            }
        ],
        source: [
            { Day: 'Monday', Running: 30, Swimming: 5, Cycling: 25, Riding: 10 },
            { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Riding: 15 },
            { Day: 'Wednesday', Running: 30, Swimming: 5, Cycling: 25, Riding: 25 },
            { Day: 'Thursday', Running: 35, Swimming: 25, Cycling: 45, Riding: 15 },
            { Day: 'Friday', Running: 5, Swimming: 20, Cycling: 25, Riding: 5 },
            { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Riding: 30 },
            { Day: 'Sunday', Running: 60, Swimming: 45, Cycling: 5, Riding: 20 }
        ],
        title: 'Fitness & exercise weekly scorecard',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            gridLines: { color: '#888888' },
            maxValue: 120,
            minValue: 0,
            tickMarks: { color: '#888888' },
            title: { text: 'Time in minutes<br>' },
            unitInterval: 10,
            visible: true
        },
        xAxis: {
            dataField: 'Day',
            gridLines: {
                color: '#888888',
                interval: 1,
                visible: false
            },
            tickMarks: {
                color: '#888888',
                interval: 1,
                visible: true
            },
            unitInterval: 1
        }
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
            colorScheme='scheme06'
        />
    );
};

export default App;