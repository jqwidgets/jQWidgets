import React, { useState } from 'react';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
    const [source] = useState([
        {
            expanded: true,
            icon: "https://www.jqwidgets.com/react/images/mailIcon.png",
            items: [
                {
                    icon: "https://www.jqwidgets.com/react/images/calendarIcon.png",
                    label: "Calendar"
                },
                {
                    icon: "https://www.jqwidgets.com/react/images/contactsIcon.png",
                    label: "Contacts",
                    selected: true
                }
            ],
            label: "Mail"
        },
        {
            expanded: true,
            icon: "https://www.jqwidgets.com/react/images/folder.png",
            items: [
                { icon: "https://www.jqwidgets.com/react/images/folder.png", label: "Admin" },
                { icon: "https://www.jqwidgets.com/react/images/folder.png", label: "Corporate" },
                { icon: "https://www.jqwidgets.com/react/images/folder.png", label: "Finance" },
                { icon: "https://www.jqwidgets.com/react/images/folder.png", label: "Other" }
            ],
            label: "Inbox"
        },
        { icon: "https://www.jqwidgets.com/react/images/recycle.png", label: "Deleted Items" },
        { icon: "https://www.jqwidgets.com/react/images/notesIcon.png", label: "Notes" },
        { iconsize: 14, icon: "https://www.jqwidgets.com/react/images/settings.png", label: "Settings" },
        { icon: "https://www.jqwidgets.com/react/images/favorites.png", label: "Favorites" }
    ]);
    const [toggle] = useState<'none'>('none');

    return (
        <JqxExpander theme="material-purple" width={300} height={400} showArrow={false} toggleMode={toggle}>
            <div>Folders</div>
            <div style={{ overflow: 'hidden', padding: 0 }}>
                <JqxTree theme="material-purple" width="100%" height="100%" source={source} />
            </div>
        </JqxExpander>
    );
};

export default App;