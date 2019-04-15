import * as React from 'react';
 


import './App.css';

// import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';
// import { any } from 'prop-types';

// export interface IState extends ITreeProps {
//   checked: ICheckBoxProps["checked"];
// }

class App extends React.PureComponent<{}, ITreeProps> {
  private myTree = React.createRef<JqxTree>();
  // private myDropDownButton = React.createRef<JqxDropDownButton>();
  private home = React.createRef<HTMLLIElement>();
  private solutions = React.createRef<HTMLLIElement>();

  constructor(props: {}) {
    super(props);

    // this.select = this.select.bind(this);
    // this.myTreeOnInitialized = this.myTreeOnInitialized.bind(this);

    // this.state = {
    //   checked: true,
    //   hasThreeStates: true
    // }
  }

  public componentDidMount(): void {
    // this.myTree.current!.selectItem(this.home.current);
    this.myTree.current!.expandItem(this.solutions.current);
    // this.myTree.current!.checkItem(this.solutions.current, true);
    // this.myTree.current!.uncheckItem(document.querySelector("#manufacturing"));
    // this.myDropDownButton.current!.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');
  }

  public render() {
    // const styles: any = { float: 'left', marginRight: '5px' };

    return (
        <JqxTree theme={'material-purple'} ref={this.myTree} 
          // style={{ border: 'none' }}
          // onSelect={this.select}
          width={'50%'} height={'50%'}
        >
          <ul>
            <li ref={this.home}>Home</li>
            <li ref={this.solutions}>
              Solutions
              <ul>
                <li>Education</li>
                <li>Financial services</li>
                <li>Government</li>
                <li>Manufacturing</li>
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
    );
  }

  // Event handling
  // private select(event: any): void {
  //   // this.ContentPanel.current!.innerHTML = "<div style='margin: 10px;'>" + event.args.element.id + "</div>";
  //   const item = this.myTree.current!.getItem(event.args.element);
  //   const dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 4px;">' + item.label + '</div>';
  //   this.myDropDownButton.current!.setContent(dropDownContent);
  // }
}

export default App;
