import * as React from 'react';
 


import './App.css';

import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class App extends React.PureComponent<{}, IKnobProps> {

    constructor(props: {}) {
        super(props);

        const styles = {
            fill: {
                color: '#fefefe',
                gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                gradientType: "linear"
            },
            stroke: '#dfe3e9', strokeWidth: 3
        };
        const marks = {
            colorProgress: { border: '#00a4e1', color: '#00a4e1' },
            colorRemaining: { border: 'grey', color: 'grey' },
            majorInterval: 10, majorSize: '9%', minorInterval: 2,
            offset: '71%', size: '6%', thickness: 3
        };
        const labels = {
            offset: '88%', step: 10, visible: true
        };
        const pointer = {
            offset: '49%', size: '59%',
            style: { fill: '#00a4e1', stroke: 'grey' },
            thickness: 20, type: 'arrow'
        };

        const progressBar = {
            background: { fill: 'grey', stroke: 'grey' },
            offset: '60%', size: '9%',
            style: { fill: '#00a4e1', stroke: 'grey' }
        };

        this.state = {
            labels, marks, pointer,
            progressBar, styles
        }

    }

    public render() {
        return (
            <div className="container">
                <JqxKnob
                    width={'75%'} height={'75%'}
                    value={60} min={0} max={100} startAngle={120}
                    endAngle={420} snapToStep={true} rotation={"clockwise"}
                    styles={this.state.styles} marks={this.state.marks} labels={this.state.labels}
                    pointer={this.state.pointer} progressBar={this.state.progressBar}
                />
            </div>
        );
    }

}

export default App;