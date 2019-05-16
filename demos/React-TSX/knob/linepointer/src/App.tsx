import * as React from 'react';
 


import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class App extends React.PureComponent<{}, IKnobProps> {

    constructor(props: {}) {
        super(props);

        const styles = {
            fill: {
                color: '#fefefe',
                gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                gradientType: 'linear'
            },
            stroke: '#dfe3e9', strokeWidth: 3
        };
        const marks = {
            colorProgress: '#2db2e4', colorRemaining: '#333',
            majorInterval: 10, majorSize: '2%', minorInterval: 2,
            offset: '75%', size: '2%', thickness: 2, type: 'circle'
        };
        const labels = {
            formatFunction: (label: string): string | number => {
                if (label !== '0' && label !== '100') {
                    return label;
                }
                return label === '0' ? 'Min' : 'Max';
            },
            offset: '88%', step: 5, visible: true
        };
        const progressBar = {
            offset: '0%', size: '70%'
        };
        const pointer = {
            offset: '0%', size: '70%',
            style: { fill: '#00a4e1', stroke: '#00a4e1' },
            thickness: 4, type: 'line'
        };

        this.state = {
            labels,
            marks,
            pointer,
            progressBar,
            styles
        }
    }

    public render() {
        return (
            <JqxKnob
                value={60} min={0} max={100}
                startAngle={120} endAngle={420} styles={this.state.styles}
                snapToStep={true} rotation={'clockwise'}
                marks={this.state.marks} labels={this.state.labels}
                progressBar={this.state.progressBar} pointer={this.state.pointer}
            />
        );
    }

}

export default App;