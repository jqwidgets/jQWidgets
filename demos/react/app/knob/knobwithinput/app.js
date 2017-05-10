import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myKnob.on('change', (event) => {
            if (event.target.nodeName === 'INPUT')
                return;
            this.refs.myInput.val(event.args.value);
        });
        this.refs.myInput.on('change', (event) => {
            this.refs.myKnob.val(this.refs.myInput.val());
        });
    }
    render() {
        let progressBar = {
            style: { fill: '#00a644' },
            background: { fill: '#eeeeee' },
            size: '30%',
            offset: '70%'
        };

        let pointer = {
            type: 'line',
            style: { fill: '#00a644' },
            size: '30%',
            offset: '70%',
            thickness: 20
        };

        let dial = {
            style: {
                fill: '#fff'
            },
            innerRadius: '68%',
            outerRadius: '92%',
            startAngle: 0,
            endAngle: 360
        };

        return (
            <div>
                <JqxKnob ref='myKnob' style={{ width: 400, height: 400, border: 'none' }}
                    min={0} max={100} value={30}
                    startAngle={270} endAngle={630} rotation={'clockwise'}
                    style={{ fill: '#fff' }} progressBar={progressBar} pointer={pointer}
                />
                <JqxInput ref='myInput' className='input' value={30} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
