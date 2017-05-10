import React from 'react';
import ReactDOM from 'react-dom';

import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
    render() {
        return (
            <div id='jqxWidget' style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>

                <div style={{ marginTop: 10 }}>Default</div>
                <JqxNumberInput ref='numericInput1'
                    width={250} height={25} spinButtons={true}
                />

                <div style={{ marginTop: 10 }}>Primary</div>
                <JqxNumberInput ref='numericInput2'
                    template={'primary'}
                    width={250} height={25} spinButtons={true}
                />

                <div style={{ marginTop: 10 }}>Success</div>
                <JqxNumberInput ref='numericInput3'
                    template={'success'}
                    width={250} height={25} spinButtons={true}
                />

                <div style={{ marginTop: 10 }}>Info</div>
                <JqxNumberInput ref='numericInput4'
                    template={'info'}
                    width={250} height={25} spinButtons={true}
                />

                <div style={{ marginTop: 10 }}>Warning</div>
                <JqxNumberInput ref='numericInput5'
                    template={'warning'}
                    width={250} height={25} spinButtons={true}
                />

                <div style={{ marginTop: 10 }}>Danger</div>
                <JqxNumberInput ref='numericInput6'
                    template={'danger'}
                    width={250} height={25} spinButtons={true}
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
