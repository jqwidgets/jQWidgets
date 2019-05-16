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
          icon: "https://www.jqwidgets.com/react/images/mailIcon.png",
          items:
            [
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
          items:
            [
              { icon: "https://www.jqwidgets.com/react/images/folder.png", label: "Admin" },
              { icon: "https://www.jqwidgets.com/react/images/folder.png", label: "Corporate" },
              { icon: "https://www.jqwidgets.com/react/images/folder.png", label: "Finance" },
              { icon: "https://www.jqwidgets.com/react/images/folder.png", label: "Other" },
            ],
          label: "Inbox"
        },
        { icon: "https://www.jqwidgets.com/react/images/recycle.png", label: "Deleted Items" },
        { icon: "https://www.jqwidgets.com/react/images/notesIcon.png", label: "Notes" },
        { iconsize: 14, icon: "https://www.jqwidgets.com/react/images/settings.png", label: "Settings" },
        { icon: "https://www.jqwidgets.com/react/images/favorites.png", label: "Favorites" }
      ]
    }
  }

  public componentDidMount(): void {
    this.myTree.current!.focus();
  }

  public render() {
    return (
      <div>
        <JqxTree theme={'material-purple'} ref={this.myTree} style={{ tabindex: 1, float: 'left' }}
          width={250} height={350}
          source={this.state.source}
        />
        <div style={{ fontFamily: 'Verdana', fontSize: '12px', width: '400px', marginLeft: '20px', float: 'left' }}>
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
    );
  }
}

export default App;
