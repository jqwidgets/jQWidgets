import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
    const myTree = useRef<JqxTree>(null);
    const [source] = useState<ITreeProps['source']>([
        {
            expanded: true,
            icon: 'https://www.jqwidgets.com/react/images/mailIcon.png',
            items: [
                {
                    icon: 'https://www.jqwidgets.com/react/images/calendarIcon.png',
                    label: 'Calendar'
                },
                {
                    icon: 'https://www.jqwidgets.com/react/images/contactsIcon.png',
                    label: 'Contacts',
                    selected: true
                }
            ],
            label: 'Mail'
        },
        {
            expanded: true,
            icon: 'https://www.jqwidgets.com/react/images/folder.png',
            items: [
                { icon: 'https://www.jqwidgets.com/react/images/folder.png', label: 'Admin' },
                { icon: 'https://www.jqwidgets.com/react/images/folder.png', label: 'Corporate' },
                { icon: 'https://www.jqwidgets.com/react/images/folder.png', label: 'Finance' },
                { icon: 'https://www.jqwidgets.com/react/images/folder.png', label: 'Other' }
            ],
            label: 'Inbox'
        },
        { icon: 'https://www.jqwidgets.com/react/images/recycle.png', label: 'Deleted Items' },
        { icon: 'https://www.jqwidgets.com/react/images/notesIcon.png', label: 'Notes' },
        { iconsize: 14, icon: 'https://www.jqwidgets.com/react/images/settings.png', label: 'Settings' },
        { icon: 'https://www.jqwidgets.com/react/images/favorites.png', label: 'Favorites' }
    ]);

    useEffect(() => {
        myTree.current?.focus();
    }, []);

    return (
        <JqxTree
            theme="material-purple"
            ref={myTree}
            style={{ marginLeft: 60, float: 'left' }}
            width={250}
            height={250}
            rtl={true}
            source={source}
        />
    );
};

export default App;