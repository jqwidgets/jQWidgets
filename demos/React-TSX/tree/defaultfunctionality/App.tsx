import * as React from 'react';
 


import JqxExpander, { IExpanderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

export interface IState extends ITreeProps {
    showArrow?: IExpanderProps["showArrow"];
    toggle?: IExpanderProps["toggleMode"];
}

class App extends React.PureComponent<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {           
            source: [
                {
                    expanded: true,
                    icon: "./../images/mailIcon.png",
                    items:
                        [
                            {
                                icon: "./../images/calendarIcon.png",
                                label: "Calendar"
                            },
                            {
                                icon: "./../images/contactsIcon.png",
                                label: "Contacts",
                                selected: true
                            }
                        ],
                    label: "Mail"
                },
                {
                    expanded: true,
                    icon: "./../images/folder.png",
                    items:
                        [
                            { icon: "./../images/folder.png", label: "Admin" },
                            { icon: "./../images/folder.png", label: "Corporate" },
                            { icon: "./../images/folder.png", label: "Finance" },
                            { icon: "./../images/folder.png", label: "Other" },
                        ],
                    label: "Inbox"
                },
                { icon: "./../images/recycle.png", label: "Deleted Items" },
                { icon: "./../images/notesIcon.png", label: "Notes" },
                { iconsize: 14, icon: "./../images/settings.png", label: "Settings" },
                { icon: "./../images/favorites.png", label: "Favorites" }
            ],
            toggle: 'none'
        }
    }

    public render() {
        return (
            <JqxExpander theme={'material-purple'} width={300} height={400}
                showArrow={false} toggleMode={this.state.toggle}>
                <div>
                    Folders
                    </div>
                <div style={{ overflow: 'hidden', padding: 0 }}>
                    <JqxTree theme={'material-purple'}
                        width={'100%'} height={'100%'}
                        source={this.state.source}
                    />
                </div>
            </JqxExpander>
        );
    }
}

export default App;
