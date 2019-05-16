import * as React from 'react';
 


import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class App extends React.PureComponent<{}, IKnobProps> {

    constructor(props: {}) {
        super(props);

        const marks = {
            colorProgress: { border: '#373636', color: '#373636' },
            colorRemaining: { border: '#373636', color: '#373636' },
            majorInterval: 10, majorSize: '9%', minorInterval: 2,
            offset: '71%', size: '6%', thickness: 1, type: 'line'
        };
        const labels = {
            offset: '88%', step: 10, visible: true
        };
        const progressBar = {
            background: {
                fill: {
                    color: '#a7a7a7',
                    gradientStops: [[0, 1], [50, 0.5], [100, 1]],
                    gradientType: 'linear'
                },
                stroke: '#373636', strokeWidth: 1
            },
            offset: '0%', size: '70%'
        };
        const pointer = {
            offset: '50%', size: '10%',
            style: {
                fill: {
                    color: '#a4a3a3',
                    gradientStops: [[0, 0.5], [50, 0.6], [100, 1]],
                    gradientType: 'linear'
                },
                stroke: '#333'
            },
            type: 'circle'
        };

        this.state = {
            labels,
            marks,
            pointer,
            progressBar
        }
    }

    public render() {
        return (
            <JqxKnob
                value={60} min={0} max={100}
                startAngle={120} endAngle={480}
                snapToStep={true} rotation={'clockwise'}
                marks={this.state.marks} labels={this.state.labels}
                progressBar={this.state.progressBar} pointer={this.state.pointer}
            />
        );
    }

}

export default App;