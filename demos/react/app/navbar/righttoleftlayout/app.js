import React from 'react';
import ReactDOM from 'react-dom';

import JqxNavBar from '../../../jqwidgets-react/react_jqxnavbar.js';

class App extends React.Component {
    render() {
        return (
            <JqxNavBar height={40} selectedItem={0} rtl={true}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </JqxNavBar>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
