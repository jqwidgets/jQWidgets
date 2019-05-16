import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const data: any[] = [
            { Person: 'Planning', M1_From: 2, M1_To: 5, M2_From: 5, M2_To: 10 },
            { Person: 'Dev 1', M1_From: 5, M1_To: 7, M2_From: 9, M2_To: 17 },
            { Person: 'Dev 2', M1_From: 5, M1_To: 12, M2_From: 14, M2_To: 22 },
            { Person: 'QA 1', M1_From: 7, M1_To: 14, M2_From: 14, M2_To: 25 }
        ];

        const toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
            return '<DIV style="text-align:left"><b>Team: ' + categoryValue +
                '</b><br />Start day: ' + value.from +
                '<br />End day: ' + value.to;
        };

        this.state = {
            padding: { left: 5, top: 5, right: 10, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 100,
                    orientation: 'horizontal',
                    series: [
                        { dataFieldFrom: 'M1_From', dataFieldTo: 'M1_To', displayText: 'Sprint 1', opacity: 1 },
                        { dataFieldFrom: 'M2_From', dataFieldTo: 'M2_To', displayText: 'Sprint 2', opacity: 1 }
                    ],
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    type: 'rangecolumn',
                    valueAxis:
                    {
                        bands: [
                            { minValue: 13, maxValue: 16, fillColor: '#00FF00', opacity: 0.15 },
                            { minValue: 24, maxValue: 27, fillColor: '#0000FF', opacity: 0.20 },
                            { minValue: 29, maxValue: 29, fillColor: '#FF0000', opacity: 0.5, lineWidth: 3 }
                        ],
                        flip: true,
                        maxValue: 30,
                        minValue: 1,
                        tickMarks: { color: '#BCBCBC' },
                        title: { text: 'Day' },
                        unitInterval: 1
                    }
                }
            ],
            source: data,
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Person',
                tickMarks: {
                    color: '#BCBCBC',
                    interval: 1,
                    visible: true
                },
                unitInterval: 1
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                seriesGroups={this.state.seriesGroups} colorScheme={'scheme03'} />
        );
    }
}

export default App; 