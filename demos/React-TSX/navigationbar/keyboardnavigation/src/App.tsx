import * as React from 'react';
 


import JqxNavigationBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnavigationbar';

class App extends React.PureComponent<{}> {

    private myNavigationBar = React.createRef<JqxNavigationBar>();

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        this.myNavigationBar.current!.focus();
    }

    public render() {
        return (
            <div>
                <JqxNavigationBar theme={'material-purple'} ref={this.myNavigationBar}
                    width={250} expandMode={'multiple'} expandedIndexes={[0]}>
                <div>
                    <div style={{ marginTop: '2px' }}>
                        <div style={{ float: 'left' }}>
                            <img alt={'Mail'} src={'https://www.jqwidgets.com/react/images/mailIcon.png'} />
                    </div>
                        <div style={{ marginLeft: '4px', float: 'left' }}>
                            Mail
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Contacts</a></li>
                        <li><a href='#'>Mails</a></li>
                        <li><a href='#'>Notes</a></li>
                    </ul>
                </div>
                <div>
                    <div style={{ marginTop: '2px' }}>
                        <div style={{ float: 'left' }}>
                            <img alt={'Mail'} src={'https://www.jqwidgets.com/react/images/contactsIcon.png'} />
                        </div>
                        <div style={{ marginLeft: '4px', float: 'left' }}>
                            Contacts
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Business Cards</a></li>
                        <li><a href='#'>Address Cards</a></li>
                        <li><a href='#'>Detailed Address Cards</a></li>
                        <li><a href='#'>Phone List</a></li>
                    </ul>
                </div>
                <div>
                    <div style={{ marginTop: '2px' }}>
                        <div style={{ float: 'left' }}>
                            <img alt={'Mail'} src={'https://www.jqwidgets.com/react/images/tasksIcon.png'} />
                        </div>
                        <div style={{ marginLeft: '4px', float: 'left' }}>
                            Tasks
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Simple List</a></li>
                        <li><a href='#'>Detailed List</a></li>
                        <li><a href='#'>Active Tasks</a></li>
                        <li><a href='#'>Phone List</a></li>
                    </ul>
                </div>
                <div>
                    <div style={{ marginTop: '2px' }}>
                        <div style={{ float: 'left' }}>
                            <img alt={'Mail'} src={'https://www.jqwidgets.com/react/images/notesIcon.png'} />
                        </div>
                        <div style={{ marginLeft: '4px', float: 'left' }}>
                            Notes
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Icons</a></li>
                        <li><a href='#'>Notes List</a></li>
                        <li><a href='#'>Last Seven Days</a></li>
                    </ul>
                </div>
                </JqxNavigationBar>
                <div style={{ fontFamily: 'Verdana', fontSize: '12px', width: '400px', marginLeft: '20px', float: 'left' }}>
                    <ul>
                        <li><b>Tab</b> - Like other widgets, the jqxNavigationBar widget receives focus by tabbing into it. Once focus is received, users will be able to use the keyboard to change the jqxNavigationBar's selection. A second tab will take the user to the next focusable element in the tab order.</li>
                        <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous focusable element in the tab order.</li>
                        <li><b>Up or Left</b> arrow keys - select previous item.</li>
                        <li><b>Down or Right</b> arrow keys - select next item.</li>
                        <li><b>Home/End</b> keys - navigate to the first or last item.</li>
                        <li><b>Enter</b> key - Expand the focused item's state when the jqxNavigationBar's "expandMode" property is "single" or "singleFitHeight". Toggle the focused item's state when the expand mode is "toggle" or "multiple"</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;