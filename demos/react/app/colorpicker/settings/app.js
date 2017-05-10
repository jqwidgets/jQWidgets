import React from 'react';
import ReactDOM from 'react-dom';

import JqxColorPicker from '../../../jqwidgets-react/react_jqxcolorpicker.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myColorPicker.on('colorchange', (event) => {
            document.getElementById('colorLog').innerHTML = '<div>Color: #' + event.args.color.hex + '</div>';
        });

        this.refs.hueMode.on('change', (event) => {
            if (event.args.checked) {
                this.refs.myColorPicker.colorMode('hue');
            }
            else {
                this.refs.myColorPicker.colorMode('saturation');
            }
        });
    }
    render() {
        return (
            <div>
                <JqxColorPicker ref='myColorPicker' width={250} height={250} />
                <div style={{ fontSize: 13, fontFamily: 'Verdana', marginTop: 10 }}>
                    <div style={{ marginBottom: 5 }}>Color Modes</div>
                    <JqxRadioButton
                        width={180} height={25} checked={true}>
                        Saturation Color Mode
                    </JqxRadioButton>
                    <JqxRadioButton ref='hueMode'
                        width={180} height={25}>
                        Hue Color Mode
                    </JqxRadioButton>
                </div>
                <div style={{ fontFamily: 'Verdana', fontSize: 13 }} id='colorLog' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
