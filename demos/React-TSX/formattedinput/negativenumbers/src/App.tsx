import * as React from 'react';
 


import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxFormattedInput
                width={250} height={25} radix={'decimal'}
                spinButtons={true} dropDown={true} value={-10} />
        );
    }
}

export default App;