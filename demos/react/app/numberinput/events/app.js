import React from 'react';
import ReactDOM from 'react-dom';

import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.numericInput.on('change', (event) => {
            let value = event.args.value;
            this.refs.Events.clearcontent();
            this.refs.Events.prepend('<div style="margin-top: 5px;">Value: ' + value + '</div>');
        });

        this.refs.numericInput.on('textchanged', (event) => {
            let text = event.args.text;
            this.refs.Events.prepend('<div style="margin-top: 5px;">Text: ' + text + '</div>');
        });
    }
    render() {
        return (
            <div id='jqxWidget'>

                <div>
                    <div style={{ marginTop: 10 }}>Number</div>
                    <JqxNumberInput ref='numericInput'
                        width={250} height={25}
                        spinButtons={true}
                    />
                </div>

                <div style={{ marginLeft: 0, marginTop: 20 }}>
                    <span>
                        Events:</span>
                    <JqxPanel ref='Events' style={{ border: 'none' }}
                        width={300} height={250}
                    />
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
