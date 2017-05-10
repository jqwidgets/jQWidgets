import React from 'react';
import ReactDOM from 'react-dom';

import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';

class App extends React.Component {
    render() {
        let source = [
            {
                html: "<img src='../../images/mailIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Mail</span>", items: [
                    { html: "<img src='../../images/calendarIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Calendar</span>" },
                    { html: "<img src='../../images/contactsIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Contacts</span>" }
                ]
            },
            {
                html: "<img src='../../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Inbox</span>", items: [
                    { html: "<img src='../../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Admin</span>" },
                    { html: "<img src='../../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Corporate</span>" },
                    { html: "<img src='../../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Finance</span>" },
                    { html: "<img src='../../images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Other</span>" }]
            },
            { html: "<img src='../../images/recycle.png'/><span style='position: relative; left: 3px; top: -2px;'>Deleted Items</span>" },
            { html: "<img src='../../images/notesIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Notes</span>" },
            { html: "<img src='../../images/settings.png'/><span style='position: relative; left: 3px; top: -2px;'>Settings</span>" },
            { html: "<img src='../../images/favorites.png'/><span style='position: relative; left: 3px; top: -2px;'>Favorites</span>" }
        ];
        return (
            <JqxMenu
                width={180} height={180} source={source}
                mode={'vertical'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
