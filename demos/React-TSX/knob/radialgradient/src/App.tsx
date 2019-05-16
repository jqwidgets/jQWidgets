import * as React from 'react';
 


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
            fill: 'transparent'
        };
        const progressBar = {
            background: {
                fill: {
                    color: '#FFFFFF',
                    gradientStops: [[0, 0.5], [100, 1]],
                    gradientType: 'linear'
                }
            },
            offset: '50%',
            size: '50%',
            style: {
                fill: {
                    color: '#00a4e1',
                    gradientStops: [[0, 0.5], [100, 1]],
                    gradientType: 'radial'
                }
            }
        };
        const pointer = {
            offset: '50%', size: '50%',
            style: { fill: '#00a4e1' },
            thickness: 0, type: 'line'
        };

        this.state = {
            pointer,
            progressBar,
            styles
        }
    }

    public render() {
        return (
            <div>
                <JqxKnob ref={this.myKnob} onChange={this.myKnobOnChange}
                    value={10} min={0} max={100}
                    startAngle={90} endAngle={450}
                    snapToStep={true} rotation={'clockwise'}
                    styles={this.state.styles} progressBar={this.state.progressBar}
                    pointer={this.state.pointer} pointerGrabAction={'progressBar'}
                />

                <JqxInput theme={'material-purple'} ref={this.myInput} onChange={this.myInputOnChange} value={10} />
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