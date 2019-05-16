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
            colorProgress: '#16a15d', colorRemaining: '#333',
            drawAboveProgressBar: true,
            majorInterval: 20, majorSize: '2%', minorInterval: 20,
            offset: '68%', size: '2%', thickness: 1, type: 'circle'
        };
        const labels = {
            formatFunction: (label: string): string | number => {
                switch (label) {
                    case '0':
                        return 'Low';
                    case '20':
                        return 'Defrost';
                    case '40':
                        return 'M.Low';
                    case '60':
                        return 'Med';
                    case '80':
                        return 'M.High';
                    default:
                        return 'High';
                }
            },
            offset: '80%', step: 20
        };
        const progressBar = {
            background: { fill: '#eeeeee' },
            offset: '56%',
            ranges: [
                { fill: '#12b24e', endValue: 20, startValue: 0 },
                { fill: '#2ec544', endValue: 40, startValue: 20 },
                { fill: '#ffff3b', endValue: 60, startValue: 40 },
                { fill: '#f4a620', endValue: 80, startValue: 60 },
                { fill: '#f2121c', endValue: 100, startValue: 80 }
            ],
            size: '7%',
            style: { fill: '#16a15d', opacity: 0.4 }
        };
        const pointer = {
            offset: '0%',
            size: '63%',
            style: { fill: '#666' },
            thickness: 7,
            type: 'arrow'
        };
        const spinner = {
            endAngle: 360,
            innerRadius: '0%',
            outerRadius: '3%',
            startAngle: 0,
            style: { fill: '#666' }
        };
        const dial = {
            endAngle: 360,
            innerRadius: '68%',
            outerRadius: '92%',
            startAngle: 0,
            style: { fill: '#eee' }
        };

        this.state = {
            dial,
            labels,
            marks,
            pointer,
            progressBar,
            spinner,
            styles
        }
    }

    public render() {
        return (
            <JqxKnob
                value={0} min={0} max={100} step={20}
                startAngle={120} endAngle={480}
                dragStartAngle={120} dragEndAngle={420}
                snapToStep={true} rotation={'clockwise'}
                styles={this.state.styles}
                marks={this.state.marks} labels={this.state.labels}
                progressBar={this.state.progressBar} pointer={this.state.pointer}
                spinner={this.state.spinner} dial={this.state.dial}
            />
        );
    }

}

export default App;