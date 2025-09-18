import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

function App() {
  const myTree = useRef<JqxTree>(null);
  const myPanel = useRef<JqxPanel>(null);

  const [source] = useState<ITreeProps['source']>([
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

  const myTreeOnSelect = useCallback((event: any) => {
    const args = event.args;
    const item = myTree.current!.getItem(args.element);
    myPanel.current!.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
  }, []);

  const myTreeOnExpand = useCallback((event: any) => {
    const args = event.args;
    const item = myTree.current!.getItem(args.element);
    myPanel.current!.prepend('<div style="margin-top: 5px;">Expanded: ' + item.label + '</div>');
  }, []);

  const myTreeOnCollapse = useCallback((event: any) => {
    const args = event.args;
    const item = myTree.current!.getItem(args.element);
    myPanel.current!.prepend('<div style="margin-top: 5px;">Collapsed: ' + item.label + '</div>');
  }, []);

  return (
    <div>
      <JqxTree
        theme="material-purple"
        ref={myTree}
        style={{ marginLeft: '60px', float: 'left' }}
        onSelect={myTreeOnSelect}
        onExpand={myTreeOnExpand}
        onCollapse={myTreeOnCollapse}
        width={250}
        source={source}
      />
      <div style={{ marginLeft: '20px', float: 'left' }}>
        <div>
          <span>Events:</span>
          <JqxPanel theme="material-purple" ref={myPanel} style={{ border: 'none' }} width={250} height={200} />
        </div>
      </div>
    </div>
  );
}

export default App;