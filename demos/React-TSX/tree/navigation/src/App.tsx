import * as React from 'react';
import { useRef } from 'react';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
  const myTree = useRef<JqxTree>(null);
  const mySplitter = useRef<JqxSplitter>(null);
  const contentPanel = useRef<HTMLDivElement>(null);

  const styles: any = { float: 'left', marginRight: '5px' };

  const select = (event: any) => {
    if (contentPanel.current) {
      contentPanel.current.innerHTML = "<div style='margin: 10px;'>" + event.args.element.id + "</div>";
    }
  };

  return (
    <JqxSplitter
      theme={'material-purple'}
      ref={mySplitter}
      // @ts-ignore
      width={650}
      height={400}
      panels={[{ size: '250' }]}
    >
      <div>
        <JqxTree
          theme={'material-purple'}
          ref={myTree}
          style={{ border: 'none' }}
          onSelect={select}
          width={'100%'}
          height={'100%'}
        >
          <ul>
            <li id="Mail" item-expanded="true">
              <img style={styles} src="https://www.jqwidgets.com/react/images/mailIcon.png" /><span item-title="true">Mail</span>
              <ul>
                <li id="Calendar" item-expanded="true">
                  <img style={styles} src="https://www.jqwidgets.com/react/images/calendarIcon.png" /><span item-title="true">Calendar</span>
                </li>
                <li id="Contacts">
                  <img style={styles} src="https://www.jqwidgets.com/react/images/contactsIcon.png" /><span item-title="true">Contacts</span>
                </li>
                <li id="Inbox">
                  <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true"><span>Inbox</span></span>
                  <ul>
                    <li id="jQWidgets">
                      <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true">jQWidgets</span>
                      <ul>
                        <li id="Admin">
                          <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true">Admin</span>
                        </li>
                        <li id="Corporate">
                          <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true">Corporate</span>
                        </li>
                        <li id="Finance">
                          <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true">Finance</span>
                        </li>
                        <li id="Other">
                          <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true">Other</span>
                        </li>
                      </ul>
                    </li>
                    <li id="Personal">
                      <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true">Personal</span>
                    </li>
                  </ul>
                </li>
                <li id="Deleted Items" item-expanded="true">
                  <img style={styles} src="https://www.jqwidgets.com/react/images/recycle.png" /><span item-title="true"><span>Deleted Items</span><span style={{ color: 'Blue' }}> (10)</span></span>
                  <ul>
                    <li id="Today">
                      <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true">Today</span>
                    </li>
                    <li id="Last Week">
                      <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true">Last Week</span>
                    </li>
                    <li id="Last Month">
                      <img style={styles} src="https://www.jqwidgets.com/react/images/folder.png" /><span item-title="true">Last Month</span>
                    </li>
                  </ul>
                </li>
                <li id="Notes">
                  <img style={styles} src="https://www.jqwidgets.com/react/images/notesIcon.png" /><span item-title="true">Notes</span>
                </li>
                <li id="Settings">
                  <img style={styles} src="https://www.jqwidgets.com/react/images/settings.png" /><span item-title="true">Settings</span>
                </li>
                <li id="Favorites">
                  <img style={styles} src="https://www.jqwidgets.com/react/images/favorites.png" /><span item-title="true">Favorites</span>
                </li>
              </ul>
            </li>
          </ul>
        </JqxTree>
      </div>
      <div ref={contentPanel}>
        &nbsp;
      </div>
    </JqxSplitter>
  );
};

export default App;