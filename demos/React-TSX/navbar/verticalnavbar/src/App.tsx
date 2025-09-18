import * as React from 'react';
import JqxNavBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnavbar';

function App() {
    return (
        <JqxNavBar theme="material-purple" orientation="vertical" height={120} selectedItem={0}>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </JqxNavBar>
    );
}

export default App;