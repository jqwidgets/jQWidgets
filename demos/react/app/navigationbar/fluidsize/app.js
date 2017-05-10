import React from 'react';
import ReactDOM from 'react-dom';

import JqxNavigationBar from '../../../jqwidgets-react/react_jqxnavigationbar.js';

class App extends React.Component {
    render() {
        return (
            <JqxNavigationBar ref='jqxNavigationBar'
                width={'100%'}
                height={'100%'}
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
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
