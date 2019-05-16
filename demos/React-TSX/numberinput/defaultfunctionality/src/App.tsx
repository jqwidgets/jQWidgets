import * as React from 'react';
 


import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div style={{ marginTop: '10px' }}>
                    Number
                </div>
                <JqxNumberInput theme={'material-purple'}
                    width={250} height={25} spinButtons={true} />
                <div style={{ marginTop: '10px' }}>
                    Percentage
                </div>
                <JqxNumberInput theme={'material-purple'}
                    width={250} height={25} symbolPosition={'right'}
                    symbol={'%'} spinButtons={true} digits={3} />
                <div style={{ marginTop: '10px' }}>
                    Currency
                </div>
                <JqxNumberInput theme={'material-purple'}
                    width={250} height={25} symbol={'$'} spinButtons={true} />

                <div style={{ marginTop: '10px' }}>
                    Disabled
                </div>
                <JqxNumberInput theme={'material-purple'}
                    width={250} height={25} disabled={true} spinButtons={true} />
            </div>
        );
    }  
}

export default App;