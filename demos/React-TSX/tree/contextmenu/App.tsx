import * as React from 'react';
 


import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, ITreeProps> {
  private myTree = React.createRef<JqxTree>();
  private myMenu = React.createRef<JqxMenu>();
  private home = React.createRef<HTMLLIElement>();
  private solutions = React.createRef<HTMLLIElement>();

  constructor(props: {}) {
    super(props);

    this.myMenuOnItemClick = this.myMenuOnItemClick.bind(this);
  }

  public componentDidMount(): void {
    this.myTree.current!.selectItem(this.home.current);
    this.myTree.current!.expandItem(this.solutions.current);

    document.addEventListener('contextmenu', (event: any) => {
      event.preventDefault();
      if ((event.target).classList.contains('jqx-tree-item')) {
        this.myTree.current!.selectItem(event.target.parentNode);
        const scrollTop = window.scrollY;
        const scrollLeft = window.scrollX;
        this.myMenu.current!.open(event.clientX + 5 + scrollLeft, event.clientY + 5 + scrollTop);
      } else {
        this.myMenu.current!.close();
      }
      return false;
    });
  }

  public render() {
    return (
      <div>
        <JqxTree theme={'material-purple'} ref={this.myTree}
          width={300} height={400}
        >
          <ul>
            <li ref={this.home}>Home</li>
            <li ref={this.solutions}>
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

        <JqxMenu theme={'material-purple'} ref={this.myMenu}
          onItemclick={this.myMenuOnItemClick}
          width={120} height={56}
          autoOpenPopup={false} mode={'popup'}
          >
          <ul>
            <li>Add Item</li>
            <li>Remove Item</li>
          </ul>
        </JqxMenu>
      </div>
    );
  }

  private myMenuOnItemClick(event: any): void {
    const item = event.args.innerText;
    let selectedItem = null;
    switch (item) {
      case "Add Item":
        selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem != null) {
          this.myTree.current!.addTo({ label: 'Item' }, selectedItem.element);
        }
        break;
      case "Remove Item":
        selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem != null) {
          this.myTree.current!.removeItem(selectedItem.element);
        }
        break;
    }
  }
}

export default App;
