import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const myChart = useRef<JqxChart>(null);
    const eventText = useRef<HTMLDivElement>(null);
    const cursorRedDotElement = useRef<any>(null);

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

    const [chartProps] = useState<IChartProps>({
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
    });

    const cursorPositionRelativeToChart = useCallback((event: any) => {
        const x = event.pageX || event.clientX || event.screenX;
        const y = event.pageY || event.clientY || event.screenY;
        return { x, y };
    }, []);

    const myChartOnMouseMove = useCallback((event: any) => {
        if (!myChart.current) return;
        const position = cursorPositionRelativeToChart(event);
        const xvalue = myChart.current.getXAxisValue(position.x, 0);
        const yvalue = myChart.current.getValueAxisValue(position.y, 0);
        const eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
        if (eventText.current) {
            eventText.current.innerHTML = eventData;
        }
        const instance = myChart.current.getInstance();
        const renderer = instance && instance.renderer;
        if (renderer) {
            if (cursorRedDotElement.current) {
                renderer.attr(cursorRedDotElement.current, { cx: position.x , cy: position.y - 78 });
            } else {
                cursorRedDotElement.current = renderer.circle(position.x, position.y, 1, { fill: 'red', stroke: 'red' });
            }
        }
    }, [cursorPositionRelativeToChart]);

    const myChartOnClick = useCallback((event: any) => {
        if (!myChart.current) return;
        const position = cursorPositionRelativeToChart(event);
        const xvalue = myChart.current.getXAxisValue(position.x, 0);
        const yvalue = myChart.current.getValueAxisValue(position.y, 0);
        const eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
        alert(eventData);
    }, [cursorPositionRelativeToChart]);

    return (
        <div>
            <div onMouseMove={myChartOnMouseMove}>
                <JqxChart
                    ref={myChart}
                    style={{ width: '850px', height: '500px' }}
                    onClick={myChartOnClick}
                    title={chartProps.title}
                    description={chartProps.description}
                    enableAnimations={false}
                    padding={chartProps.padding}
                    titlePadding={chartProps.titlePadding}
                    source={chartProps.source}
                    xAxis={chartProps.xAxis}
                    valueAxis={chartProps.valueAxis}
                    seriesGroups={chartProps.seriesGroups}
                />
            </div>
            <div ref={eventText} style={{ width: '600px', height: '30px' }} />
        </div>
    );
};

export default App;