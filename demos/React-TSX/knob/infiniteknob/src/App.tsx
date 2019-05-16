import * as React from 'react';
 


import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class App extends React.PureComponent<{}, IKnobProps> {

    private min = 0;
    private max = 0;

    private oldValue = 0;
    private newValue = 0;

    constructor(props: {}) {
        super(props);

        this.myKnobOnChange = this.myKnobOnChange.bind(this);

        const styles = {
            fill: {
                color: '#fefefe',
                gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                gradientType: 'linear',

            },
            stroke: '#dfe3e9', strokeWidth: 3
        };
        const marks = {
            colorProgress: '#333', colorRemaining: '#333',
            majorInterval: 10, majorSize: '9%', minorInterval: 2,
            offset: '71%', size: '6%', thickness: 1, type: 'line'
        };
        const labels = {
            offset: '88%', step: 10
        };
        const progressBar = {
            background: {
                fill: {
                    color: '#ff8b1e',
                    gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                    gradientType: 'linear'

                },
                stroke: '#ff8b1e'
            },
            offset: '60%', size: '9%',
            style: {
                fill: {
                    color: '#00a644',
                    gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                    gradientType: 'linear'

                },
                stroke: '#00a644'
            }
        };
        const pointer = {
            offset: '38%', size: '5%',
            style: { fill: '#ef6100', stroke: '#ef6100' },
            thickness: 20, type: 'circle'
        };
        const spinner = {
            innerRadius: '45%',
            marks: {
                colorProgress: '#fff',
                colorRemaining: '#fff',
                majorInterval: 10,
                majorSize: '14%',
                minorInterval: 10,
                offset: '46%',
                size: '14%',
                thickness: 2,
                type: 'line'
            },
            outerRadius: '60%',
            style: {
                fill: {
                    color: '#00a4e1',
                    gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                    gradientType: 'linear'

                },
                stroke: '#00a4e1'
            },
        };
        const dial = {
            innerRadius: '0%',
            outerRadius: '45%',
            style: {
                fill: {
                    color: '#dfe3e9',
                    gradientStops: [[0, 0.9], [50, 1], [100, 1]],
                    gradientType: 'linearHorizontal'

                },
                stroke: '#dfe3e9'
            },
        };

        this.state = {
            dial,
            labels,
            marks,
            max: 100,
            min: 0,
            pointer,
            progressBar,
            spinner,
            styles,
            value: 60
        }
    }

    public render() {
        return (
            <JqxKnob onChange={this.myKnobOnChange}
                value={this.state.value} min={this.state.min} max={this.state.max}
                startAngle={150} endAngle={510} styles={this.state.styles}
                snapToStep={true} rotation={'clockwise'}
                marks={this.state.marks} labels={this.state.labels}
                progressBar={this.state.progressBar} pointer={this.state.pointer}
                spinner={this.state.spinner} dial={this.state.dial}
            />
        );
    }

    private myKnobOnChange(event: any): void {
        this.oldValue = this.newValue;
        this.newValue = event.args.value;

        if (this.newValue >= this.min &&
            this.newValue <= this.min + 10 &&
            this.oldValue <= this.max &&
            this.oldValue >= this.max - 10) {

            this.min = this.max;
            this.max += 100;

            this.setState({
                max: this.max,
                min: this.min,
                value: this.max
            });
        }

        if (this.newValue >= this.max - 10 &&
            this.newValue <= this.max &&
            this.oldValue >= this.min &&
            this.oldValue <= this.min + 10) {

            this.max = this.min;
            this.min -= 100;

            this.setState({
                max: this.max,
                min: this.min,
                value: this.min
            });
        }
    }

}

export default App;