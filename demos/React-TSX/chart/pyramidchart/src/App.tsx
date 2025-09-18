import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const sampleData: any[] = [
        { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
        { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
        { Index: '3', SerieA: 30, SerieB: 0, SerieC: 25 },
        { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
        { Index: '5', SerieA: 0, SerieB: 20, SerieC: 25 }
    ];

    const chartProps: IChartProps = {
        title: 'Pyramid series',
        description: 'This example demonstrates pyramid chart series',
        showLegend: true,
        enableAnimations: false,
        padding: { left: 15, top: 15, right: 15, bottom: 15 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        source: sampleData,
        xAxis: {
            dataField: 'Index',
            gridLines: {
                interval: 1,
                visible: true
            },
            tickMarks: {
                interval: 1,
                visible: true
            }
        },
        valueAxis: {
            labels: { horizontalAlignment: 'right' }
        },
        seriesGroups: [
            {
                columnsBottomWidthPercent: 100,
                columnsGapPercent: 20,
                columnsTopWidthPercent: 0,
                series: [
                    { dataField: 'SerieA', displayText: 'Serie A' },
                    { dataField: 'SerieB', displayText: 'Serie B' },
                    { dataField: 'SerieC', displayText: 'Serie C' }
                ],
                seriesGapPercent: 20,
                type: 'column'
            }
        ],
        colorScheme: 'scheme06'
    };

    return (
        <JqxChart style={{ width: '850px', height: '500px' }} {...chartProps} />
    );
};

export default App;