import * as React from 'react';
 


import './App.css';

import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';

class App extends React.PureComponent<{}, IKnobProps> {

    private myKnob = React.createRef<JqxKnob>();
    private myNumberInput = React.createRef<JqxNumberInput>();

    constructor(props: {}) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onValueChanged = this.onValueChanged.bind(this);

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
            <div>
                <JqxKnob ref={this.myKnob} onChange={this.onChange}
                    value={60} min={0} max={100} startAngle={120}
                    endAngle={420} snapToStep={true} rotation={"clockwise"}
                    styles={this.state.styles} marks={this.state.marks} labels={this.state.labels}
                    pointer={this.state.pointer} progressBar={this.state.progressBar}
                />
   
                <JqxNumberInput theme={'material-purple'} ref={this.myNumberInput} onValueChanged={this.onValueChanged}
                    width={60} height={40} decimal={60} min={0} max={100}
                    textAlign={"center"} decimalDigits={1} inputMode={"simple"}
                />
            </div>
        );
    }


    private onChange(event: any): any {
        this.myNumberInput.current!.val(event.args.value);
    }

    private onValueChanged(): any {
        const newValue = this.myNumberInput.current!.val();
        this.myKnob.current!.val(newValue);
    }
}

export default App;