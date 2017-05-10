import React from 'react';
import ReactDOM from 'react-dom';

import JqxFileUpload from '../../../jqwidgets-react/react_jqxfileupload.js';

class App extends React.Component {
    render() {
        return (
            <JqxFileUpload
                width={300} uploadUrl={'imageUpload.php'}
                fileInputName={'fileToUpload'} cancelTemplate={'danger'}
                browseTemplate={'success'} uploadTemplate={'primary'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
