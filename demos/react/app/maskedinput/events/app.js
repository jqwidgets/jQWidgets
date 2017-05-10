import React from 'react';
import ReactDOM from 'react-dom';

import JqxMaskedInput from '../../../jqwidgets-react/react_jqxmaskedinput.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myMaskedInput.on('change', (event) => {
            let value = this.refs.myMaskedInput.val();
            this.refs.myPanel.clearcontent();
            this.refs.myPanel.prepend('<div style="margin-top: 5px;">Value: ' + value + '</div>');
        });
    }
    render() {
        return (
            <div>
                <div style={{ fontSize: 13, fontFamily: 'Verdana', marginTop: 10 }}>
                    Phone Number
                </div>
                <JqxMaskedInput ref='myMaskedInput' style={{ marginTop: 3 }}
                    width={250} height={35} mask={'(###)###-####'}
                />
                <div style={{ marginLeft: 0, marginTop: 20 }}>
                    <div>
                        <span>Events:</span>
                        <JqxPanel ref='myPanel' style={{ border: 'none' }}
                            width={300} height={250}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
