import * as React from 'react';
import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';

function App() {
    return (
        <JqxProgressBar theme="material-purple" width={300} height={30} value={50} rtl={true} />
    );
}

export default App;