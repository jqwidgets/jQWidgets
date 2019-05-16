import * as React from 'react';
 


import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpasswordinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);    
    }

    public render() {
        return (
            <JqxPasswordInput theme={'material-purple'} width={'50%'} height={25} placeHolder={'Enter password'} />
        );
    }
}

export default App;