import * as React from 'react';
 


import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class App extends React.PureComponent<{}, IKnobProps> {

    constructor(props: {}) {
        super(props);

        const marks = {
            colorProgress: '#17a25d', colorRemaining: '#333',
            majorInterval: 10, majorSize: '1%', minorInterval: 5,
            offset: '75%', size: '1%', thickness: 2
        };
        const labels = {
            formatFunction: (label: string): string | number => {
                if (label !== '0' && label !== '100' && label !== '-100') {
                    return label;
                }
                return label === '0' ? 'Off' : label === '-100' ? 'Min' : 'Max';
            },
            offset: '88%', step: 20, visible: true
        };
        const progressBar = {
            offset: '0%', size: '70%',
        };
        const pointer = {
            offset: '50%', size: '60%',
            style: { fill: '#ff6126', stroke: '#333' },
            thickness: 25, type: 'arrow'
        };
        const spinner = {
            innerRadius: '65%',
            marks: {
                colorProgress: '#fff',
                colorRemaining: '#fff',
                majorInterval: 20,
                majorSize: '5%',
                minorInterval: 20,
                offset: '68%',
                size: '5%',
                thickness: 4,
                type: 'circle'
            },
            outerRadius: '70%',
            style: { fill: '#17a25d', stroke: '#17a25d' }
        };
        const dial = {
            innerRadius: '0%',
            outerRadius: '50%',
            style: { fill: '#17a25d', stroke: '#17a25d' }
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
                value={-100} min={-100} max={100}
                startAngle={120} endAngle={480} step={0.5}
                dragStartAngle={120} dragEndAngle={420}
                snapToStep={true} rotation={'clockwise'}
                marks={this.state.marks} labels={this.state.labels}
                progressBar={this.state.progressBar} pointer={this.state.pointer}
                spinner={this.state.spinner} dial={this.state.dial}
            />
        );
    }

}

export default App;