import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.jqxSlider.focus();
    }
   render () {
        return (
            <div>
                
                <JqxSlider ref='jqxSlider' style={{ marginTop: 10 }}
                    width={300} ticksFrequency={1} mode={'fixed'}
                />

                <div style={{ fontFamily: 'Verdana', fontSize: 12, width: 400, marginLeft: 20, float: 'left' }}>
                    <ul>
                        <li><b>Tab</b> - Like other widgets, the jqxSlider widget receives focus by tabbing into it. Once focus is received, users will be able to use the keyboard to change the slider's value. A second tab will take the user out of the widget.</li>
                        <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous focusable element in the tab order.</li>
                        <li><b>Right Arrow</b> and <b>Up Arrow</b> - increase the value of the slider.</li>
                        <li><b>Left Arrow</b> and <b>Down Arrow</b> - decrease the value of the slider.</li>
                        <li><b>Home</b> - move to the minimum value of the slider.</li>
                        <li><b>End</b> - move to the maximum value of the slider.</li>
                    </ul>
                </div>
                

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
