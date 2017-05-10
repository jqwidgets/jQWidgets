import React from 'react';
import ReactDOM from 'react-dom';

import JqxNavBar from '../../../jqwidgets-react/react_jqxnavbar.js';

class App extends React.Component {
    render() {
        return (
            <JqxNavBar height={'auto'} selection={false}>
                <ul>
                    <li>Minimized NavBar with Vertical Layout
                        <JqxNavBar
                            height={120} selectedItem={0} minimized={true}
                            minimizedHeight={40} orientation={'vertical'}
                            minimizedTitle={'NavBar 1'}
                        >
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </JqxNavBar>
                    </li>
                    <li>Minimized NavBar with Horizontal Layout
                        <JqxNavBar
                            height={120} selectedItem={0} minimized={true}
                            minimizedHeight={40} minimizedTitle={'NavBar 2'}
                        >
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </JqxNavBar>
                    </li>
                </ul>
            </JqxNavBar>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
