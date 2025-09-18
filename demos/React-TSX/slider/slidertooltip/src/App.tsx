import * as React from 'react';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

function App() {
    return (
        <div>
            <br /><br />
            <JqxSlider theme="material-purple" tooltip={true} mode="fixed" />
        </div>
    );
}

export default App;