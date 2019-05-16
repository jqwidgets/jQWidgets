import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const sampleData = [
            { a: 0.1535, b: 0.5 },
            { a: 0.48, b: 20.5 },
            { a: 10, b: 60 },
            { a: 100, b: 80 },
            { a: 200, b: 90 },
            { a: 245.11, b: 100.13 },
            { a: 300.13, b: 150.13 },
            { a: 340, b: 200 }
        ];

        this.state = {
            description: 'This example demonstrates how to use labels, tick marks and grid lines at custom offsets',
            padding: { left: 5, top: 5, right: 15, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'a', displayText: 'A', symbolType: 'diamond', symbolSize: 10 },
                        { dataField: 'b', displayText: 'B', symbolType: 'triangle_up', symbolSize: 10 }
                    ],
                    type: 'scatter'
                }
            ],
            source: sampleData,
            title: 'Custom labels, grid lines and tick marks offsets',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                bands: [{ minValue: 64, maxValue: 256, fillColor: 'red', opacity: 0.2 }],
                flip: false,
                gridLines: {
                    custom: [{ value: 10 }, { value: 20 }, { offset: 90 }]
                },
                labels: {
                    custom: [{ value: 10 }, { value: 20 }, { offset: 90, value: 'custom' }],
                    horizontalAlignment: 'right',
                    visible: true
                },
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                tickMarks: {
                    custom: [{ value: 10 }, { value: 20 }, { offset: 90 }]
                },
                title: { text: "Value" }
            },
            xAxis: {
                dataField: "a",
                flip: true,
                gridLines:
                {
                    custom: [{ value: 10 }, { value: 20 }, { offset: 100 }],
                    visible: 'custom', // show only custom grid lines. Change to true to show all grid lines or false to hide all
                },
                labels: {
                    custom: [{ value: 10 }, { value: 20 }, { value: 'custom label at offset 100', offset: 100 }], // an array of items representing custom labels
                    // if the item has an offset property, the item is rendered at that offset, otherwise the value is mapped to an offset
                    // corresponding to its position on the axis scale. If an item has both a value and an offset property, the value
                    // property is not mappped to an offset, and instead it's just used to display the label
                    // the format function shows how to format the labels before they are displayed
                    formatFunction: (value) => {
                        return "{" + value + "}";
                    },
                    visible: 'custom' // show only custom labels. Change to true to show all labels or false to hide all
                },
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                tickMarks:
                {
                    custom: [{ value: 10 }, { value: 20 }, { offset: 100 }],
                    visible: 'custom' // show only custom tick marks. Change to true to show all tick marks or false to hide all
                }
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                enableAnimations={false} padding={this.state.padding} titlePadding={this.state.titlePadding}
                source={this.state.source} xAxis={this.state.xAxis} valueAxis={this.state.valueAxis}
                seriesGroups={this.state.seriesGroups} />
        );
    }
}

export default App; 