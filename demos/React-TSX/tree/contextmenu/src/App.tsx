import * as React from 'react';
import { useRef, useEffect, useCallback } from 'react';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
  const myTree = useRef<JqxTree>(null);
  const myMenu = useRef<JqxMenu>(null);
  const home = useRef<HTMLLIElement>(null);
  const solutions = useRef<HTMLLIElement>(null);

  const myMenuOnItemClick = useCallback((event: any) => {
    const item = event.args.innerText;
    let selectedItem = null;
    switch (item) {
      case "Add Item":
        selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem != null) {
          myTree.current!.addTo({ label: 'Item' }, selectedItem.element);
        }
        break;
      case "Remove Item":
        selectedItem = myTree.current!.getSelectedItem();
        if (selectedItem != null) {
          myTree.current!.removeItem(selectedItem.element);
        }
        break;
    }
  }, []);

  useEffect(() => {
    myTree.current!.selectItem(home.current);
    myTree.current!.expandItem(solutions.current);

    const handleContextMenu = (event: any) => {
      event.preventDefault();
      if ((event.target).classList.contains('jqx-tree-item')) {
        myTree.current!.selectItem(event.target.parentNode);
        const scrollTop = window.scrollY;
        const scrollLeft = window.scrollX;
        myMenu.current!.open(event.clientX + 5 + scrollLeft, event.clientY + 5 + scrollTop);
      } else {
        myMenu.current!.close();
      }
      return false;
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div>
      <JqxTree theme={'material-purple'} ref={myTree} width={300} height={400}>
        <ul>
          <li ref={home}>Home</li>
          <li ref={solutions}>
            Solutions
            <ul>
              <li>Education</li>
              <li>Financial services</li>
              <li>Government</li>
              <li id='manufacturing'>Manufacturing</li>
              <li>
                Solutions
                <ul>
                  <li>Consumer photo and video</li>
                  <li>Mobile</li>
                  <li>Rich Internet applications</li>
                  <li>Technical communication</li>
                  <li>Training and eLearning</li>
                  <li>Web conferencing</li>
                </ul>
              </li>
              <li>All industries and solutions</li>
            </ul>
          </li>
          <li>
            Products
            <ul>
              <li>PC products</li>
              <li>Mobile products</li>
              <li>All products</li>
            </ul>
          </li>
          <li>
            Support
            <ul>
              <li>Support home</li>
              <li>Customer Service</li>
              <li>Knowledge base</li>
              <li>Books</li>
              <li>Training and certification</li>
              <li>Support programs</li>
              <li>Forums</li>
              <li>Documentation</li>
              <li>Updates</li>
            </ul>
          </li>
          <li>
            Communities
            <ul>
              <li>Designers</li>
              <li>Developers</li>
              <li>Educators and students</li>
              <li>Partners</li>
              <li>
                By resource
                <ul>
                  <li>Labs</li>
                  <li>TV</li>
                  <li>Forums</li>
                  <li>Exchange</li>
                  <li>Blogs</li>
                  <li>Experience Design</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Company
            <ul>
              <li>About Us</li>
              <li>Press</li>
              <li>Investor Relations</li>
              <li>Corporate Affairs</li>
              <li>Careers</li>
              <li>Showcase</li>
              <li>Events</li>
              <li>Contact Us</li>
              <li>Become an affiliate</li>
            </ul>
          </li>
        </ul>
      </JqxTree>
      <JqxMenu
        theme={'material-purple'}
        ref={myMenu}
        onItemclick={myMenuOnItemClick}
        width={120}
        height={56}
        autoOpenPopup={false}
        mode={'popup'}
      >
        <ul>
          <li>Add Item</li>
          <li>Remove Item</li>
        </ul>
      </JqxMenu>
    </div>
  );
};

export default App;