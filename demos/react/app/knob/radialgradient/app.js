import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';
import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myNumberInput.on('change', (event) => {
            this.refs.myKnob.val(event.args.value);
        });
        this.refs.myKnob.on('change', (event) => {
            this.refs.myNumberInput.val(event.args.value);
        });
    }
    render() {
        let progressBar = {
            style: { fill: { color: '#00a4e1', gradientType: 'radial', gradientStops: [[0, 0.5], [100, 1]] } },
            size: '50%',
            offset: '50%',
            background: { fill: { color: '#FFFFFF', gradientType: 'linear', gradientStops: [[0, 0.5], [100, 1]] } }
        };

        let pointer = {
            type: 'line', style: { fill: '#00a4e1' }, size: '50%', offset: '50%', thickness: 0
        };

        return (
            <div>
                <JqxKnob ref='myKnob' style={{ width: 400, height: 400, position: 'relative' }}
                    min={0} max={100} value={10} startAngle={90} endAngle={450}
                    pointerGrabAction={'progressBar'} rotation={'clockwise'}
                    snapToStep={true} style={{ fill: 'transparent' }}
                    progressBar={progressBar} pointer={pointer} 
                />
                <JqxNumberInput ref='myNumberInput' className='inputField'
                    width={180} height={75} decimal={0} min={0} max={100}
                    decimalDigits={1} textAlign={'center'} symbol={'%'}
                    symbolPosition={'right'} inputMode={'simple'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
