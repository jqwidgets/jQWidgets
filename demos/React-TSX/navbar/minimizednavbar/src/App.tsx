import * as React from 'react';
 


import JqxNavBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnavbar';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxNavBar theme={'material-purple'} height={'auto'} selection={false}>
                <ul>
                    <li>
                        Minimized NavBar with Vertical Layout
                        <JqxNavBar theme={'material-purple'} minimizedTitle={'NavBar 1'} minimized={true} minimizedHeight={40}
                            height={120} orientation={'vertical'} selectedItem={0}>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </JqxNavBar>
                    </li>
                    <li>
                        Minimized NavBar with Horizontal Layout
                        <JqxNavBar theme={'material-purple'} minimizedTitle={'NavBar 2'} minimized={true} minimizedHeight={40}
                            height={120} selectedItem={0}>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </JqxNavBar>
                    </li>
                </ul>
            </JqxNavBar>
        );
    }
}

export default App;