import * as React from 'react';
 


import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class App extends React.PureComponent<{}, IKnobProps> {

    constructor(props: {}) {
        super(props);

        const marks = {
            colorProgress: '#17a25d',
            colorRemaining: '#333',
            drawAboveProgressBar: true,
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
            offset: '88%', step: 20
        };
        const progressBar = {
            offset: '0%',
            size: '80%'
        };
        const pointer = {
            offset: '0%', size: '70%',
            style: { fill: "#ff6126", stroke: "#333" },
            thickness: 4, type: 'arrow'
        };
        const spinner = {
            innerRadius: '35%',
            outerRadius: '70%',
            style: { fill: '#17a25d', stroke: '#17a25d' }
        };

        this.state = {
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
                value={-100} min={-100} max={100} step={0.5}
                startAngle={200} endAngle={340}
                dragStartAngle={200} dragEndAngle={340}
                snapToStep={true} rotation={'clockwise'}
                marks={this.state.marks} labels={this.state.labels}
                progressBar={this.state.progressBar} pointer={this.state.pointer}
                spinner={this.state.spinner}
            />
        );
    }

}

export default App;