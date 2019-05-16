import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const sampleData: any[] = [
            { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
            { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
            { Index: '3', SerieA: 30, SerieB: 10, SerieC: 25 },
            { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
            { Index: '5', SerieA: 10, SerieB: 20, SerieC: 25 },
            { Index: '6', SerieA: 30, SerieB: 10, SerieC: 30 },
            { Index: '7', SerieA: 60, SerieB: 45, SerieC: 10 }
        ];

        this.state = {
            description: 'This example demonstrates stacked funnel chart with positive and negative values',
            padding: { left: 15, top: 15, right: 15, bottom: 15 },
            seriesGroups: [
                {
                    columnsBottomWidthPercent: 30,
                    columnsGapPercent: 50,
                    columnsTopWidthPercent: 100,
                    series: [
                        { dataField: 'SerieA', displayText: 'Serie A', labels: { visible: true } },
                        { dataField: 'SerieB', displayText: 'Serie B', labels: { visible: true } },
                        { dataField: 'SerieC', displayText: 'Serie C', labels: { visible: true } }
                    ],
                    seriesGapPercent: 0,
                    type: 'stackedcolumn'
                }
            ],
            source: sampleData,
            title: 'Stacked Funnel Chart',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: { horizontalAlignment: 'right' }
            },
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
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={false} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme02'}/>
        );
    }
}

export default App;