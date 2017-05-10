import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myKnob.on('change', (event) => {
            document.getElementById('change').innerHTML = 'Values: ' + event.args.value;
        });
    }
    render() {
        let marks = {
            colorRemaining: '#333',
            colorProgress: '#66707e',
            style: 'line',
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
            style: [{ fill: '#66707e', stroke: '#66707e', strokeWidth: 0 },
            { fill: '#66707e', stroke: '#66707e', strokeWidth: 0 }],
            size: '9%',
            offset: '58%',
            background: { fill: '#a2da39', stroke: '#a2da39', strokeWidth: 0 }
        };

        let pointer = [
            { type: 'circle', style: { fill: '#a2da39', stroke: '#a2da39' }, size: '5%', offset: '38%', thickness: 20 },
            { type: 'circle', style: { fill: '#a2da39', stroke: '#a2da39' }, size: '5%', offset: '38%', thickness: 20 }
        ]

        let spinner = {
            style: { fill: '#66707e', stroke: '#66707e' },
            innerRadius: '0%', // specifies the inner Radius of the dial
            outerRadius: '58%', // specifies the outer Radius of the dial
            marks: {
                colorRemaining: '#a2da39',
                colorProgress: '#a2da39',
                type: 'circle',
                offset: '55%',
                thickness: 3,
                size: '1%',
                majorSize: '1%',
                majorInterval: 10,
                minorInterval: 10
            }
        }

        let changing = (oldValues, newValues) => {
            let range = newValues[1] - newValues[0];
            if (range < 10)
                return false;
            if (range > 90)
                return false;
        };

        return (
            <div>
                <JqxKnob ref='myKnob'
                    min={0} max={100} value={[60, 80]} startAngle={150} endAngle={510}
                    snapToStep={true} rotation={'clockwise'} style={{ fill: '#ebeced' }}
                    changing={changing} marks={marks} labels={labels}
                    progressBar={progressBar} pointer={pointer} spinner={spinner}
                />
                <div id='change' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
