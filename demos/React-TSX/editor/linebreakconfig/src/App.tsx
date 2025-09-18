import * as React from 'react';
import JqxEditor from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

function App() {
    return (
        <JqxEditor
            theme="material-purple"
            // @ts-ignore
            width="100%"
            height={400}
            lineBreak="div"
        />
    );
}

export default App;