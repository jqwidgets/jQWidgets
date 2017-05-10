import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    componentDidMount() {
        let cursorRedDotElement = null;

        this.refs.myChart.on('mousemove', (event) => {
            let position = this.cursorPositionRelativeToChart(event);
            // get the xAxis value
            let xvalue = this.refs.myChart.getXAxisValue(position.x, 0);
            // get the valueAxis value
            let yvalue = this.refs.myChart.getValueAxisValue(position.y, 0);
            // prepare event data text
            let eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
            // display the event data text
            document.getElementById('eventText').innerHTML = eventData;
            // display a small dot at the cursor position 
            let instance = this.refs.myChart.getInstance();
            let renderer = instance.renderer;
            if (cursorRedDotElement)
                renderer.attr(cursorRedDotElement, { cx: position.x, cy: position.y });
            else
                cursorRedDotElement = renderer.circle(position.x, position.y, 1, { fill: 'red', stroke: 'red' });
        });
        // add click event handler
        this.refs.myChart.on('click', (event) => {
            let position = this.cursorPositionRelativeToChart(event);
            // get the xAxis value
            let xvalue = this.refs.myChart.getXAxisValue(position.x, 0);
            // get the valueAxis value
            let yvalue = this.refs.myChart.getValueAxisValue(position.y, 0);
            // prepare event data text
            let eventData = 'x: ' + position.x + '; y: ' + position.y + '; xValue: ' + xvalue + '; yValue: ' + yvalue;
            alert(eventData);
        });
    }
    cursorPositionRelativeToChart(event) {
        // get the x/y coordinates of the mouse cursor relative to the chart element
        let x = event.pageX || event.clientX || event.screenX;
        let y = event.pageY || event.clientY || event.screenY;
        let pos = $('.myChart').offset();

        if (self._isTouchDevice) {
            let cursorPos = $.jqx.position(event);
            x = cursorPos.left;
            y = cursorPos.top;
        }
        x -= pos.left;
        y -= pos.top;
        return { x: x, y: y };
    }
    render() {
        let sampleData = [
            { a: 1.1535, b: 0.5 },
            { a: 4.48, b: 20.5 },
            { a: 10, b: 60 },
            { a: 100, b: 80 },
            { a: 200, b: 90 },
            { a: 245.11, b: 100.13 },
            { a: 300.13, b: 150.13 },
            { a: 340, b: 200 }
        ];

        let padding = { left: 15, top: 5, right: 15, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'a',
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                valuesOnTicks: true
            };

        let valueAxis =
            {
                padding: { right: 0 },
                flip: false,
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                title: { text: 'Value' },
                labels: {
                    horizontalAlignment: 'right'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    radius: 200,
                    series: [
                        { dataField: 'a', displayText: 'A', symbolType: 'square', symbolSize: 6, dashStyle: '4,4', lineWidth: 1 },
                        { dataField: 'b', displayText: 'B', symbolType: 'circle', symbolSize: 6, lineWidth: 1 }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart className='myChart' ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Logarithmic Scale Offset to Value Mappying'} description={'Move the mouse to see the respective x and y values'}
                    enableAnimations={true} padding={padding}
                    titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                    valueAxis={valueAxis} seriesGroups={seriesGroups}
                />
                <div id='eventText' style={{ width: 600, height: 30 }}></div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
