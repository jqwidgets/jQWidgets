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
            colorProgress: '#2db2e4',
            type: 'circle',
            offset: '75%',
            thickness: 2,
            size: '2%',
            majorSize: '2%',
            majorInterval: 10,
            minorInterval: 2
        };

        let labels = {
            offset: '88%',
            step: 5,
            visible: true,
            formatFunction: (label) => {
                if (label == 0)
                    return 'Min';
                if (label == 100)
                    return 'Max';
                return label;
            }
        };

        let progressBar = {
            size: '70%',
            offset: '0%'
        };

        let pointer = {
            type: 'line', thickness: 4, style: { fill: '#00a4e1', stroke: '#00a4e1' },
            size: '70%', offset: '0%'
        };

        return (
            <JqxKnob
                min={0} max={100} value={60}
                startAngle={120} endAngle={420} rotation={'clockwise'}
                style={style} marks={marks} labels={labels}
                progressBar={progressBar} pointer={pointer}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));