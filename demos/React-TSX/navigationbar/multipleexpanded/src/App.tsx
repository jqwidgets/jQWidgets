import * as React from 'react';
 


import JqxNavigationBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnavigationbar';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxNavigationBar theme={'material-purple'} width={300} expandMode={'multiple'} expandedIndexes={[2, 3]}>
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
        );
    }
}

export default App;