import React from 'react';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

const App = () => {
    return (
        <JqxSplitter
            theme="material-purple"
            // @ts-ignore
            width={850}
            height={400}
            panels={[{ size: 300 }]}
        >
            <div>
                Panel 1
            </div>
            <div>
                Panel 2
            </div>
        </JqxSplitter>
    );
};

export default App;