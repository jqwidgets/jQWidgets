import * as React from 'react';
 


import JqxMaskedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmaskedinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana'}}>
                <div style={{ marginTop: '10px' }}>Numeric</div>
                <JqxMaskedInput theme={'material-purple'} width={250} height={25} rtl={true} />

                <div style={{ marginTop: '10px' }}>Zip Code</div>
                <JqxMaskedInput theme={'material-purple'} width={250} height={25} mask={'#####-####'} rtl={true} />

                <div style={{ marginTop: '10px' }}>SSN</div>
                <JqxMaskedInput theme={'material-purple'} width={250} height={25} mask={'###-##-####'} rtl={true} />

                <div style={{ marginTop: '10px' }}>Date</div>
                <JqxMaskedInput theme={'material-purple'} width={250} height={25} mask={'##/##/####'} rtl={true} />
            </div>
        );
    }
}

export default App;