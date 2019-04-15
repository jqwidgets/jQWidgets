import * as React from 'react';
 


import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, ITreeProps> {
    private myTree = React.createRef<JqxTree>();

    constructor(props: {}) {
        super(props);

        this.state = {
            source: [
                {
                    expanded: true,
                    icon: './../images/mailIcon.png',
                    items:
                        [
                            {
                                icon: './../images/calendarIcon.png',
                                label: 'Calendar'
                            },
                            {
                                icon: './../images/contactsIcon.png',
                                label: 'Contacts',
                                selected: true
                            }
                        ],
                    label: 'Mail'
                },
                {
                    expanded: true,
                    icon: './../images/folder.png',
                    items:
                        [
                            { icon: './../images/folder.png', label: 'Admin' },
                            { icon: './../images/folder.png', label: 'Corporate' },
                            { icon: './../images/folder.png', label: 'Finance' },
                            { icon: './../images/folder.png', label: 'Other' },
                        ],
                    label: 'Inbox'
                },
                { icon: './../images/recycle.png', label: 'Deleted Items' },
                { icon: './../images/notesIcon.png', label: 'Notes' },
                { iconsize: 14, icon: './../images/settings.png', label: 'Settings' },
                { icon: './../images/favorites.png', label: 'Favorites' }
            ]
        }
    }

    public componentDidMount(): void {
        this.myTree.current!.focus();
    }

    public render() {
        return (
            <JqxTree theme={'material-purple'} ref={this.myTree} style={{ marginLeft: 60, float: 'left' }}
                width={250} height={250}
                rtl={true}
                source={this.state.source}
            />
        );
    }
}

export default App;
