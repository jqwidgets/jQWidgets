import * as React from 'react';
 


import './App.css';

import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class App extends React.PureComponent<{}, IKnobProps> {

    private myKnob = React.createRef<JqxKnob>();
    private myInput = React.createRef<JqxInput>();

    constructor(props: {}) {
        super(props);

        this.myKnobOnChange = this.myKnobOnChange.bind(this);
        this.myInputOnChange = this.myInputOnChange.bind(this);

        const styles = {
            fill: '#fff'
        };
        const progressBar = {
            background: { fill: '#eeeeee' },
            offset: '70%',
            size: '30%',
            style: { fill: '#00a644' }
        };
        const pointer = {
            offset: '70%', size: '30%',
            style: { fill: '#00a644' },
            thickness: 20, type: 'line'
        };
        const dial = {
            endAngle: 360,
            innerRadius: '68%',
            outerRadius: '92%',
            startAngle: 0,
            style: { fill: '#fff' }
        };

        this.state = {
            dial,
            pointer,
            progressBar,
            styles
        }
    }

    public render() {
        return (
            <div>
                <JqxKnob ref={this.myKnob} onChange={this.myKnobOnChange}
                    value={30} min={0} max={100}
                    startAngle={270} endAngle={630}
                    snapToStep={true} rotation={'clockwise'}
                    styles={this.state.styles} progressBar={this.state.progressBar}
                    pointer={this.state.pointer} dial={this.state.dial}
                />

                <JqxInput theme={'material-purple'} ref={this.myInput} onChange={this.myInputOnChange} value={30} />
            </div>
        );
    }

    private myKnobOnChange(event: any): void {
        this.myInput.current!.val(event.args.value);
    }

    private myInputOnChange(event: any): void {
        this.myKnob.current!.val(event.target.value);
    }

}

export default App;