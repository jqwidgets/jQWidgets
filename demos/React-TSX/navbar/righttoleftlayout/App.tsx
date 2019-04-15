import * as React from 'react';
 


import JqxNavBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnavbar';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxNavBar theme={'material-purple'} height={40} selectedItem={0} rtl={true}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </JqxNavBar>
        );
    }
}

export default App;