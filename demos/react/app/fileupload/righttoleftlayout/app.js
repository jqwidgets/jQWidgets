import React from 'react';
import ReactDOM from 'react-dom';

import JqxFileUpload from '../../../jqwidgets-react/react_jqxfileupload.js';

class App extends React.Component {
    render() {
        return (
            <JqxFileUpload
                width={300} uploadUrl={'upload.php'}
                fileInputName={'fileToUpload'} rtl={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
