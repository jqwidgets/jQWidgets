import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';

class App extends React.Component {
    render() {
        let style = {
            stroke: '#dfe3e9', strokeWidth: 3, fill: { color: '#fefefe', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.9], [100, 1]] }
        };

        let marks = {
            colorRemaining: '#333',
            colorProgress: '#16a15d',
            type: 'circle',
            offset: '68%',
            drawAboveProgressBar: true,
            thickness: 1,
            size: '2%',
            majorSize: '2%',
            majorInterval: 20,
            minorInterval: 20
        };

        let labels = {
            step: 20,
            offset: '80%',
            formatFunction: (label) => {
                if (label == 0)
                    return 'Low';
                if (label == 20)
                    return 'Defrost';
                if (label == 40)
                    return 'M.Low';
                if (label == 60)
                    return 'Med';
                if (label == 80)
                    return 'M.High';
                if (label == 100)
                    return 'High';
            }
        };

        let progressBar = {
            background: { fill: '#eeeeee' },
            style: { fill: '#16a15d', opacity: 0.4 },
            ranges:
            [
                { startValue: 0, endValue: 20, fill: '#12b24e' },
                { startValue: 20, endValue: 40, fill: '#2ec544' },
                { startValue: 40, endValue: 60, fill: '#ffff3b' },
                { startValue: 60, endValue: 80, fill: '#f4a620' },
                { startValue: 80, endValue: 100, fill: '#f2121c' }
            ],
            size: '7%',
            offset: '56%'
        };

        let pointer = {
            type: 'arrow',
            style: { fill: '#666' },
            size: '63%',
            offset: '0%',
            thickness: 7
        };

        let dial = {
            style: {
                fill: '#eee'
            },
            innerRadius: '68%',
            outerRadius: '92%',
            startAngle: 0,
            endAngle: 360
        };

        let spinner = {
            style: {
                fill: '#666'
            },
            innerRadius: '0%',
            outerRadius: '3%',
            startAngle: 0,
            endAngle: 360
        };

        return (
            <JqxKnob width={500} height={500}
                min={0} max={100} value={0} step={20} startAngle={120} endAngle={480}
                dragStartAngle={120} dragEndAngle={420} rotation={'clockwise'}
                style={style} marks={marks} labels={labels} spinner={spinner}
                progressBar={progressBar} pointer={pointer} dial={dial}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
