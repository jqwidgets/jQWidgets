import React from 'react';
import ReactDOM from 'react-dom';

import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.firstRadioButton.on('change', (event) => {
            this.clearLog();
            let log = document.getElementById('events');
            let checked = event.args.checked;
            if (checked)
            {
                log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
            } else
            {
                log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
            }
        });
        this.refs.secondRadioButton.on('change', (event) => {
            this.clearLog();
            let log = document.getElementById('events');
            let checked = event.args.checked;
            if (checked)
            {
                log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
            } else
            {
                log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
            }
        });
        this.refs.thirdRadioButton.on('change', (event) => {
            this.clearLog();
            let log = document.getElementById('events');
            let checked = event.args.checked;
            if (checked)
            {
                log.innerHTML += '<div><span>Checked: 3 Months Contract</span></div>';
            } else
            {
                log.innerHTML += '<div><span>Unchecked: 3 Months Contract</span></div>';
            }
        });
    }
    clearLog() {
        let log = document.getElementById('events').getElementsByTagName('span');
        if (log.length >= 2)
        {
            document.getElementById('events').innerHTML = '';
        }
    }
    render () {
        return (
            <div>
                <h3>
                    House Contract
                </h3>

                <JqxRadioButton ref='firstRadioButton'
                    width={250} height={25} checked={true}>
                    12 Months Contract
                </JqxRadioButton>

                <JqxRadioButton ref='secondRadioButton'
                    width={250} height={25}>
                    <span>6 Months Contract</span>
                </JqxRadioButton>

                <JqxRadioButton ref='thirdRadioButton'
                    width={250} height={25}>
                    <span>3 Months Contract</span>
                </JqxRadioButton>

                <JqxRadioButton
                    width={250} height={25} disabled={true}>
                    <span>1 Month Contract</span>
                </JqxRadioButton>

                <div style={{ marginTop: 10 }}>
                    <div>
                        Events:
                    </div>
                    <div id='events'>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
