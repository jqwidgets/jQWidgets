import * as React from 'react';
 


import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
                <div style={{ marginTop: '10px' }}>
                    Number
                </div>
                <div style={{ marginTop: '3px' }}>
                    <JqxNumberInput theme={'material-purple'} width={250} height={25} inputMode={'simple'} spinButtons={true} rtl={true} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    Percentage
                </div>
                <div style={{ marginTop: '10px' }}>
                    <JqxNumberInput theme={'material-purple'}
                        width={250} height={25} symbol={'%'} symbolPosition={'right'}
                        digits={3} spinButtons={true} rtl={true} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    Currency
                </div>
                <div style={{ marginTop: '10px' }}>
                    <JqxNumberInput theme={'material-purple'} width={250} height={25} symbol={'%'}
                        spinButtons={true} rtl={true} />
                </div>
            </div>
        );
    }
}

export default App;