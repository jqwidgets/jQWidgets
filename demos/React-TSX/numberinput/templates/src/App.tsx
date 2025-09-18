import * as React from 'react';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';

function App() {
    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <div style={{ marginTop: '10px' }}>
                Default
            </div>
            <div style={{ marginTop: '3px' }}>
                <JqxNumberInput theme="material-purple" width={250} height={25} spinButtons={true} />
            </div>
            <div style={{ marginTop: '10px' }}>
                Primary
            </div>
            <div style={{ marginTop: '3px' }}>
                <JqxNumberInput theme="material-purple" width={250} height={25} spinButtons={true} template="primary" />
            </div>
            <div style={{ marginTop: '10px' }}>
                Success
            </div>
            <div style={{ marginTop: '3px' }}>
                <JqxNumberInput theme="material-purple" width={250} height={25} spinButtons={true} template="success" />
            </div>
            <div style={{ marginTop: '10px' }}>
                Info
            </div>
            <div style={{ marginTop: '3px' }}>
                <JqxNumberInput theme="material-purple" width={250} height={25} spinButtons={true} template="info" />
            </div>
            <div style={{ marginTop: '10px' }}>
                Warning
            </div>
            <div style={{ marginTop: '3px' }}>
                <JqxNumberInput theme="material-purple" width={250} height={25} spinButtons={true} template="warning" />
            </div>
            <div style={{ marginTop: '10px' }}>
                Danger
            </div>
            <div style={{ marginTop: '3px' }}>
                <JqxNumberInput theme="material-purple" width={250} height={25} spinButtons={true} template="danger" />
            </div>
        </div>
    );
}

export default App;