import * as React from 'react';
 


import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxFormattedInput style={{ float: 'left' }}
                width={250} height={25} radix={'decimal'}
                value={10000} dropDown={true} rtl={true} spinButtons={true}/>
        );
    }
}

export default App;