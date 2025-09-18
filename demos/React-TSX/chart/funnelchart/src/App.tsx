import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const sampleData = [
        { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
        { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
        { Index: '3', SerieA: 30, SerieB: 15, SerieC: 25 },
        { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
        { Index: '5', SerieA: 20, SerieB: 15, SerieC: 25 }
    ];

    const description = 'This example demonstrates funnel chart with positive and negative values';
    const padding = { left: 15, top: 15, right: 15, bottom: 15 };
    const seriesGroups = [
        {
            columnsBottomWidthPercent: 30,
            columnsGapPercent: 20,
            columnsTopWidthPercent: 100,
            series: [
                { dataField: 'SerieA', displayText: 'Serie A', labels: { visible: true } },
                { dataField: 'SerieB', displayText: 'Serie B', labels: { visible: true } },
                { dataField: 'SerieC', displayText: 'Serie C', labels: { visible: true } }
            ],
            seriesGapPercent: 20,
            type: 'column'
        }
    ];
    const title = 'Funnel chart';
    const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    const valueAxis = {
        labels: { horizontalAlignment: 'right' }
    };
    const xAxis = {
        dataField: 'Index',
        gridLines: {
            interval: 1,
            visible: true
        },
        tickMarks: {
            interval: 1,
            visible: true
        }
    };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={title}
            description={description}
            showLegend={true}
            enableAnimations={true}
            padding={padding}
            titlePadding={titlePadding}
            source={sampleData}
            xAxis={xAxis}
            valueAxis={valueAxis}
            seriesGroups={seriesGroups}
            colorScheme={'scheme02'}
        />
    );
}

export default App;