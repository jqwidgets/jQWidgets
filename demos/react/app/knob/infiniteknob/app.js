import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';

class App extends React.Component {
    componentDidMount() {
        let lastValue;
        let newValue = 0;
        let min = 0;
        let max = 100;

        this.refs.myKnob.on('change', (event) => {
            lastValue = newValue;
            newValue = event.args.value;
            if (newValue >= min && newValue <= min + 10 && lastValue <= max && lastValue >= max - 10) {
                min = max;
                max += 100;
               this.refs.myKnob.setOptions({ value: max, max: max, min: min });
            } else if (newValue >= max - 10 && newValue <= max && lastValue >= min && lastValue <= min + 10) {
                max = min;
                min -= 100;
                this.refs.myKnob.setOptions({ value: min, min: min, max: max });
            }
        });
    }
    render() {
        let style = {
            stroke: '#dfe3e9',
            strokeWidth: 3,
            fill: {
                color: '#fefefe', gradientType: 'linear',
                gradientStops: [[0, 1], [50, 0.9], [100, 1]]
            }
        };

        let marks = {
            colorRemaining: '#333',
            colorProgress: '#333',
            type: 'line',
            offset: '71%',
            thickness: 1,
            size: '6%',
            majorSize: '9%',
            majorInterval: 10,
            minorInterval: 2
        };

        let labels = {
            offset: '88%',
            step: 10
        };

        let progressBar = {
            style: { fill: { color: '#00a644', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.9], [100, 1]] }, stroke: '#00a644' },
            background: { fill: { color: '#ff8b1e', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.9], [100, 1]] }, stroke: '#ff8b1e' },
            size: '9%',
            offset: '60%'
        };

        let pointer = {
            type: 'circle',
            style: { fill: '#ef6100', stroke: '#ef6100' },
            size: '5%',
            offset: '38%',
            thickness: 20
        };

        let spinner =
            {
                style: { fill: { color: '#00a4e1', gradientType: 'linear', gradientStops: [[0, 1], [50, 0.9], [100, 1]] }, stroke: '#00a4e1' },
                innerRadius: '45%', // specifies the inner Radius of the dial
                outerRadius: '60%', // specifies the outer Radius of the dial
                marks: {
                    colorRemaining: '#fff',
                    colorProgress: '#fff',
                    type: 'line',
                    offset: '46%',
                    thickness: 2,
                    size: '14%',
                    majorSize: '14%',
                    majorInterval: 10,
                    minorInterval: 10
                }
            };

        let dial =
            {
                style: { fill: { color: '#dfe3e9', gradientType: 'linearHorizontal', gradientStops: [[0, 0.9], [50, 1], [100, 1]] }, stroke: '#dfe3e9' },
                innerRadius: '0%', // specifies the inner Radius of the dial
                outerRadius: '45%'
            };

        return (
            <JqxKnob ref='myKnob'
                min={0} max={100} value={60} startAngle={150} endAngle={510}
                rotation={'clockwise'} snapToStep={true} spinner={spinner}
                style={style} marks={marks} labels={labels} dial={dial}
                progressBar={progressBar} pointer={pointer}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
