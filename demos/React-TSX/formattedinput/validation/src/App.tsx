import * as React from 'react';
 


import JqxFormattedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxformattedinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxFormattedInput
                width={250} height={25} radix={'decimal'} value={0}
                min={0} max={1000} spinButtons={true} />
        );
    }
}

export default App;