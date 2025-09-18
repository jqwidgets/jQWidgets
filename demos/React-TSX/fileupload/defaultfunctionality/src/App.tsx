import * as React from 'react';
import JqxFileUpload from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload';

function App() {
    return (
        <JqxFileUpload
            theme="material-purple"
            width={300}
            uploadUrl="imageUpload.php"
            fileInputName="fileToUpload"
        />
    );
}

export default App;