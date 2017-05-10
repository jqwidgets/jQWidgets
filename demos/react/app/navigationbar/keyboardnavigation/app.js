import React from 'react';
import ReactDOM from 'react-dom';

import JqxNavigationBar from '../../../jqwidgets-react/react_jqxnavigationbar.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.jqxNavigationBar.focus();
    }
    render() {
        return (
            <div>
                <JqxNavigationBar ref='jqxNavigationBar' style={{ float: 'left' }}
                    width={250}
                    expandedIndexes={['0']}
                    expandMode={'multiple'}
                >
                    <div>
                        <div style={{ marginTop: 2 }}>
                            <div style={{ float: 'left' }}>
                                <img alt='Mail' src='../../images/mailIcon.png' /></div>
                            <div style={{ float: 'left', marginTop: 4 }}>
                                Mail</div>
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
                        <div style={{ marginTop: 2 }}>
                            <div style={{ float: 'left' }}>
                                <img alt='Mail' src='../../images/contactsIcon.png' /></div>
                            <div style={{ float: 'left', marginTop: 4 }}>
                                Contacts</div>
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
                        <div style={{ marginTop: 2 }}>
                            <div style={{ float: 'left' }}>
                                <img alt='Mail' src='../../images/tasksIcon.png' /></div>
                            <div style={{ float: 'left', marginTop: 4 }}>
                                Tasks</div>
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
                        <div style={{ marginTop: 2 }}>
                            <div style={{ float: 'left' }}>
                                <img alt='Mail' src='../../images/notesIcon.png' /></div>
                            <div style={{ float: 'left', marginTop: 4 }}>
                                Notes</div>
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

                <div style={{ fontFamily: 'Verdana', fontSize: 12, width: 400, float: 'left', marginLeft: 20 }}>
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
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
