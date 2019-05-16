import * as React from 'react';
 


import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxMenu theme={'material-purple'} width={150} height={225} mode={'vertical'}>
                <ul>
                    <li>
                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/mailIcon.png'} /><span>Mail</span>
                    </li>
                    <li>
                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/calendarIcon.png'} /><span>Calendar</span>
                    </li>
                    <li>
                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/contactsIcon.png'} /><span>Contacts</span>
                    </li>
                    <li>
                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>
                            <span>Inbox</span>
                        </span>
                        <ul>
                            <li>
                                <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>jQWidgets</span>
                                <ul>
                                    <li>
                                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>Admin</span>
                                    </li>
                                    <li>
                                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>Corporate</span>
                                    </li>
                                    <li>
                                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>Finance</span>
                                    </li>
                                    <li>
                                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>Other</span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>Personal</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/recycle.png'} />
                        <span>Deleted Items</span>
                        <ul>
                            <li>
                                <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>Today</span>
                            </li>
                            <li>
                                <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>
                                    Last
                                    Week
            </span>
                            </li>
                            <li>
                                <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/folder.png'} /><span>
                                    Last
                                    Month
            </span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/settings.png'} /><span>Settings</span>
                        <ul style={{ width: '230px' }}>
                            <li>
                                <JqxCheckBox theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} checked={true} />
                                Enable Auto-Save
                            </li>
                            <li>
                                <JqxCheckBox theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} />
                                Send email as anonymous
                            </li>
                            <li>
                                <JqxCheckBox theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} />
                                Save sent emails
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/notesIcon.png'} /><span>Notes</span>
                    </li>
                    <li>
                        <img style={{ float: 'left', marginRight: '5px' }} src={'https://www.jqwidgets.com/react/images/favorites.png'} /><span>Favorites</span>
                    </li>
                </ul>
            </JqxMenu>
        );
    }
}

export default App;