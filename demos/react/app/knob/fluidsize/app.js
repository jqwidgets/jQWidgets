import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';

class App extends React.Component {
    render() {
        let style = {
            stroke: '#dfe3e9', strokeWidth: 3, fill: { color: '#fefefe', gradientType: "linear", gradientStops: [[0, 1], [50, 0.9], [100, 1]] }
        };

        let marks = {
            colorRemaining: { color: 'grey', border: 'grey' },
            colorProgress: { color: '#00a4e1', border: '#00a4e1' },
            type: 'line',
            offset: '71%',
            thickness: 3,
            size: '6%',
            majorSize: '9%',
            majorInterval: 10,
            minorInterval: 2
        };  

        let labels = {
            offset: '88%',
            step: 10,
            visible: true
        };

        let progressBar = {
            style: { fill: '#00a4e1', stroke: 'grey' },
            size: '9%',
            offset: '60%',
            background: { fill: 'grey', stroke: 'grey' }
        };

        let pointer = {
            type: 'arrow', style: { fill: '#00a4e1', stroke: 'grey' }, size: '59%', offset: '49%', thickness: 20
        };

        return (
            <JqxKnob width={'75%'} height={'75%'}
                min={0} max={100} value={60} snapToStep={true}
                startAngle={120} endAngle={420} rotation={'clockwise'}
                style={style} marks={marks} labels={labels}
                progressBar={progressBar} pointer={pointer}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
