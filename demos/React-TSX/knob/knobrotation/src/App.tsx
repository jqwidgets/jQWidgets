import * as React from 'react';
 


import './App.css';

import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class App extends React.PureComponent<{}, IKnobProps> {

    constructor(props: {}) {
        super(props);

        const marks = {
            colorProgress: '#fff', colorRemaining: '#fff',
            drawAboveProgressBar: true,
            majorInterval: 10, majorSize: '15%', minorInterval: 2,
            offset: '75%', size: '15%', thickness: 2, type: 'line'
        };
        const labels = {
            offset: '50%', rotate: true, step: 10
        };
        const progressBar = {
            background: { fill: '#d1d2d4', stroke: '#d1d2d4', strokeWidth: 1 },
            offset: '75%', size: '15%',
            style: { fill: '#a2da39', stroke: '#a2da39', strokeWidth: 1 }
        };
        const pointer = {
            offset: '0%', size: '55%',
            style: { fill: '#a2da39' },
            thickness: 5, type: 'arrow'
        };
        const spinner = {
            innerRadius: '60%',
            marks: {
                colorProgress: '#d5d3d4',
                colorRemaining: '#d5d3d4',
                majorInterval: 10,
                majorSize: '5%',
                minorInterval: 2,
                offset: '60%',
                size: '5%',
                thickness: 1,
                type: 'line'
            },
            outerRadius: '65%',
            size: '70%',
            style: {
                fill: {
                    color: '#dfe3e9',
                    gradientStops: [[0, 0.5], [50, 0.5], [100, 0.5]],
                    gradientType: 'linear'
                },
                stroke: '#d5d3d4', strokeWidth: 1
            }
        };
        const dial = {
            innerRadius: '0%',
            outerRadius: '65%',
            style: {
                fill: {
                    color: '#66707e',
                    gradientStops: [[0, 1], [50, 0.4], [100, 1]],
                    gradientType: 'linear'
                },
                stroke: '#ff0000', strokeWidth: 1
            }
        };

        this.state = {
            dial,
            labels,
            marks,
            pointer,
            progressBar,
            spinner
        }
    }

    public render() {
        return (
            <JqxKnob
                value={60} min={0} max={100} step={20}
                startAngle={120} endAngle={480}
                dragStartAngle={120} dragEndAngle={420}
                snapToStep={true} rotation={'counterclockwise'}
                marks={this.state.marks} labels={this.state.labels}
                progressBar={this.state.progressBar} pointer={this.state.pointer}
                spinner={this.state.spinner} dial={this.state.dial}
            />
        );
    }

}

export default App;