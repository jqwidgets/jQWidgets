import * as React from 'react';
 


import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxNumberInput theme={'material-purple'} width={'50%'} height={35} spinButtons={true} />
        );
    }
}

export default App;