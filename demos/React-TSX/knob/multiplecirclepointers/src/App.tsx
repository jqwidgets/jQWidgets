import * as React from 'react';
 


import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class App extends React.PureComponent<{}, IKnobProps> {

    constructor(props: {}) {
        super(props);

        this.myKnobOnChange = this.myKnobOnChange.bind(this);

        const styles = {
            fill: '#ebeced'
        };
        const marks = {
            colorProgress: '#66707e', colorRemaining: '#333',
            majorInterval: 10, majorSize: '9%', minorInterval: 2,
            offset: '71%', size: '6%', style: 'line', thickness: 1
        };
        const labels = {
            offset: '88%', step: 10
        };
        const progressBar = {
            background: { fill: '#a2da39', stroke: '#a2da39', strokeWidth: 0 },
            offset: '58%', size: '9%',
            style: [
                { fill: '#66707e', stroke: '#66707e', strokeWidth: 0 },
                { fill: '#66707e', stroke: '#66707e', strokeWidth: 0 }
            ],
        };
        const pointer = [
            {
                offset: '38%', size: '5%',
                style: { fill: '#a2da39', stroke: '#a2da39' },
                thickness: 20, type: 'circle'
            },
            {
                offset: '38%', size: '5%',
                style: { fill: '#a2da39', stroke: '#a2da39' },
                thickness: 20, type: 'circle'
            }
        ];
        const spinner = {
            innerRadius: '0%',
            marks: {
                colorProgress: '#a2da39',
                colorRemaining: '#a2da39',
                majorInterval: 10,
                majorSize: '1%',
                minorInterval: 10,
                offset: '55%',
                size: '1%',
                thickness: 3,
                type: 'circle'
            },
            outerRadius: '58%',
            style: { fill: '#66707e', stroke: '#66707e' }
        };

        this.state = {
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
            <div>

                <JqxKnob onChange={this.myKnobOnChange}
                    value={[60, 80]} min={0} max={100}
                    startAngle={150} endAngle={510}
                    snapToStep={true} rotation={'clockwise'}
                    styles={this.state.styles}
                    marks={this.state.marks} labels={this.state.labels}
                    progressBar={this.state.progressBar} pointer={this.state.pointer}
                    spinner={this.state.spinner} changing={this.changing}
                />

                <div id="log" />
            </div>
        );
    }

    private changing(oldValues: number[], newValues: number[]): boolean {
        const range = newValues[1] - newValues[0];
        return range > 10 || range < 90;
    };

    private myKnobOnChange(event: any): void {
        document.querySelector('#log')!.innerHTML = 'Values: ' + event.args.value;
    };

}

export default App;