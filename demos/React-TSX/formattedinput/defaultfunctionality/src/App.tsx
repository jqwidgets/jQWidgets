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
                value={15} spinButtons={true} dropDown={true} />
        );
    }
}

export default App;