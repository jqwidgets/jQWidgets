import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();
    private eventText = React.createRef<HTMLDivElement>();
    private cursorRedDotElement: any = null;

    constructor(props: {}) {
        super(props);
        this.myChartOnMouseMove = this.myChartOnMouseMove.bind(this);
        this.myChartOnClick = this.myChartOnClick.bind(this);

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
                    radius: 200,
                    series: [
                        { dataField: 'a', displayText: 'A', symbolType: 'square', symbolSize: 6, dashStyle: '4,4', lineWidth: 1 },
                        { dataField: 'b', displayText: 'B', symbolType: 'circle', symbolSize: 6, lineWidth: 1 }
                    ],
                    type: 'line'
                }
            ],
            source: sampleData,
            title: 'Custom labels, grid lines and tick marks offsets',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                flip: false,
                labels: {
                    horizontalAlignment: 'right'
                },
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                padding: { right: 0 },
                title: { text: "Value" }
            },
            xAxis: {
                dataField: "a",
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                valuesOnTicks: true
            }
        };
    }

    public render() {
        return (
            <div>
                <div onMouseMove={this.myChartOnMouseMove}>
                    <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }} onClick={this.myChartOnClick}
                        title={this.state.title} description={this.state.description}
                        enableAnimations={false} padding={this.state.padding} titlePadding={this.state.titlePadding}
                        source={this.state.source} xAxis={this.state.xAxis} valueAxis={this.state.valueAxis}
                        seriesGroups={this.state.seriesGroups} />
                </div>
                <div ref={this.eventText} style={{ width: '600px', height: '30px' }} />
            </div>
        );
    }

    private myChartOnMouseMove(event: any): void {
        const position = this.cursorPositionRelativeToChart(event);
        // get the xAxis value
        const xvalue = this.myChart.current!.getXAxisValue(position.x, 0);
        // get the valueAxis value
        const yvalue = this.myChart.current!.getValueAxisValue(position.y, 0);
        // prepare event data text
        const eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
        // display the event data text
        this.eventText.current!.innerHTML = eventData;
        // display a small dot at the cursor position 
        const instance = this.myChart.current!.getInstance();
        const renderer = instance.renderer;
        if (this.cursorRedDotElement) {
            renderer.attr(this.cursorRedDotElement, { cx: position.x , cy: position.y - 78 });
        } else {
            this.cursorRedDotElement = renderer.circle(position.x, position.y, 1, { fill: 'red', stroke: 'red' });
        }
    }

    private myChartOnClick(event: any): void {
        const position = this.cursorPositionRelativeToChart(event);
        // get the xAxis value
        const xvalue = this.myChart.current!.getXAxisValue(position.x, 0);
        // get the valueAxis value
        const yvalue = this.myChart.current!.getValueAxisValue(position.y, 0);
        // prepare event data text
        const eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
        alert(eventData);
    }

    private cursorPositionRelativeToChart(event: any): any {
        // get the x/y coordinates of the mouse cursor relative to the chart element
        const x = event.pageX || event.clientX || event.screenX;
        const y = event.pageY || event.clientY || event.screenY;

        return { x, y };
    }
}

export default App; 