import * as React from 'react';
 


import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
                <div>The input is restricted from 0 to 1000</div>
                <div style={{ marginTop: '10px' }}>
                    Number
                </div>
                <div style={{ marginTop: '3px' }}>
                    <JqxNumberInput theme={'material-purple'} width={250} height={25} min={0} max={1000} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    Currency
                </div>
                <div style={{ marginTop: '3px' }}>
                    <JqxNumberInput theme={'material-purple'} width={250} height={25} min={0} max={1000} symbol={'$'} />

                </div>
                <div style={{ marginTop: '10px' }}>
                    Custom Validation Message
                </div>
                <div style={{ marginTop: '3px' }}>
                    <JqxNumberInput theme={'material-purple'} width={250} height={25} min={0} max={1000} value={0} />
                </div>
            </div>
        );
    }
}

export default App;