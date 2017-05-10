import React from 'react';
import ReactDOM from 'react-dom';

import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTree.focus();
    }
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
            <div style={{ float: 'left' }}>

                <JqxTree ref='myTree' style={{ float: 'left' }}
                    width={250} height={350} source={source}
                />
            
                <div style={{ marginLeft: 20, float: 'left', width: 400, fontSize: 12, fontFamily: 'Verdana' }}>
                    <ul>
                        <li><b>Tab</b> - Like other widgets, the jqxTree widget receives focus by tabbing into it. Once focus is received, users will be able to use the keyboard to change the selection. A second tab will take the user out of the widget.</li>
                        <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous focusable element in the tab order.</li>
                        <li><b>Up and Down</b> arrow keys - move between visible items.</li>
                        <li><b>Left Arrow</b> key - on an expanded item, collapses the item.</li>
                        <li><b>Left Arrow</b> key - on a collapsed or end item moves focus to the item's parent item.</li>
                        <li><b>Right Arrow</b> key - on a collapsed item expands the item.</li>
                        <li><b>Right Arrow</b> key - on an expanded item, moves to the first child item, or does nothing on an end item.</li>
                        <li><b>Home</b> key - moves to the top item in the tree view.</li>
                        <li><b>End</b> key - moves to the last item in the tree view.</li>   
                     </ul>
                </div>

        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
