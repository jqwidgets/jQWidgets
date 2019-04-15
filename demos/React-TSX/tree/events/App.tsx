import * as React from 'react';
 


import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, ITreeProps> {
  private myTree = React.createRef<JqxTree>();
  private myPanel = React.createRef<JqxPanel>();

  constructor(props: {}) {
    super(props);

    this.myTreeOnSelect = this.myTreeOnSelect.bind(this);
    this.myTreeOnExpand = this.myTreeOnExpand.bind(this);
    this.myTreeOnCollapse = this.myTreeOnCollapse.bind(this);

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
      ]
    }
  }

  public render() {
    return (
      <div>
        <JqxTree theme={'material-purple'} ref={this.myTree} style={{ marginLeft: '60px', float: 'left' }}
          onSelect={this.myTreeOnSelect}
          onExpand={this.myTreeOnExpand}
          onCollapse={this.myTreeOnCollapse}
          width={250}
          source={this.state.source}
        />
        <div style={{ marginLeft: '20px', float: 'left' }}>
          <div>
            <span>Events:</span>
            <JqxPanel theme={'material-purple'} ref={this.myPanel} style={{ border: 'none' }} width={250} height={200} />
          </div>
        </div>
      </div>
    );
  }

  // Event handling
  private myTreeOnSelect(event: any): void {
    const args = event.args;
    const item = this.myTree.current!.getItem(args.element);
    this.myPanel.current!.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
  }

  private myTreeOnExpand(event: any): void {
    const args = event.args;
    const item = this.myTree.current!.getItem(args.element);
    this.myPanel.current!.prepend('<div style="margin-top: 5px;">Expanded: ' + item.label + '</div>');
  }

  private myTreeOnCollapse(event: any): void {
    const args = event.args;
    const item = this.myTree.current!.getItem(args.element);
    this.myPanel.current!.prepend('<div style="margin-top: 5px;">Collapsed: ' + item.label + '</div>');
  }
}

export default App;
