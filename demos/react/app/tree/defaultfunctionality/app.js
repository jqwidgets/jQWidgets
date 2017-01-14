import React from 'react';
import ReactDOM from 'react-dom';

import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTree.selectItem(null);
    }
    render () {
        let source = [
            { icon: "../../../images/mailIcon.png", label: "Mail", expanded: true, items:
                [
                    { icon: "../../../images/calendarIcon.png", label: "Calendar" },
                    { icon: "../../../images/contactsIcon.png", label: "Contacts", selected: true }
                ]
            },
            { icon: "../../../images/folder.png", label: "Inbox", expanded: true, items:
                [
                    { icon: "../../../images/folder.png", label: "Admin" },
                    { icon: "../../../images/folder.png", label: "Corporate" },
                    { icon: "../../../images/folder.png", label: "Finance" },
                    { icon: "../../../images/folder.png", label: "Other" }
                ]
            },
            { icon: "../../../images/recycle.png", label: "Deleted Items" },
            { icon: "../../../images/notesIcon.png", label: "Notes" },
            { iconsize: 14, icon: "../../../images/settings.png", label: "Settings" },
            { icon: "../../../images/favorites.png", label: "Favorites" }
        ];
        return (
            <JqxExpander
                width={300} height={370}
                showArrow={false} toggleMode={'none'}
            >
                <div>Folders</div>
                <div style={{ overflow: 'hidden' }}>
                    <JqxTree ref='myTree'
                      width={'100%'} height={'100%'} source={source}
                    />
                </div>
            </JqxExpander>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
