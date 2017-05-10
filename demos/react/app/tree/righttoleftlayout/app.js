import React from 'react';
import ReactDOM from 'react-dom';

import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';

class App extends React.Component {
    render () {
        // Create jqxTree
        let source = [
            { icon: '../../images/mailIcon.png', label: 'Mail', expanded: true, items: [
                { icon: '../../images/calendarIcon.png', label: 'Calendar' },
                { icon: '../../images/contactsIcon.png', label: 'Contacts', selected: true }
            ]
            },
            { icon: '../../images/folder.png', label: 'Inbox', expanded: true, items: [
               { icon: '../../images/folder.png', label: 'Admin' },
               { icon: '../../images/folder.png', label: 'Corporate' },
               { icon: '../../images/folder.png', label: 'Finance' },
               { icon: '../../images/folder.png', label: 'Other' },
            ]
            },
            { icon: '../../images/recycle.png', label: 'Deleted Items' },
            { icon: '../../images/notesIcon.png', label: 'Notes' },
            { iconsize: 14, icon: '../../images/settings.png', label: 'Settings' },
            { icon: '../../images/favorites.png', label: 'Favorites' }, 
        ];
        return (
            <JqxTree ref='myTree' style={{ marginLeft: 60, float: 'left' }}
                width={250} height={350} source={source} rtl={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
