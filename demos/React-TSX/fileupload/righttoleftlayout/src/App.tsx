import * as React from 'react';
 


import JqxFileUpload from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxFileUpload theme={'material-purple'}
                width={300} uploadUrl={'imageUpload.php'} fileInputName={'fileToUpload'} rtl={true} />
        );
    }
}

export default App;