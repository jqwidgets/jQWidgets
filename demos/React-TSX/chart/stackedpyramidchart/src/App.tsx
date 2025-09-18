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
        description: '',
        padding: { left: 15, top: 15, right: 15, bottom: 15 },
        seriesGroups: [
            {
                columnsBottomWidthPercent: 100,
                columnsGapPercent: 50,
                columnsTopWidthPercent: 0,
                orientation: 'horizontal',
                series: [
                    { dataField: 'SerieA', displayText: 'Serie A' },
                    { dataField: 'SerieB', displayText: 'Serie B' },
                    { dataField: 'SerieC', displayText: 'Serie C' }
                ],
                seriesGapPercent: 0,
                type: 'stackedcolumn'
            }
        ],
        source: sampleData,
        title: 'Stacked Pyramid Chart',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            flip: true,
            labels: { horizontalAlignment: 'right' }
        },
        xAxis: {
            dataField: 'Index',
            flip: true,
            gridLines: {
                interval: 1,
                visible: true
            },
            tickMarks: {
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
            showLegend={true}
            enableAnimations={false}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            valueAxis={chartProps.valueAxis}
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme06'}
        />
    );
};

export default App;