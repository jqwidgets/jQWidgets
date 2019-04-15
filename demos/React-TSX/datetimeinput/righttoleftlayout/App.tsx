import * as React from 'react';
 


import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <JqxDateTimeInput theme={'material-purple'}
                    width={250} height={30} culture={'he-IL'} rtl={true} />
            </div>
        );
    }
}

export default App;