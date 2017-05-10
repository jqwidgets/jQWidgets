import React from 'react';
import ReactDOM from 'react-dom';

import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        // on to 'expand', 'collapse' and 'select' events.
        this.refs.myTree.on('expand', (event) => {
            let args = event.args;
            let item = this.refs.myTree.getItem(args.element);
            this.refs.Events.prepend('<div style="margin-top: 5px;">Expanded: ' + item.label + '</div>');
        });

        this.refs.myTree.on('collapse', (event) => {
            let args = event.args;
            let item = this.refs.myTree.getItem(args.element);
            this.refs.Events.prepend('<div style="margin-top: 5px;">Collapsed: ' + item.label + '</div>');
        });

        this.refs.myTree.on('select', (event) => {
            let args = event.args;
            let item = this.refs.myTree.getItem(args.element);
            this.refs.Events.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
        });
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

                <JqxTree ref='myTree' style={{ marginLeft: 60, float: 'left' }}
                    width={250} source={source}
                />
            
                <div style={{ marginLeft: 20, float: 'left' }}>
                    <div>
                        <span>Events:</span>
                    <JqxPanel ref='Events' style={{ border: 'none' }}
                            width={250} height={200}
                        />
                    </div>
                </div>

        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
